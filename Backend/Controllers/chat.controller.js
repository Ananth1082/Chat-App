import sql from "../Config/config";

const get_chats = async (req, res) => {
  const { user_id } = req.params;

  try {
    const chats_list = await sql`
      SELECT * 
      FROM chats
      WHERE chat_id in (
        SELECT chat_id 
        FROM members
        WHERE member_id = ${user_id}
      );
    `;
    res.status(200).send({ message: "Chats retieved succesfully", chats_list });
  } catch (error) {
    res.status(500).send({ message: "ERROR" });
  }
};

const create_chat = async (req, res) => {
  const { chat_name, chat_type } = req.body;
  try {
    await sql`
      
    `;
  } catch (error) {
    
  }
};

const update_chat = async (req, res) => {};

const add_member = async (req, res) => {};

const delete_chat = async (req, res) => {};

const remove_member = async (req, res) => {};

export {
  get_chats,
  create_chat,
  update_chat,
  add_member,
  delete_chat,
  remove_member,
};
