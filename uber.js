let myfrm = document.getElementById('frm')
let myfrom;
let myto;
let myrequesting = document.getElementById('requesting');
let myshow1 = document.getElementById('show1')
let myre = document.getElementById('re')
let myree = document.getElementById('ree')
let mypage = document.getElementById('page')
let mysta =document.getElementById('sta')




function ride() {
    myfrom = (document.getElementById('from').value)
    myto = (document.getElementById('to').value)
    myrequesting.innerHTML = ` Your are requesting a <br> ride from ${myfrom.toUpperCase()} to <br> ${myto.toUpperCase()} <br> please confirm your ride.`;
    myre.style.visibility = 'visible';
    myree.style.visibility = 'visible';
    mypage.style.visibility ='visible';

    frm.style.display = 'none';
    frm.style.position = 'absolute';
    show1.style.visibility = "visible"

    
    
    
    
}


let myTimeInSec =0;

let mynono= document.getElementById('nono')
let countdownDisplay = document.getElementById('countdown')
let stopdisplay=document.getElementById('stop');
let mycon=document.getElementById('continuee');

function countdown() {
    myTimeInSec += 1;
    hrs = Math.floor(myTimeInSec / (60 * 60));
    mins = Math.floor((myTimeInSec % (60 * 60)) / 60);
    sec = Math.floor(myTimeInSec % 60);
    
    
    
    let myho=document.getElementById('ho')
    let mymo=document.getElementById('mo')
    let myso=document.getElementById('so')
    let mykk = document.getElementById('kk');
    let myoo = document.getElementById('oo')
    let myall= document.getElementById('all')


    hrs<10 ? hrs = `0${hrs}` : hrs;
    mins<10 ? mins = `0${mins}` : mins;
    sec <10 ? sec =`0${sec}` : sec;
    
    
    mykk.innerHTML=`Ride in progress....<br> ${hrs} ${mins} ${sec} `
    myoo.innerHTML =` You are now moving <br> from ${myfrom} to ${myto}  `


    myho.innerText= hrs;
    mymo.innerText=mins;
    myso.innerText=sec;
    
    
}

function ongodd() {
    nono.style.visibilityy ='none';
    nono.style.position='absolute';
    // stopdisplay.style.visibility = "visible"
    all.style.visibility='visible'
    

    mypage.style.visibility= 'hidden';
    mypage.style.position ='absolute';
    myre.style.visibility ='hidden' ;
    myree.style.visibility ='hidden' ;
    sta.style.visibility= 'visible';

    
    let countdownDisplay = setInterval(() => {
        countdown()
    }, 1000);
    
    stopdisplay.addEventListener("click" , ()=>{
        clearInterval(countdownDisplay)
        //  mycon.style.visibility="visible"
    })

    

       

}

let mypaused=document.getElementById('paused')
let mypi =document.getElementById('pi')
let mypii = document.getElementById('pii')

function pp(){

    sta.style.visibility='hidden'

    all.style.visibility='hidden'
    mypi.style.visibility= 'visible'
    mypii.style.visibility = 'visible'
    
}

mypaused.style.visibility='visible '

function ongod(){
    let countdownDisplay = setInterval(() => {
        countdown()
    }, 1000);

    mypi.style.visibility= 'hidden'
    mypii.style.visibility = 'hidden'
    
    

    nono.style.visibilityy ='none';
    nono.style.position='absolute';
    // stopdisplay.style.visibility = "visible"
    all.style.visibility='visible'
    

    mypage.style.visibility= 'hidden';
    mypage.style.position ='absolute';
    myre.style.visibility ='hidden' ;
    myree.style.visibility ='hidden' ;
    sta.style.visibility= 'visible';

}