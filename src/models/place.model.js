const sequelize = require('sequelize');

//ligação à base de dados 
const db = require("../config/database");

//dados do alojamento - place
let Place = db.define('place', {
    alojamento: { type: sequelize.STRING },
    cidade: { type: sequelize.STRING },
    uni: { type: sequelize.STRING },
    distancia: { type: sequelize.INTEGER },
    preco: { type: sequelize.INTEGER },
    mail: { type: sequelize.STRING },
    descricao: { type: sequelize.TEXT },
    //foto: { type: sequelize.STRING }
    
},
    {
        timestamps: false, tableName: 'place' //tabela onde se encontra os dados pretendidos
    });

module.exports = Place;