// Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configurar nunjucks 
const nunjusck = require('nunjucks')
nunjusck.configure('src/views', {
    express: server,
    noCache: true,
})

server
//receber os dados do req.body
.use(express.urlencoded({ extend: true }))
// configurar arquivos estáticos (css, scripts e images)
.use(express.static("public"))
// rotas das páginas (aplicação)
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)