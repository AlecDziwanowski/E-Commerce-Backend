// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection
const sequelize = require('../config/connection.js');

// create Category class from Model class, which is from the sequelize library
class Category extends Model { }

// set up fields and rules for Category model
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// export Category to be used in routes and seeds folders
module.exports = Category;
