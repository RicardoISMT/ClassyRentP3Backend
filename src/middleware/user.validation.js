const Joi = require('@hapi/joi');

const validation = {}



//sistema de validação dos dados submetidos a registar um utilizador
validation.registar_validation = (req,res,next)=>{

    const schema = Joi.object({
        person: Joi
            .string() 
            .min(2)
            .max(40)
            .required(), //é necessário ser preenchido para avançar, ou seja, required
    
        pass: Joi
            .string()
            .min(5) //minímo de 5 digitos para a palavra-passe
            .pattern(new RegExp('^[a-zA-Z0-9]{3,40}$')), //caracteres permitidos 
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'pt', 'org', 'outlook'] } })  
    })
    
    //https://hapi.dev/module/joi/
    const data = {person:req.body.person, pass:req.body.pass, email:req.body.email} //dados do front-end
    const { error, value } = schema.validate(data);

    if(error){
        switch(error.details[0].context.key){   //0 = todos os erros 
            case'person':
            res.status(403).send({
                erro: "O nome não foi preenchido com sucesso!"
            })
            break
            case'pass':
            res.status(403).send({
                erro: "A palavra-passe não foi preenchida com sucesso!"
            })
            break
            case'email':
            res.status(403).send({
                erro: "O email não foi preenchido com sucesso!"
            })
            break
        }   
        }   else {
            next()
        } 
}


//sistema de validação dos dados submetidos a iniciar com uma conta
validation.entrar_validation = (req,res,next)=>{

    const schema = Joi.object({
        email: Joi
            .string() 
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'pt', 'org', 'outlook'] } })
            .required(), //é necessário ser preenchido para avançar, ou seja, é required
    
        pass: Joi
            .string()
            .min(5)
            .pattern(new RegExp('^[a-zA-Z0-9]{3,40}$')), //caracteres permitidos 
    
              
    })
    
    const data = {email:req.body.email, pass:req.body.pass} //dados provenientes do front-end
    const { error, value } = schema.validate(data);

    if(error){
        switch(error.details[0].context.key){   //0 = todos os erros 
            case'email':
            res.status(403).send({
                erro: "O email inserido não é válido!"
            })
            break
            case'pass':
            res.status(403).send({
                erro: "A palavra passe inserida não é válida!"
            })
            break
        }   
        }   else {
            next()
        } 
}



//sistema de validação dos dados a alterar numa conta
validation.atualizar_validation = (req,res,next)=>{

    const schema = Joi.object({
        pass: Joi
            .string()
            .min(5)
            .pattern(new RegExp('^[a-zA-Z0-9]{3,40}$')), //caracteres permitidos 
    })
    
    const data = {pass:req.body.pass} //dados provenientes do front-end
    const { error, value } = schema.validate(data);

    if(error){
        switch(error.details[0].context.key){   //0 = todos os erros 
            case'pass':
            res.status(403).send({
                erro: "A palavra passe inserida não é válida!"
            })
            break
        }   
        }   else {
            next()
        } 
}




module.exports = validation;