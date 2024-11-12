let myTimeInSec = 7200

let mynono= document.getElementById('nono')
let countdownDisplay = document.getElementById('countdown')
let stopdisplay=document.getElementById('stop');
let mycon=document.getElementById('continuee');

function countdown() {
    myTimeInSec -= 1;
    hrs = Math.floor(myTimeInSec / (60 * 60));
    mins = Math.floor((myTimeInSec % (60 * 60)) / 60);
    sec = Math.floor(myTimeInSec % 60);



    let myho=document.getElementById('ho')
    let mymo=document.getElementById('mo')
    let myso=document.getElementById('so')


    hrs<10 ? hrs = `0${hrs}` : hrs;
    mins<10 ? mins = `0${mins}` : mins;
    sec <10 ? sec =`0${sec}` : sec;

    
    myho.innerText= hrs;
    mymo.innerText=mins;
    myso.innerText=sec;
    

}



function ongod() {
    nono.style.display ='none';
    stopdisplay.style.visibility = "visible"

    let countdownDisplay = setInterval(() => {
        countdown()
    }, 1000);
    
    stopdisplay.addEventListener("click" , ()=>{
        clearInterval(countdownDisplay)
        stopdisplay.style.visibility = "hidden"
         mycon.style.visibility="visible"
    })

     mycon.style.visibility="hidden"
    

       

}
