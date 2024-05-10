import { app } from "../server.js";
import { signin, signup } from "../Controllers/auth.controller.js";
function authRoutes() {
  app.post("/auth/signin", signin);
  app.post("/auth/signup", signup);
}

export { authRoutes };
