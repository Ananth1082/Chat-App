import sql from "../Config/config.js";
import { hashPassword, comparePasswords } from "../Helper/password_hashing.js";
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await sql`
    SELECT * 
    FROM users
    WHERE email = ${email}
  `;
    const user = result[0];
    if (user && user.password) {
      const match = await comparePasswords(password, user.password);
      if (match) {
        // Passwords match
        res.status(200).send({ message: "Signin Successful", user });
      } else {
        // Passwords don't match
        res.status(401).send({ message: "Invalid credentials" });
      }
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error occurred", error: error.message });
  }
};

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  try {
    await sql`
  insert into users(
    username,email,password,created_at
  ) values (
    ${username},${email},${hashedPassword},now()
  )
  `;
    res.status(200).send({ message: "User registered successfully" });
  } catch (error) {
    if (error.code === "23505") {
      if (error.constraint_name === "users_email_key") {
        res.status(409).send({ message: "Email already exists" });
      } else if (error.constraint_name === "users_username_key") {
        res.status(409).send({ message: "Username already exists" });
      }
    } else {
      res.status(500).send({ message: "An error occurred" });
    }
  }
};

export { signup, signin };
