import sql from "../Config/config";

const get_user = async (req, res) => {
  const { user_id } = req.params;

  try {
    const user = await sql`
      SELECT * 
      FROM users 
      WHERE user_id = ${user_id}
    `;
    res.status(200).send({ message: "user retrieved", user });
  } catch (error) {
    res.status(500).send("ERROR");
  }
};

const update_user = async (req, res) => {};

export { get_user, update_user };
