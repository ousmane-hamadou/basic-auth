import { Sequelize } from "sequelize";
import { setupModels } from "./models/models.js";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.cwd() + "/database.sqlite",
  logging: false,
});

(async () => {
  await sequelize.authenticate();

  setupModels(sequelize);

  await sequelize.sync({ alter: true });
})();

export function setupDatabase(app) {
  app.set("sequelize", sequelize);
}
