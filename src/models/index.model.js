const User = require("../models/user.model");
const Place = require("../models/place.model");


//um utilizador tem vários alojamentos 
User.hasMany(Place,{
    foreignKey: {
        name: 'user_id',
        allowNull: false,
        as: 'places'
    }})

Place.belongsTo(User,{
    //se um utilizador for eliminado, todos os alojamentos associados ao mesmo também são eliminados
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'user_id',
        allowNull: false,
        as: 'users'
    }
})




module.exports = {User,Place};