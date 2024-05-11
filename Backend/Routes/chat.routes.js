import { app } from "../server";
import {
  get_chats,
  create_chat,
  update_chat,
  add_member,
  delete_chat,
  remove_member,
} from "../Controllers/chat.contoller.js";

function chatRoutes() {
  //routes
  app.get("/chat/get-chats/:user_id", get_chats);
  app.post("/chat/create-chats", create_chat);
  app.patch("/chat/update-chat-info", update_chat);
  app.patch("chat/add-member/:chat_id", add_member);
  app.delete("chat/delete-chat/:id", delete_chat);
  app.patch("chat/remove-member/:chat_id", remove_member);
}

export { chatRoutes };
