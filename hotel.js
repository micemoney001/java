let myfirstname = document.getElementById('firstname');
let mylastname = document.getElementById('lastname');
let myform = document.getElementById('form')
let mydis1 = document.getElementById('dis1')
let my2ndpage = document.getElementById('2ndpage')
let myall1 = document.getElementById('all1')
let myput1 = document.getElementById('put1')
let my3rdpage = document.getElementById('3rdpage')
let mystandd = document.getElementById('standd')
let my4thpage = document.getElementById('4thpage')
let my5thpage = document.getElementById('5thpage');



let myspa1 = document.getElementById('spa1')
let myspa2 = document.getElementById('spa2')

let tey = true;

const nameval = /^(?=.*[A-Za-z])/;

myform.addEventListener("submit", (e) => {
    e.preventDefault()

    let tey = true;
    if (!myfirstname.value.match(nameval)) {
        myspa1.style.color = 'red';
        myspa1.innerText = ' '
        myfirstname.style.borderBottom = '3px solid red';
        tey = false;
    }

    if (!mylastname.value.match(nameval)) {
        myspa2.style.color = 'red'; let myspa1 = document.getElementById('spa1')
        myspa2.innerText = ' '
        mylastname.style.borderBottom = '3px solid red';
        tey = false;
    }

    if (tey) {
        next()
    }


});


function next() {
    myfirstname = (document.getElementById('firstname').value);
    mylastname = (document.getElementById('lastname').value);
    myput1.innerText = `${myfirstname}-${mylastname}`

    myall1.style.visibility = 'hidden';
    myall1.style.position = 'absolute';
    my2ndpage.style.visibility = 'visible';
}

function free() {
    my2ndpage.style.visibility = 'hidden';
    my2ndpage.style.position = 'absolute';

    my3rdpage.style.visibility = 'visible';

}

function ntfree() {
    my2ndpage.style.visibility = 'hidden';
    my2ndpage.style.position = 'absolute';

    my4thpage.style.visibility = 'visible';

}

// let getevennt = document.getElementById('eventdate')

// function countdownfunc() {

//     let eventdate = getevennt.value

//     let today = new Date().getTime()
//     let thatDay = new Date(eventdate).getTime()




//     let diff = thatDay - today;

//     if (diff > 0) {
//         let theDays = Math.floor(diff / (24 * 60 * 60 * 1000))
//         let theHrs = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
//         let theMins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
//         let theSec = Math.floor((diff % (60 * 1000)) / 1000)

//         // console.log(`${theDays}Days: ${theHrs}Hrs: ${theMins}Mins: ${theSec}Secs`)
//     }

//     else {
//         // console.log('invalid date')
//     }

// }

// setInterval(() => {
//     countdownfunc()
// }, 1000)

let fhfk, theDays;
function standdd() {
  

    let eventdate = getevennt.value

    let today = new Date().getTime()
    let thatDay = new Date(eventdate).getTime()




    let diff = thatDay - today;

    if (diff > 0) {
        let theDays = Math.floor(diff / (24 * 60 * 60 * 1000))
        let theHrs = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        let theMins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
        let theSec = Math.floor((diff % (60 * 1000)) / 1000)

        // console.log(`${theDays}Days: ${theHrs}Hrs: ${theMins}Mins: ${theSec}Secs`)
    }

    else {
        // console.log('invalid date')
    }


    fhfk = 5000;
    theDays = Math.floor(diff / (24 * 60 * 60 * 1000));


    console.log()
    mystandd.innerHTML = ` Your [standard] room at <br> [#5,000] Per nigth.Your <br> bill at the expiration of <br> [${theDays}Days] will be [${fhfk * theDays}]`
}

setInterval(() => {
    standdd()
}, 1000)

function stand(){
    standdd()
    my4thpage.style.visibility = 'hidden';
    my4thpage.style.position='absolute';
    my5thpage.style.visibility = 'visible';

    
}

