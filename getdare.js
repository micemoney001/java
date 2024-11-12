let myDate = new Date();
console.log("Current-Year", myDate.getFullYear());
console.log("Current-Date", myDate.getDate());
console.log("Current-Day", myDate.getDay() + 1);
console.log("Current-hours", myDate.getHours() + 1);
console.log("Current-mins", myDate.getMinutes());
console.log("Current-Month", myDate.getMonth() + 1);
console.log("Current-Time", myDate.getTime());
console.log("Current-Seconds", myDate.getSeconds());





function megreet() {

    let ask = prompt('What your name');
    let mygreet = document.getElementById('greet');



    let day = new Date().getDay();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday']




    if (ask != "") {
        // if(!ask.value){       
        //         mygreet.innerText = ''
        // }
        if (myDate.getHours() < 12) {
            mygreet.innerText = `Good Morning ${ask.toUpperCase()}  ,Today is   ${days[day]} `
        }

        else if (myDate.getHours() > 12) {
            mygreet.innerText = `Good Afternoon ${ask.toUpperCase()}, Today is  ${days[day]}`
        }
        else if (myDate.getHours() > 16) {
            mygreet.innerText = `Good Eveninig ${ask.toUpperCase()} , Today is  ${days[day]}`
        }
    }

    else {
        mygreet.innerText = ""
    }

}