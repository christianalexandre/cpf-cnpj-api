const Cnpj = require('./cnpj-modelo')

module.exports = {
    buscaCnpj(req, res, next){  
        try {
            if (Cnpj.valida(req.params.cnpjInformado) == true) {
                res.status(200).json('CNPJ válido')
                next()
            } else {
                res.status(200).json('CNPJ inválido')
            }           
        } catch (erro) {
            res.status(404).json(`${erro.message}`)
        }

    }   
}