import { app } from "../server.js";
import { post_message,get_messages,delete_message,edit_message } from "../Controllers/message.controller.js";

function messageRoutes() {
  app.get("/message/get-message/:chat_id", get_messages);
  app.post("/message/post-message", post_message);
  app.delete("/message/delete-message/:message_id", delete_message);
  app.patch("/message/edit-message/:message_id", edit_message);
}

export { messageRoutes };
