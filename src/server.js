
const proffys = [
{
    name: "Diego fernandes", 
    avatar:"https://avatars3.githubusercontent.com/u/41289855?s=400&u=a4b758cdc46e98dd9135062746c079dc1cb378fd&v=4",
    whatsapp: "99994213546",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "PHP",
    cost: "20",
    weekday:[0],
    time_from: [720],
     time_to: [1220]
    }
]

    function pageLanding(req, res){
        return res.render("/index.html")
    }


    function pageStudy(req, res){
        return res.render("/study.html", { proffys})
    }

    function pageGiveClasses(req, res){
        return res.render("//give-classes.html")
    }


const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server
//configurar arquivos statics (css, Scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", )

.listen(5500)
