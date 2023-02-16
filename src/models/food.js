'use strict';

module.exports = (sequelizeDatabase, DataTypes) => 
{
  return sequelizeDatabase.define('foods', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};