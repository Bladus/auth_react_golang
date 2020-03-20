package main

import (
    "application/handler"
    "application/session"
    "application/config"
    "application/db"
    "encoding/json"
    "database/sql"
    "net/http"
    "strconv"
    "flag"
    "time"
    "fmt"
    "log"
    "os"
)

var d *sql.DB
var c *config.Config
var database *db.Database
var inMemorySession *session.Session

func init() {
    conf := flag.String("conf", "./conf/conf.json", "a string")

    flag.Parse()

    log.Printf("read conf => %s", *conf)

    file, err := os.Open(*conf)
    if err != nil {
        log.Println(err)
    }
    decoder := json.NewDecoder(file)
    err = decoder.Decode(&c)
    if err != nil {
        log.Println(err)
    }

    inMemorySession = session.NewSession()

    d = database.Connect(fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", c.DB.Host, c.DB.Port, c.DB.User, c.DB.Password, c.DB.DBname))
}

func main() {
    server := &http.Server{
        Addr: ":" + strconv.Itoa(c.Server.Addr),
        Handler: &handler.Handler{
            Config: c,
            Session: inMemorySession,
            DB: d,
        },
        ReadTimeout:  time.Duration(c.Server.ReadTimeout) * time.Millisecond,
        WriteTimeout: time.Duration(c.Server.WriteTimeout) * time.Millisecond,
    }

    server.SetKeepAlivesEnabled(false)
    fmt.Printf("--> listen :%v\n", c.Server.Addr)
    log.Fatal(server.ListenAndServe())
}