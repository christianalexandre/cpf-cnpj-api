const port = 8000
const app = require('./config/express')
const routes = require('./routes')

app.use((req, res, next) => {
    res.set({
        'Content-Type': 'application/json'
    })
    next()
})

routes(app)

app.listen(port, () => console.log(`Servidor Node.js rodando na porta ${port}`))