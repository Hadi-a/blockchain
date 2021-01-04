var blockchain=require('./blockchain.js')

var bitcoin=new blockchain()
bitcoin.CreateNewBlock()
bitcoin.CreateNewTx(13,'hadia','rafay')
bitcoin.CreateNewTx(136,'hadia','shafay')

bitcoin.CreateNewBlock()
//console.log(bitcoin.GetLastTx(0))
//console.log(bitcoin.GetLastTx(1))
bitcoin.CreateNewTx(314346,'hina','sultan')
bitcoin.CreateNewBlock()

//bitcoin.CreateNewBlock()

//console.log(bitcoin.BlockHashing('fdfd','gdgdfgdfg0','dgd'))

module.exports=bitcoin