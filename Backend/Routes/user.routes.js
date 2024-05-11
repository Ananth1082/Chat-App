import { app } from "../server";
import { get_user, update_user } from "../Controllers/user.controller.js";

function userRoutes() {
  app.get("/user/get-info/:user_id", get_user);
  app.patch("user/update-info/:user_id", update_user);
}
