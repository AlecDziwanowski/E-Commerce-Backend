// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection
const sequelize = require('../config/connection');

// create ProductTag class from Model class, which is from the sequelize library
class ProductTag extends Model { }

// set up fields and rules for ProductTag model
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// export ProductTag to be used in routes and seeds folders
module.exports = ProductTag;
