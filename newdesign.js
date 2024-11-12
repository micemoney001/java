// SIMPLE CALCULATOR NEW

function miceresult(value) {
    document.getElementById('result').value += value;
}


function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    resultfield = document.getElementById('result');

    try {
        resultfield.value = eval(resultfield.value);
    }

    catch (error) {
        resultfield.value = 'Error';
        resultfield.style.color = 'red';
    }

}


// 2nd calculator
let a, b, c;
function input() {
    a = document.getElementById('ipt1').value;
    b = document.getElementById('ipt2').value;
}
function ass() {
    input();
    c = a * b;
    document.getElementById('mysymbol').innerHTML = "*";
    document.getElementById('answer').innerHTML = '=' + '' + c;
}
function as() {
    a = +document.getElementById('ipt1').value;
    b = +document.getElementById('ipt2').value;
    c = a + b;
    document.getElementById('mysymbol').innerHTML = "+";
    document.getElementById('answer').innerHTML = '=' + '' + c;
}

function subtract() {
    input();
    c = a - b;
    document.getElementById('mysymbol').innerHTML = "-";
    document.getElementById('answer').innerHTML = '=' + '' + c;
}
function DIVISION() {
    input();
    c = a / b;
    document.getElementById('mysymbol').innerHTML = "/";
    document.getElementById('answer').innerHTML = '=' + '' + c;
}

let lo, loa, sss, rate, intrest, amount, frfr, ikik, fofo, popo;





function loan() {
    lo = +(document.querySelector('#lo').value);
    loa = +(document.querySelector('#loa').value);
    // sss = document.querySelector('#sss');
    frfr = document.querySelector('#frfr');
    // ikik = document.querySelector('#ikik');
    fofo = document.querySelector('#fofo');
    popo = document.querySelector('#popo')
    rate = 0.15;
    intrest = lo * loa * rate;
    console.log(intrest);
    amount = intrest + lo;
    console.log(amount);



    popo.innerHTML = `Since you invested 
 &#8358;${lo} <br>
            at the rate of 15%,  you will receive a <br>
            interest of  &#8358;${intrest}. <br> Threfore  you will receive a <br> total amount of 
                &#8358;${amount} `




    frfr.innerHTML = `&#8358;${lo}`;
    fofo.innerHTML = `&#8358;${intrest}`;
    popo.innerHTML = `&#8358;${amount}`
}