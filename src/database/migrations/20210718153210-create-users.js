
'use strict';

const { sequelize } = require("../../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      id: {type: Sequelize.INTEGER,primaryKey: true,autoIncrement: true,allowNull: false},
      name: {type: Sequelize.STRING,allowNull: false},
      email: {type: Sequelize.STRING,unique: true, allowNull: false},
      password_hash:{type: Sequelize.STRING,allowNull: false},
      createdAt: {type: Sequelize.DATE,allowNull: true},
      updatedAt: {type: Sequelize.DATE,allowNull: true}
    })
    

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};

