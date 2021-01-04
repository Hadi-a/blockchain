//
var blockchain =require('./blockchain.js')
var bt=require('./testing')

var body_parser= require('body-parser')
var express =require('express')
var morgan =require('morgan')
var app= express()



app.get('/blockchain',(req,res)=>{
    res.json(bt)
})
app.get('/gettx',(req,res)=>{
    res.json(bt.GetLastTx(1))
})
app.listen(3000,()=>{
    console.log("Server is running")
})