FROM mysql:8.0.28

ENV MYSQL_ROOT_PASSWORD=root

COPY ./1-SCHEMA.sql /docker-entrypoint-initdb.d/1-SCHEMA.sql
COPY ./2-PRIVILEGES.sql /docker-entrypoint-initdb.d/2-PRIVILEGES.sql

EXPOSE 3306

