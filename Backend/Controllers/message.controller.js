import sql from "../Config/config.js";

const post_message = async (req, res) => {
  const { sender_id, chat_id, message_text, message_status } = req.body;
  console.log(req.body);
  try {
    await sql`
    INSERT INTO messages(
      sender_id, 
      chat_id,
      message_text, 
      message_status,
      message_timestamp
    ) values (
      ${sender_id},
      ${chat_id},
      ${message_text}, 
      ${message_status}, 
      now()
    )
    `;
    res.status(200).send({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    if (error.code == "UNDEFINED_VALUE") {
      res.status(401).send({ message: "Input Error: Missing Values" });
    } else if (error.code == "22P02") {
      res.status(403).send({
        message: "Input Error: ENUM Error- Invalid choice for message status",
      });
    } else if (error.code == "23503") {
      res.status(411).send({ message: "Input Error: User does not exist" });
    } else {
      res.status(400).send("Generic Error");
    }
  }
};

const get_messages = async (req, res) => {
  const { chat_id } = req.params;
  try {
    const messages = await sql`
    SELECT * 
    FROM "messages"
    WHERE chat_id = ${chat_id}
  `;
    res
      .status(200)
      .send({ message: "Messages retrived", messageList: messages });
  } catch (error) {
    console.log("Error");
    res.status(500).send("ERROR");
  }
};

const delete_message = async (req, res) => {
  const { message_id } = req.params;
  try {
    await sql`
      DELETE FROM messages
      WHERE message_id = ${message_id};
    `;
    res.status(200).send({ message: "Message deleted successfully " });
  } catch (error) {
    res.status(500).send({ message: "An error occured" });
  }
};

const edit_message = async (req, res) => {
  const message_id = req.params.message_id;
  const { new_text } = req.body;

  try {
    await sql`
      UPDATE messages 
      SET message_text = ${new_text}
      WHERE message_id = ${message_id}; 
    `;
    res.status(200).send({ message: "Message updated successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error occured" }); 
  }
};

export { post_message, get_messages, delete_message, edit_message };
