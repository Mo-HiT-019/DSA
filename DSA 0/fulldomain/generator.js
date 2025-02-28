function* number(){
    for(let i=5; i>0; i-- ){
        yield i;
    }
}
const n=number()

const int=setInterval(()=>{
    const{value,done}=n.next()
    if(done||value<1){
        clearInterval(int)
    }else{
        console.log(value)
    }
    
},1000)