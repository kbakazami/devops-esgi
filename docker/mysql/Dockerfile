FROM mysql:8.0.28

ENV MYSQL_DATABASE=database
    MYSQL_USER=root
    MYSQL_PASSWORD=root
    MYSQL_ROOT_PASSWORD=root

COPY ./1-SCHEMA.sql /docker-entrypoint-initdb.d/
COPY ./2-PRIVILEGES.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

