import postgres from "postgres";

const sql = postgres( {
  host: "localhost",
  port: 5432,
  database: "Chat App",
  username: "postgres",
  password: "8NWg3w&xpR@/w6Xw6p`a8#f",
});

export default sql;