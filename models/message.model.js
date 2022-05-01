import { Model, DataTypes } from "sequelize";
import { User } from "./user.model.js";

class Message extends Model {}

export function message(sequelize) {
  Message.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      from: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      to: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize }
  );
}
