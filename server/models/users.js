'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes,
      allowNull: false
    },
    phone: {
      type: DataType.STRING,
      allowNull: false
    }
  }, {});
  Users.associate = (models) => {
    // associations can be defined here
  };
  return Users;
};
