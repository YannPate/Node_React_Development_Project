FROM postgres:latest

ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin123
ENV POSTGRES_DB=postgres

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432