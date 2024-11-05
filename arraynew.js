
// let p, ans, r, btn;
// btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     p = document.querySelector('#p').value;
//     ans = document.querySelector('#ans');

//     for (r = 0; r < 2; r++) {
//         if (p % 2 == 1) {
//             ans.innerHTML = 'You Are Correrct';
//         }
//         else if (p % 2 == 0) {
//             ans.innerHTML = 'Invalid Number';
//             ans.style.backgroundColor = 'red';
//             ans.style.color = 'white';
//         }
//     }
// })



// AGE OF RETIREMENT
let retirement = (bithyear) => {
    let n = new Date().getFullYear() - bithyear;
    return 60 - n;
}

let m = prompt('INPUT YOUR BIRTH YEAR')
alert(`you have ${retirement(m)} years before you will retire from the government work `)








let day = new Date().getDay();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday']

alert(`TODAY IS ${days[day]} `)







function birt() {
    let resturant = {
        name: 'OMIDIRE OLUWAMAYOWA',
        location: 'APETE',
        menu: {
            completion: ['Eba', 'fufu', 'black'],
            height: ['egusi', 'tall', 'okha'],
            drinks: ['coke', 'fearless', 'origin'],
            chinishdish: ['rice', 'porage', 'boli'],
            meat: ['beef', 'chicken', 'turkey'],
        },
        // price: '3000 naira per plate',
        // day: ['monday', 'tuesday', 'wednesday']
    }

    alert(`MY NAME IS ${resturant.name} I LIVE  At ${resturant.location}
        and i am ${resturant.menu.completion[2]}, in nature,and i am a ${resturant.menu.height[1]} guy, i love 
        ${resturant.menu.drinks[1]} drinks and ${resturant.menu.meat[2]} and also i love money alot.`)

}