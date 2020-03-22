/*CREATE USER docker WITH ENCRYPTED PASSWORD 'docker';
ALTER USER docker WITH SUPERUSER;
GRANT ALL ON SCHEMA public TO docker;
CREATE DATABASE front_web WITH OWNER docker;
GRANT ALL PRIVILEGES ON DATABASE front_web TO docker;*/


CREATE TABLE users (
    id serial NOT NULL, 
    username character varying(256) NOT NULL, 
    password character varying(60) NOT NULL, 
    is_admin boolean NOT NULL, 
    is_valid boolean NOT NULL, 
    is_banned boolean NOT NULL, 
    date_created timestamp without time zone DEFAULT NOW(), 
    last_login timestamp without time zone
);

INSERT INTO public.users (
    username, 
    password, 
    is_admin, 
    is_valid, 
    is_banned 
)
    VALUES ('admin', '$2a$14$G/vUJUiPpsmsDzOg71GpgekijA9dmmMqhJFE11M4h6HjHkG6mOi7q', true, true, false);


/*ALTER TABLE public.users OWNER TO docker;*/