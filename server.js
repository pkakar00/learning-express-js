const express=require('express')
const app=express()
const path=require('path')
const {engine}=require('express-handlebars')

app.engine('handlebars',engine())
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/',require(path.join(__dirname,'routes/routing.js')))

app.listen(3000)