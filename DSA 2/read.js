

const { error } = require('console');
const fs = require('fs');

fs.readFile('text.txt'(err,data)=>{
           if(err){
            console.log("err");
           }else{
            console.log("data")
           }
           

})
