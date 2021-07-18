const routes = require("express").Router();
const SessionController = require("./controllers/SessionController");
const { user, sequelize } = require ('./models');

const usuario=sequelize.define("usuario",{ name: 'luiza',email:'luiza@gmail.com',password_hash: '1234'});
console.log(usuario)
routes.post('/sessions',SessionController.store)

module.exports = routes;
