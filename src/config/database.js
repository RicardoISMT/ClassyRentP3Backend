const Sequelize = require('sequelize');
const sequelize = new Sequelize('registar', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//base de dados 'registar'

module.exports = sequelize;