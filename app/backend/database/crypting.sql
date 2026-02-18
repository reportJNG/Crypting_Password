CREATE DATABASE crypting;

CREATE TABLE passwords (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP(6) DEFAULT now()
);
