import { message } from "./message.model.js";
import { user } from "./user.model.js";

export function setupModels(sequelize) {
  user(sequelize);
  message(sequelize);
}
