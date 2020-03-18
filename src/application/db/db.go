package db

import (
    "database/sql"
    "log"
    _ "github.com/lib/pq"
)

type Database struct {}

func (d *Database) Connect(psqlInfo string) *sql.DB {
    db, err := sql.Open("postgres", psqlInfo)
    if err != nil {
        panic(err)
    }
    //defer db.Close()

    err = db.Ping()
    if err != nil {
        panic(err)
    }

    log.Println("Successfully connected to database!")

    return db
}