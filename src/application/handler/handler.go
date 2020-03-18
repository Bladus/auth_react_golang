package handler

import (
    "application/session"
    "application/config"
    "application/route"
    "database/sql"
    "net/http"
)

const (
    COOKIE_NAME = "sessionId"
)

type Handler struct {
    Route     *route.Route
    Config    *config.Config
    Session   *session.Session
    DB        *sql.DB
}

func (h *Handler) ServeHTTP(res http.ResponseWriter, req *http.Request) {
    switch path := req.URL.Path; path {
    case "/api/user":
        h.Route.User(res, req, h.Session, h.DB, COOKIE_NAME)
    case "/api/login":
        h.Route.Login(res, req, h.Session, h.DB, COOKIE_NAME)
    default:
    }
}