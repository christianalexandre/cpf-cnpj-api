const cpfControlador = require('./cpf-controlador')
const cnpjControlador = require('./cnpj-controlador')

module.exports = app => {
    app
      .route('/cpf/:cpfInformado')
      .get(cpfControlador.buscaCpf)

    app
      .route('/cnpj/:cnpjInformado')
      .get(cnpjControlador.buscaCnpj)
}