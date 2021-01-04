var sha256=require('sha256')
function Blockchain (){
    this.chain=[]
    this.mempool=[]
}

Blockchain.prototype.CreateNewBlock=function(){

    if (this.chain.length==0){
        previousHash=null
    }
    else {
    previousHash=this.chain[this.chain.length-1].hash
    }
    var nonce= this.ProofOfWork(previousHash,this.mempool)
    var hash= this.BlockHashing(previousHash,nonce,this.mempool)
    var reward=this.CreateNewTx(6.25,'Bitcoin','domuhpc')
    var block={
        'height':this.chain.length,
        'previousHash': previousHash,
        'timestamp':Date.now(),
        'transaction':this.mempool,
        'hash':hash,
        'nonce':nonce
    }
this.chain.push(block)
this.mempool=[]
}

Blockchain.prototype.CreateNewTx=function(amount,sender,receiver)
{
    var tx={
        'timestamp':Date.now(),
        'sender':sender,
        'receiver':receiver,
        'amount':amount

    }
    this.mempool.push(tx)
    var newBlock=this.chain.length
}

Blockchain.prototype.BlockHashing=function(previousHash,nonce,blockData){
    blockstring=previousHash+JSON.stringify(blockData)+nonce
    return sha256(blockstring)
}
 Blockchain.prototype.ProofOfWork=function(previousHash,blockData){
    nonce=0
    hash=this.BlockHashing(previousHash,nonce,blockData)
    while(hash.substring(0,4)!='0000'){
        nonce++
        hash=this.BlockHashing(previousHash,nonce,blockData)
    }

    return nonce

 }

 Blockchain.prototype.GetLastBlock=function(){
     index=this.chain.length
     return this.chain[index-1]
 }

 Blockchain.prototype.GetLastTx=function(height){
     var block=this.chain[height]
     if(block){
         return block.transaction
     }
     else
    {
        return "block not found"
    }
 }

module.exports=Blockchain;