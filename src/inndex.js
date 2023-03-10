let txt= "Uzbek";
let txt2="";
let i=0;
function timmer()
{
     txt2+=txt[i];
     i++;

     if(i>=txt.length){
        i=0;
        txt2="";
     }
     document.getElementById("txtid").innerHTML=txt2;
}
setInterval(timmer,400);