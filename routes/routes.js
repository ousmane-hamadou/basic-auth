import { User } from "../models/user.model.js";
import { userRoute } from "./user.routes.js";

function setupRoutes(app) {
  app.get("/", async (req, res) => {
    let payload = { authenticate: false, user_name: "" };

    const userId = req.session.userId;
    if (userId) {
      const user = await User.findByPk(userId);

      payload = Object.assign(payload, {
        user_name: user.pseudo,
        authenticate: true,
      });
    }

    res.render("pages/index", { payload });
  });

  app.use("/", userRoute);
}

export { setupRoutes };
