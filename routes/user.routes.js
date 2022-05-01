import express from "express";
import { User } from "../models/user.model.js";

const router = express.Router();

router.get("/signup", async (_req, res) => {
  res.render("pages/signup");
});

router.post("/signup", async (req, res) => {
  const { pseudo, password } = req.body;
  let newUser = User.build({ pseudo, password });
  newUser = await newUser.save();

  req.session.userId = newUser.id;
  res.redirect("/");
});

router.post("/signin", async (req, res) => {
  const { pseudo, password } = req.body;
  const user = await User.findOne({ pseudo, password });

  if (user) {
    req.session.userId = user.id;
  }
  res.redirect("/");
});

export { router as userRoute };
