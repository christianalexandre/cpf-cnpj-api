const cpf = require('./src/cpf-cnpj')

module.exports = app => {
    cpf.rotas(app)
}   