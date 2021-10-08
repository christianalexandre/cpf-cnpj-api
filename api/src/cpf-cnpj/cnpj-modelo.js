const { cnpj } = require('cpf-cnpj-validator')

class Cnpj{

    constructor(cnpjInformado){
        this.cnpjInformado = cnpjInformado
    }

    valida(cnpjInformado){
        return cnpj.isValid(cnpjInformado)
    }
}

module.exports = new Cnpj


