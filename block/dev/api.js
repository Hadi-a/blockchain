//
var blockchain =require('./blockchain.js')
//var bt=require('./testing')

var body_parser= require('body-parser')
var express =require('express')
var morgan =require('morgan')
var app= express()
app.use(body_parser.json())
app.use(morgan('dev'))


const Blockchain= new blockchain()


app.get('/blockchain',(req,res)=>{
    res.json(Blockchain)
})
app.get('/gettx',(req,res)=>{
    res.json(Blockchain.GetLastTx(1))
})

app.get('/createnewbloc',(req,res)=>{
    res.json(Blockchain.GetLastTx(1))
})

app.post('/mine',(req,res)=>{
    var Tx= (Blockchain.CreateNewTx(req.body.amount,req.body.sender,req.body.receiver))
    res.json({"sucess":true, "message":"Transaction hax been push into mempool and will be addeded in block "+Blockchain.chain.length})
})

app.listen(3000,()=>{
    console.log("Server is running")
})
