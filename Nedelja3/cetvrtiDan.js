let pCount = document.querySelector('#count');
let btnOrder = document.querySelector('#order');
let btnOrder2 = document.querySelector('#order2');
let btnOrderNow = document.querySelector('#orderNow');
let btnOrderNow2 = document.querySelector('#orderNow2');
let pMessage = document.querySelector('#message');

let count = 0;
btnOrder.addEventListener('click', (e) => {
    count++;
    pCount.innerHTML = count
})

btnOrder2.addEventListener('click', (e) => {
    count++;
    pCount.innerHTML = count
})

btnOrderNow.addEventListener('click', (e) => {
    if (count != 0) {
        console.log(poruka())
    } else {
        console.log(greska())
    }
    count = 0;
    pCount.innerHTML = count
})

btnOrderNow2.addEventListener('click', (e) => {
    if (count != 0) {
        console.log(poruka())
    } else {
        console.log(greska())
    }
    count = 0;
    pCount.innerHTML = count
})

function poruka() {
    document.getElementById("message").innerHTML = `Naručili ste [${count}] pica ` + `[${getNowDateInFormat()} ${getNowTimeInFormat()}]`
}

function greska() {
    document.getElementById("message").innerHTML = `Greška! Morate izabrati picu! ` + `[${getNowDateInFormat()} ${getNowTimeInFormat()}]`
}


function getNowDateInFormat() {
    let datum = new Date();
    return ` ${datum.getDate()}.${datum.getMonth() + 1}.${datum.getFullYear()}.`
}

function getNowTimeInFormat() {
    let vreme = new Date();
    return `${vreme.getHours()}:${vreme.getMinutes()}:${vreme.getSeconds()}`
}


