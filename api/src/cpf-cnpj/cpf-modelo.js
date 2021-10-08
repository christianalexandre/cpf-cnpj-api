const { cpf } = require('cpf-cnpj-validator')

class Cpf{

    constructor(cpfInformado){
        this.cpfInformado = cpfInformado
    }

    valida(cpfInformado){
        return cpf.isValid(cpfInformado)
    }
}

module.exports = new Cpf


