const express = require('express');
const router = express.Router();

//vai fazer a ligação aos controladores
const userController = require ("../controllers/user.controller");
const userValidation = require ("../middleware/user.validation");

//rotas relacionadas com o utilizador
router.post('/registo', userValidation.registar_validation, userController.registar);

router.get('/entrar', userValidation.entrar_validation, userController.entrar);

router.delete('/eliminar/:id', userController.eliminar);

router.put('/atualizar/:id', userValidation.atualizar_validation, userController.atualizar);


const placeController = require ("../controllers/place.controller");
const placeValidation = require ("../middleware/place.validation");

//rotas relacionadas com o alojamento que mostra todos os existentes na base de dados

//buscar todos os alojamentos inseridos
router.get('/alojamento', placeController.index)

router.get('/alojamento/:user_id/buscar', placeController.buscar);

router.post('/alojamento/:user_id/criar', placeValidation.criar_validation, placeController.criar)

router.put('/alojamento/:user_id/alterar/:id', placeValidation.alterar_validation, placeController.alterar);

router.delete('/alojamento/:user_id/remover/:id', placeController.remover);

module.exports = router;