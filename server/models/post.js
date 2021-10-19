"use strict"

const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    toJSON() {
      return { ...this.get(), id: undefined }
    }
  }

  Post.init(
    {
      text: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Post must have a body",
          },
          notEmpty: {
            msg: "body must not be empty",
          },
        },
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
    }
  )

  return Post
}
