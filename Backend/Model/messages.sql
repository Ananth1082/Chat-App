CREATE TYPE message_statuses as ENUM('sent','delivered','read');

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INT NOT NULL,
    chat_id INT NOT NULL,
    message_text TEXT NOT NULL,
    message_status message_statuses DEFAULT 'sent',
    message_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (chat_id) REFERENCES chats(chat_id) ON UPDATE CASCADE ON DELETE CASCADE
);
