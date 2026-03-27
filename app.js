require("dotenv").config()
const express = require("express")
const session = require("express-session")
const path = require("path")
const app = express()


//database
const db = require("./db")


//routlar
const routes = require("./routes/index")


//Middlewares
app.use(express.urlencoded({ extended: false }));//html formlarından post işlemlerinin değişkenlerini almak için//nested için true yazılmalı


//ejs
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.use("/",routes)





const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`)
})