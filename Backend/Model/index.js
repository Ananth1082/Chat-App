import sql from "../Config/config.js";

const createTables = async () => {
  await sql.file("Model/users.sql");
  await sql.file("Model/chats.sql");
  await sql.file("Model/messages.sql");
  await sql.file("Model/members.sql");
};

const dropAll = async () => {
  await sql`
    DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;
  `.simple();
};

export { createTables, dropAll };
