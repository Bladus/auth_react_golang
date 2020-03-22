package route

import (
    "golang.org/x/crypto/bcrypt"
    "application/session"
    "encoding/json"
    "database/sql"
    "net/http"
    "time"
    "fmt"
    "log"
)

type Login struct {
    User     string
    Password string
}

func CheckPasswordHash(password, hash string) error {
    err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
    return err
}

func (r *Route) Login(res http.ResponseWriter, req *http.Request, session *session.Session, db *sql.DB, COOKIE_NAME string) {
    if req.Method == "POST" {
        res.Header().Set("Content-Type", "application/json; charset=utf-8")
        var (
            l Login
            username string
            password string
        )

        req.ParseForm()
        for key, _ := range req.Form {
            err := json.Unmarshal([]byte(key), &l)
            if err != nil {
                log.Println(err.Error())
            }
        }

        err := db.QueryRow("SELECT username, password FROM users WHERE username = $1;", l.User).Scan(&username, &password)
        if err != nil {
            log.Printf("SELECT username, password FROM users WHERE username = %s; :: %s\n", l.User, err.Error())
            res.Write([]byte(`{"ok": 0}`))
        } else {
            log.Printf("SELECT username, password FROM users WHERE username = %s;", l.User)

            err := CheckPasswordHash(l.Password, password)

            if err != nil {
                log.Printf("CheckPasswordHash(l.Password, password) :: %s\n", err.Error())
                res.Write([]byte(`{"ok": 0}`))
            } else {
                sessionId := session.Init(l.User)

                cookie := &http.Cookie{
                    Name: COOKIE_NAME,
                    Value: sessionId,
                    Expires: time.Now().Add(5 * time.Minute),
                }
                http.SetCookie(res, cookie)

                _, err := db.Exec("UPDATE users SET last_login=$1 WHERE username=$2;", time.Now(), username)
                if err != nil {
                    log.Printf("UPDATE users SET last_login=%s WHERE username=%s; :: %s\n", time.Now(), username, err.Error())
                } else {
                    log.Printf("UPDATE users SET last_login=%s WHERE username=%s;", time.Now(), username)
                }

                res.Write([]byte(`{"ok": 1}`))
            }
        }
    }
}

func (r *Route) User(res http.ResponseWriter, req *http.Request, session *session.Session, db *sql.DB, COOKIE_NAME string) {
    if req.Method == "POST" {
        var (
            username string
        )

        res.Header().Set("Content-Type", "application/json; charset=utf-8")
        cookie, err := req.Cookie(COOKIE_NAME)
        if err != nil {
            log.Printf("req.Cookie(COOKIE_NAME) :: %s\n", err.Error())
            res.Write([]byte(`{"username": null}`))
        } else {
            err := db.QueryRow("SELECT username FROM users WHERE username=$1;", session.Get(cookie.Value)).Scan(&username)
            if err != nil {
                log.Printf("SELECT username FROM users WHERE username=%s; :: %s\n", session.Get(cookie.Value), err.Error())
                res.Write([]byte(`{"username": null}`))
            } else {
                log.Printf("SELECT username FROM users WHERE username = %s;\n", session.Get(cookie.Value))
                res.Write([]byte(fmt.Sprintf(`{"username": "%s"}`, session.Get(cookie.Value))))
            }
        }
    }
}

func (r *Route) Logout(res http.ResponseWriter, req *http.Request, session *session.Session, db *sql.DB, COOKIE_NAME string) {
    res.Header().Set("Content-Type", "application/json; charset=utf-8")
    cookie, err := req.Cookie(COOKIE_NAME)
    if err != nil {
        log.Printf("req.Cookie(COOKIE_NAME) :: %s\n", err.Error())
        res.Write([]byte(`{"username": null}`))
    } else {
        session.Delete(cookie.Value)
        cookie := &http.Cookie{
            Name: COOKIE_NAME,
            Value: "",
            Expires: time.Now(),
        }
        http.SetCookie(res, cookie)
    }
}