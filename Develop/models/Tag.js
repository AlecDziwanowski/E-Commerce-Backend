// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection
const sequelize = require('../config/connection.js');

// create Tag class from Model class, which is from the sequelize library
class Tag extends Model { }

// set up fields and rules for Tag model
Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// export Tag to be used in routes and seeds folders
module.exports = Tag;
