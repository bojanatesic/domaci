let pCount = document.querySelector('#count');
let btnOrder = document.querySelector('#order');
let btnOrder2 = document.querySelector('#order2');
let btnOrderNow = document.querySelector('#orderNow');
let btnOrderNow2 = document.querySelector('#orderNow2');
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
        alert(`Naručili ste [${count}] pica ` + `[${getNowDateInFormat()}${getNowTimeInFormat()}]`)
    } else {
        alert(`Greška! Morate izabrati picu! ` + `[${getNowDateInFormat()},${getNowTimeInFormat()}]`)
    }
    count = 0;
    pCount.innerHTML = count
})

    btnOrderNow2.addEventListener('click', (e) => { 
        if (count != 0) {
            alert(`Naručili ste [${count}] pica ` + `[${getNowDateInFormat()}${getNowTimeInFormat()}]`)
        } else {
            alert(`Greška! Morate izabrati picu! ` + `[${getNowDateInFormat()},${getNowTimeInFormat()}]`)
        }
        count = 0;
        pCount.innerHTML = count
    })

    function getNowDateInFormat() {
        let datum = new Date();
        return ` ${datum.getDate()}.${datum.getMonth() + 1}.${datum.getFullYear()}.`
    }

    function getNowTimeInFormat() {
        let vreme = new Date();
        return `${vreme.getHours()}:${vreme.getMinutes()}:${vreme.getSeconds()}`
    }




