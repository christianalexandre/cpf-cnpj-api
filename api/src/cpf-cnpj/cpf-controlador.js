const Cpf = require('./cpf-modelo')
const servicos = require('./cpf-cnpj-servicos')

module.exports = {
    async buscaCpf(req, res, next){  
        try {
            if (Cpf.valida(req.params.cpfInformado) == true) {
                dados = await servicos.buscaNome(req.params.cpfInformado)
                res.status(200).json({
                    nome: `${dados[0]}`,
                    situacao: `${dados[1]}`
                })
                next() 
            } else {
                res.status(400).json('CPF inválido')
            }           
        } catch (erro) {
            res.status(404).json(`${erro.message}`)
        }
    }
}