import { app } from "../server.js";
import 

function messageRoutes() {
  app.get("/message/:id", getMessages);
  app.post("/message/post-message", post_message);
  app.delete("/message/delete-message", deleteMessage);
  app.patch("/message/edit-message", editMessage);
}

export { messageRoutes };
