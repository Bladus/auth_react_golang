package config

type Config struct {
    Server  struct {
        Addr         int
        ReadTimeout  int
        WriteTimeout int
    }
    DB struct {
        Host     string
        Port     int
        User     string
        Password string
        DBname   string
    }
}