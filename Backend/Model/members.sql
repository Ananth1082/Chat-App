CREATE TABLE members (
    chat_id INT NOT NULL,
    member_id INT NOT NULL,
    FOREIGN KEY (chat_id) REFERENCES chat(chat_id) ON DELETE CASCADE,
    FOREIGN KEY (member_id) REFERENCES users(user_id) ON DELETE CASCADE
);
