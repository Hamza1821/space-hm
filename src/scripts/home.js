var textTag=document.getElementById("space")
    var textE=textTag.innerText;
    let idx=0;
    var speed =500;
    var size=textE.length;
    console.log(size)

async function write(){
    
    textTag.innerText=textE.slice(0,idx);
    idx++
    
    setTimeout(write,speed);
}
write();

