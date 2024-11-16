let myform = document.getElementById('form')

// const pasval = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{5,15}$/;

myform.addEventListener("submit", (e) => {
    e.preventDefault()

    let myemai = document.getElementById('emai');
    let mypas = document.getElementById('pas');
    
    let myspa1 = document.getElementById('spa1');
    let myspa2 = document.getElementById('spa2');
    let myspa3 = document.getElementById('spa3');
    let myspa4 = document.getElementById('spa4');
    let myspa5 = document.getElementById('spa5');

    

    const emaival = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const ppval = /^(?=.*[a-z])/;
    const popoval = /^(?=.*[A-Z])/;
    const paaval = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/;
    const nopval = /^(?=.*[0-9])/;
    let tey =true;

   

    

    if(!myemai.value.match(emaival)){
        myspa5.style.color = 'red';
        myspa5.innerText = 'Input your email'
        myemai.style.borderBottom = '3px solid red';
        tey= false ;
    }
    else{
        myspa5.innerText= 'Correct Email'
        myspa5.style.color='green';
        myemai.style.borderBottom = '3px solid green';
    }


    if(!mypas.value.match(ppval)){
        myspa1.style.color='red';
        myspa1.innerText='Lowercase is requied';
        mypas.style.borderBottomr='3px solid red';
        tey = false;
    }
    else{
        myspa1.innerText= 'Lowercase Seen';
        myspa1.style.color='green';

    }

    if(!mypas.value.match(popoval)){
        myspa2.style.color='red';
        myspa2.innerText='Uppercase is required';
        mypas.style.borderBottom='3px solid red';
        tey = false;
    }
    else{
        myspa2.innerText= 'Uppercase seen';
        myspa2.style.color='green';

    }

    if(!mypas.value.match(nopval)){
        myspa3.style.color='red';
        myspa3.innerText='Number is reqired';
        mypas.style.borderBottom='3px solid red';
        tey = false;
    }
    else{
        myspa3.innerText= 'Number seen';
        myspa3.style.color='green';

    }

    if(!mypas.value.match(paaval)){
        myspa4.style.color='red';
        myspa4.innerText='Symbol is required';
        mypas.style.borderBottom='3px solid red';
        tey = false;
    }
    else{
        myspa4.innerText= 'symbol seen';
        myspa4.style.color='green';
        mypas.style.borderBottom='3px solid green';

    }






    if (tey){
        myform.submit()
    }
})
