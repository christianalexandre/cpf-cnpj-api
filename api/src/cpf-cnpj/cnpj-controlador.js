const Cnpj = require('./cnpj-modelo')
const servicos = require('./cpf-cnpj-servicos')

module.exports = {
    async buscaCnpj(req, res, next){  
        try {
            if (Cnpj.valida(req.params.cnpjInformado) == true) {
                dados = await servicos.buscaNome(req.params.cpfInformado)
                res.status(200).json({
                    nome: `${dados[0]}`,
                    situacao: `${dados[1]}`
                })
                next()
            } else {
                res.status(200).json('CNPJ inválido')
            }           
        } catch (erro) {
            res.status(404).json(`${erro.message}`)
        }

    }   
}