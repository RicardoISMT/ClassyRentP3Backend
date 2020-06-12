const Joi = require('@hapi/joi');

const validation = {}


//sistema de validação dos dados submetidos a registar um utilizador
validation.criar_validation = (req,res,next)=>{

    const schema = Joi.object({
        //.required(), é necessário ser preenchido para avançar, ou seja, required em todos os pontos
        alojamento: Joi
            .string() 
            .min(2)
            .max(40)
            .required(), 
    
            cidade: Joi
            .string() 
            .min(3)
            .max(20)
            .required(),

            uni: Joi
            .string() 
            .min(2)
            .max(100)
            .required(),
            
            distancia: Joi.number()
            .integer()
            .min(0)
            .max(9999)
            .required(),

            preco: Joi.number()
            .integer()
            .min(0)
            .max(9999)
            .required(),

            email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'pt', 'org', 'outlook'] } }),

            descricao: Joi
            .string() 
            .min(2)
            .max(100)
            .required(),

            foto: Joi
            .string() 
            .min(2)
            .max(40)
            .required(),
          
    })

    //https://hapi.dev/module/joi/
    const data = {alojamento:req.body.alojamento, cidade:req.body.cidade, uni:req.body.uni, distancia:req.body.distancia, preco:req.body.preco, mail:req.body.mail, descricao:req.body.descricao} 
    //dados inseridos no front-end
    const { error, value } = schema.validate(data);

    if(error){
        switch(error.details[0].context.key){   
            case'alojamento':
            res.status(403).send({
                erro: "O alojamento não foi preenchido corretamente!"
            })
            break
            case'cidade':
            res.status(403).send({
                erro: "A cidade inserida não foi preenchida corretamente!"
            })
            break
            case'uni':
            res.status(403).send({
                erro: "A Universidade/Instituto inserido não se encontra correto!"
            })
            break
            case'distancia':
            res.status(403).send({
                erro: "A distância inserida não se encontra correta!"
            })
            break
            case'preco':
            res.status(403).send({
                erro: "O preço inserido não é válido!"
            })
            break
            case'mail':
            res.status(403).send({
                erro: "O email inserido não se encontra correto!"
            })
            break
            case'descricao':
            res.status(403).send({
                erro: "A descrição inserida não se encontra correta!"
            })
            break
            case'foto':
            res.status(403).send({
                erro: "A imagem inserida não foi submetida corretamente!"
            })
            break
        }   
        }   else {
            next()
        } 


}

//https://dev.to/jacqueline/using-hapi-joi-version-16-1-7-to-validate-a-request-body-in-a-restful-api-bje

//sistema de validação dos dados a alterar numa conta
validation.alterar_validation = (req,res,next)=>{

    const schema = Joi.object({
        //.required(), é necessário ser preenchido para avançar, ou seja, required em todos os pontos
        alojamento: Joi
            .string() 
            .min(2)
            .max(40), 
    
            cidade: Joi
            .string() 
            .min(3)
            .max(20),

            uni: Joi
            .string() 
            .min(2)
            .max(100),
            
            distancia: Joi
            .number()
            .integer()
            .min(0)
            .max(9999),

            preco: Joi
            .number()
            .integer()
            .min(0)
            .max(9999),
            

            mail: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'pt', 'org', 'outlook'] } }),

            descricao: Joi
            .string() 
            .min(2)
            .max(100),
            

            foto: Joi
            .string() 
            .min(2)
            .max(40),
            
          
    })
    
    //https://hapi.dev/module/joi/
    const data = {alojamento:req.body.alojamento, cidade:req.body.cidade, uni:req.body.uni, distancia:req.body.distancia, preco:req.body.preco, mail:req.body.mail, descricao:req.body.descricao}
    //dados provenientes do front-end
    const { error, value } = schema.validate(data);

    if(error){
        switch(error.details[0].context.key){   
            case'alojamento':
            res.status(403).send({
                erro: "O alojamento não foi preenchido corretamente!"
            })
            break
            case'cidade':
            res.status(403).send({
                erro: "A cidade inserida não foi preenchida corretamente!"
            })
            break
            case'uni':
            res.status(403).send({
                erro: "A Universidade/Instituto inserido não se encontra correto!"
            })
            break
            case'distancia':
            res.status(403).send({
                erro: "A distância inserida não se encontra correta!"
            })
            break
            case'preco':
            res.status(403).send({
                erro: "O preço inserido não é válido!"
            })
            break
            case'mail':
            res.status(403).send({
                erro: "O email inserido não se encontra correto!"
            })
            break
            case'descricao':
            res.status(403).send({
                erro: "A descrição inserida não se encontra correta!"
            })
            break
            case'foto':
            res.status(403).send({
                erro: "A imagem inserida não foi submetida corretamente!"
            })
            break
        }   
        }   else {
            next()
        } 
}


module.exports = validation;