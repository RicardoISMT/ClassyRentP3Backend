const sequelize = require('sequelize');

//ligação à base de dados 
const db = require("../config/database");

//dados do utilizador - user
let User = db.define('user', {
    person: { type: sequelize.STRING },
    email: { type: sequelize.STRING },
    pass: { type: sequelize.STRING }
},

    {
        timestamps: false, tableName: 'user' //tabela onde se encontra os dados pretendidos
    });

module.exports = User;