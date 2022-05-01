import express from "express";
import session from "express-session";
import { setupDatabase } from "./database.js";
import { setupRoutes } from "./routes/routes.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET || "secret",
  })
);

setupDatabase(app);
setupRoutes(app);

app.listen(process.env.PORT || 3000, () =>
  console.log("application is running")
);
