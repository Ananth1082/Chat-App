CREATE TYPE chat_types AS ENUM ('group-chat', '1-1-chat');

CREATE TABLE chat (
    chat_id SERIAL PRIMARY KEY,
    chat_name TEXT NOT NULL,
    chat_type chat_types DEFAULT '1-1-chat'
);