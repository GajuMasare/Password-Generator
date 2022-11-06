let outputEL = document.getElementById("output");
let lenEl = document.getElementById("len");
let upperEL = document.getElementById("upper");
let lowerEL = document.getElementById("lower");
let numberEL = document.getElementById("number");
let charetorsEL = document.getElementById("charetors");



const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-";

function getUpperCase(){
    return upper[Math.floor(Math.random()*upper.length)];
}

function getLowerCase(){
    return lower[Math.floor(Math.random()*lower.length)];
}

function getNumber(){
    return number[Math.floor(Math.random()*number.length)];
}

function getSymbol(){
    return symbol[Math.floor(Math.random()*symbol.length)];
}

function createPassword(){
    if(lenEl.value>=25){
        lenEl.value = 25;
    }
    if(lenEl.value<=5){
        lenEl.value = 5;
    }

    const len =lenEl.value;

    let password = "";
    for(let i=0; i<len; i++){
        const x = createX();
        password += x;
    }
    outputEL.innerText = password;
    console.log(password)
}

function createX(){
    const XS = [];
    if(upperEL.checked){
        XS.push(getUpperCase())
    }
    if(lowerEL.checked){
        XS.push(getLowerCase())
    }
    if(numberEL.checked){
        XS.push(getNumber())
    }
    if( charetorsEL.checked){
        XS.push(getSymbol())
    }
    return XS[Math.floor(Math.random() * XS.length)];
}