let emme;
function standdd() {
  

    let eventdate = getevennt.value

    let today = new Date().getTime()
    let thatDay = new Date(eventdate).getTime()




    let diff = thatDay - today;

    if (diff > 0) {
        let theDays = Math.floor(diff / (24 * 60 * 60 * 1000))
        let theHrs = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        let theMins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
        let theSec = Math.floor((diff % (60 * 1000)) / 1000)

        // console.log(`${theDays}Days: ${theHrs}Hrs: ${theMins}Mins: ${theSec}Secs`)
    }

    else {
        // console.log('invalid date')
    }


    emme = 15000;
    theDays = Math.floor(diff / (24 * 60 * 60 * 1000));


    console.log()
    mystandd.innerHTML = ` Your [standard] room at <br> [#15,000] Per nigth.Your <br> bill at the expiration of <br> [${theDays}Days] will be [${emme * theDays}]`
}

function eme(){
    standdd()
    my4thpage.style.visibility = 'hidden';
    my4thpage.style.position='absolute';
    my5thpage.style.visibility = 'visible';
}


let supp;
function standdd() {
  

    let eventdate = getevennt.value

    let today = new Date().getTime()
    let thatDay = new Date(eventdate).getTime()




    let diff = thatDay - today;

    if (diff > 0) {
        let theDays = Math.floor(diff / (24 * 60 * 60 * 1000))
        let theHrs = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        let theMins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
        let theSec = Math.floor((diff % (60 * 1000)) / 1000)

        // console.log(`${theDays}Days: ${theHrs}Hrs: ${theMins}Mins: ${theSec}Secs`)
    }

    else {
        // console.log('invalid date')
    }


    supp = 25000;
    theDays = Math.floor(diff / (24 * 60 * 60 * 1000));


    console.log()
    mystandd.innerHTML = ` Your [standard] room at <br> [#15,000] Per nigth.Your <br> bill at the expiration of <br> [${theDays}Days] will be [${supp * theDays}]`
}

function sup(){
    standdd()
    my4thpage.style.visibility = 'hidden';
    my4thpage.style.position='absolute';
    my5thpage.style.visibility = 'visible';
}


let press;
function standdd() {
  

    let eventdate = getevennt.value

    let today = new Date().getTime()
    let thatDay = new Date(eventdate).getTime()




    let diff = thatDay - today;

    if (diff > 0) {
        let theDays = Math.floor(diff / (24 * 60 * 60 * 1000))
        let theHrs = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        let theMins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
        let theSec = Math.floor((diff % (60 * 1000)) / 1000)

        // console.log(`${theDays}Days: ${theHrs}Hrs: ${theMins}Mins: ${theSec}Secs`)
    }

    else {
        // console.log('invalid date')
    }


    press = 40000;
    theDays = Math.floor(diff / (24 * 60 * 60 * 1000));


    console.log()
    mystandd.innerHTML = ` Your [standard] room at <br> [#15,000] Per nigth.Your <br> bill at the expiration of <br> [${theDays}Days] will be [${press * theDays}]`
}

function pre(){
    standdd()
    my4thpage.style.visibility = 'hidden';
    my4thpage.style.position='absolute';
    my5thpage.style.visibility = 'visible';
}






// LAST PAGE
let getevennt = document.getElementById('eventdate')
let mydday =document.getElementById('dday')
let mydhrs = document.getElementById('dhrs')
let mydmins = document.getElementById('dmins');
let mydsec= document.getElementById('dsec')
let mylastpage = document.getElementById('lastpage')

function countdownfunc() {

    let eventdate = getevennt.value

    let today = new Date().getTime()
    let thatDay = new Date(eventdate).getTime()




    let diff = thatDay - today;

    if (diff > 0) {
        let theDays = Math.floor(diff / (24 * 60 * 60 * 1000))
        let theHrs = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
        let theMins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
        let theSec = Math.floor((diff % (60 * 1000)) / 1000)

        // console.log(`${theDays}Days: ${theHrs}Hrs: ${theMins}Mins: ${theSec}Secs`)


        mydday.innerText= `${theDays}Days`;
        mydhrs.innerText= `${theHrs}Hrs`;
        mydmins.innerText= `${theMins}Mins`;
        mydsec.innerText= `${theSec}Sec`;
    }

    else{
        console.log('invalid date')
    }

}

function last(){
    my5thpage.style.visibility='hidden';
    my5thpage.style.position='absolute'
    mylastpage.style.visibility='visible'
}

// startcount.addEventListener("click" , ()=>{

// })

setInterval(() => {
    countdownfunc()
}, 1000)

