const express = require("express");
const app = express();

const pensador = require("pensador-api")

app.listen(3000,function (){
    console.log("Olá mundo")
    start();
   
})

const start = async function() {
    console.log(`oi`);
    const array = await pensador({ term: "Elon Musk"})
    console.log(`aaaaa `+array);
    return array;
  }
  
  // Call start
  

app.get("/", function(req,resp){
   
    resp.send(start())
})