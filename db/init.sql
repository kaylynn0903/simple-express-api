CREATE EXTENSION "uuid-ossp";

CREATE TABLE public.Message(
    id uuid DEFAULT uuid_generate_v4 (),
    title VARCHAR(100) NOT NULL,
    description TEXT,
    url TEXT,
    date_created VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);