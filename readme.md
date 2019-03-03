## Read Me

In order to run the True 2 Size microservice, log into Postgres and run the following commands.
Create the database:

`CREATE DATABASE true2size
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;`

Create the service user:

`CREATE USER dbuser WITH
PASSWORD 'secretpassword'
  LOGIN
  SUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  REPLICATION;`

Create the table:

`CREATE TABLE sizes(
 id serial PRIMARY KEY,
 shoe VARCHAR (50) NOT NULL,
 size int,
);`

Once completed, update the host in db/index.js and then run application.