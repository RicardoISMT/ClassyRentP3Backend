const Models = require("../models/index.model");
const sequelize = require("../config/database");
const controller = {};
sequelize.sync();


//registar um novo utilizador
controller.registar = async (req, res) => {
    const user = await Models.User.create(req.body)
    res.json(user);
}


//entrar com um utilizador com uma conta existente
controller.entrar = async (req, res) => {
    const {email,pass} = req.body
    const Email = await Models.User.findOne({
        where: {email:email}
    })

    //enviar um erro
    if(!Email){
        return res.status(403).send({
            erro: "Email inserido não é válido!"
        })
    } 
    const Validar = pass === Email.pass
    if(!Validar){
        return res.status(403).send({
            erro: "Palavra-passe inserido não é correta!"
        })}

    res.json(Email)
}


//eliminar o utilizador
controller.eliminar = async (req, res) => {
    const {id}=req.params
    const user = await Models.User.destroy({
        where: {id}
    })
    if(user){
        return res.status(200).json({
            sucesso: "O utilizador foi eliminado com sucesso"
        })
    }else{
        return res.status(400).json({
            erro: "O utilizador não se encontra registado!"
        })}

    res.json(user);
}


//atualizar a password
controller.atualizar = async (req, res) => {
    const {id} = req.params
    const Data = await Models.User.findByPk(id)

    if(!Data){
        return res.status(400).json({
            erro: "Dados inseridos incorretos!"
        })
    }

    const user = await Models.User.update(req.body,{
        where: {id}
    })
    if(user){
        return res.status(200).json({
            sucesso: "Palavra-passe atualizada com sucesso!"
        })
    }else{
        return res.status(400).json({
            erro: "Atualização não executada"
        })}

    res.json(user);
    }



module.exports = controller;
