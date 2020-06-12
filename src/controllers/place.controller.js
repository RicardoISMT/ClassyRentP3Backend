const Models = require("../models/index.model");
const sequelize = require("../config/database");
const controller = {};
sequelize.sync();



//controller.index = async (req,res) => {
//    const place = await Models.Place.findAll()
//    res.json(place)
//}




controller.index = async (req, res) => {
    //opção 1) retorna todos os alunos incluindo as disciplinas e respetiva relação
    const place = await Models.Place.findAll()
      .then(function (place) {
        return place;
      })
      .catch((error) => {
        res.status(500).send({
          message: error.message || "Ocorreu um erro ao carregar os dados dos alunos.",
        });
      });
  res.json(place);
};










//criar um alojamento
controller.criar = async (req, res) => {
    //buscar o user_id do utilizador na url
    const {user_id} = req.params

    
/*const user = await Models.User.findByPk(user_id) //verificar a associação através da key
    if(!user){
        return res.status(400).json({
            erro: "O utilizador não se encontra registado!"
        })
    }*/

    const place = await Models.Place.create({
        //fazer request ao formulário do que foi inserido em cada área
        alojamento: req.body.alojamento,
        cidade: req.body.cidade,
        uni: req.body.uni,
        distancia: req.body.distancia,
        preco: req.body.preco,
        mail: req.body.mail,
        descricao: req.body.descricao,
        //foto: req.body.foto,
        user_id: user_id,
    })
    res.json(place);
}




//buscar um alojamento
controller.buscar = async (req, res) => {
    const {user_id} = req.params
    const data = await Models.User.findByPk(user_id,{
        include:{
            association: 'places' 
        } 
    }) 

    if(!data){
        return res.status(400).json({
            erro: "O utilizador não se encontra registado!"
        })
    }

    res.json(data.places) //apenas vai buscar informações à tabela dos alojamentos
}




//remover um alojamento
controller.remover = async (req, res) => {
    const {id,user_id}=req.params
    const user = await Models.User.findByPk(user_id) //verificar a associação através da key
    if(!user){
        return res.status(400).json({
            erro: "O alojamento não se encontra registado!"
        })
    }
    const place = await Models.Place.destroy({
        where: {id}
    })
    if(place){
        return res.status(200).json({
            sucesso: "Alojamento removido com sucesso"
        })
    }else{
        return res.status(400).json({
            erro: "Alojamento não encontrado!"
        })}

    res.json(place);
}












//atualizar um alojamento
controller.alterar = async (req, res) => {
    const {id,user_id} = req.params
    const Local = await Models.Place.findByPk(user_id)

    console.log(req.body);

    if(!Local){
        return res.status(400).json({
            erro: "Dados inseridos incorretos!"
        })
    }

    const place = await Models.Place.update(req.body,{
        where: {id,user_id}
    })
    if(place){
        return res.status(200).json({
            sucesso: "Alojamento atualizado com sucesso!"
        })
    }else{
        return res.status(400).json({
            erro: "Atualização não finalizada!"
        })}

    res.json(place);
    }


    



module.exports = controller;