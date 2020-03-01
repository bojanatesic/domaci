let select = document.querySelector('#izbor')
let opisTransakcije = document.querySelector('#opis-trans')
let iznosTransakcije = document.querySelector('#iznos-trans')
let dugme = document.querySelector('#btn-dodaj')
let prihodi = document.querySelector('#prihodi')
let rashodi = document.querySelector('#rashodi')
let ukupniPrihodi = document.querySelector('#ukupniPrihodi')
let ukupniRashodi = document.querySelector('#ukupniRashodi')
let dostupanBudzet = document.querySelector('#dostupanBudzet')
let prviDiv = document.querySelector('#prviDiv')

let prihod = 0
let rashod = 0
let raspolozivo = 0
let procenat = 0
let ukupanProcenat = 0

dugme.addEventListener('click', dodajTransakciju);


function dodajTransakciju(e) {
    e.preventDefault();
    if (opisTransakcije.value.trim() == '') {
        alert('Greska');
        opisTransakcije.value = ''
        return
    }    
    if (opisTransakcije.value.trim() == ''||iznosTransakcije.value <= 0) {
        alert('Morate uneti pozitivan broj');
        iznosTransakcije.value = ''
        return
    }    
        opis = opisTransakcije.value
        iznos = parseInt(iznosTransakcije.value)
        izbor = select.value
    if (izbor == 'prihodi') {
        prihod += iznos
        let ispisUkupniPrihodi = document.createElement('p')
        ispisUkupniPrihodi.innerHTML = `+${prihod}`
        ukupniPrihodi.appendChild(ispisUkupniPrihodi)
        raspolozivo += iznos
        let ispisRaspolozivo = document.createElement('p')
        ispisRaspolozivo.innerHTML = `${raspolozivo}`
        dostupanBudzet.appendChild(ispisRaspolozivo)
        let ispisPrihodi = document.createElement('p')
        ispisPrihodi.innerHTML = `${opis} +${iznos}`
        prihodi.appendChild(ispisPrihodi)
        let dugmePrihodi = document.createElement('button')
        dugmePrihodi.innerText = 'Obrisi'
        ispisPrihodi.appendChild(dugmePrihodi)
        dugmePrihodi.addEventListener('click', () => {
            raspolozivo -= iznos
            prihod -= iznos
            ukupanProcenat =Math.round( rashod / prihod * 100 )
            prviDiv.innerHTML = osveziPrviDiv(raspolozivo, prihod, rashod, ukupanProcenat)
            ispisPrihodi.remove()
        })
        ukupanProcenat = 0
        procenat = 0
        prviDiv.innerHTML = osveziPrviDiv(raspolozivo, prihod, rashod, ukupanProcenat)
        opisTransakcije.value = ''
        iznosTransakcije.value = ''
    } else if (izbor == 'rashodi') {
        rashod += iznos
        ukupanProcenat = Math.round(rashod / prihod * 100)
        let ispisUkupniRashodi = document.createElement('p')
        ispisUkupniRashodi.innerHTML = `-${rashod} ${ukupanProcenat} % `
        ukupniRashodi.appendChild(ispisUkupniRashodi)
        let ispisRashodi = document.createElement('p')
        procenat = Math.round(iznos / prihod * 100)
        ispisRashodi.innerHTML = `${opis} -${iznos} ${procenat}%`
        rashodi.appendChild(ispisRashodi)
        raspolozivo -= iznos
        let dugmeRashodi = document.createElement('button')
        dugmeRashodi.innerText = 'Obrisi'
        ispisRashodi.appendChild(dugmeRashodi)
        dugmeRashodi.addEventListener('click', () => {
            rashod -= iznos
            raspolozivo += iznos
            ukupanProcenat = Math.round(rashod / prihod * 100)
            prviDiv.innerHTML = osveziPrviDiv(raspolozivo, prihod, rashod, ukupanProcenat)
            ispisRashodi.remove()
        })
        prviDiv.innerHTML = osveziPrviDiv(raspolozivo, prihod, rashod, ukupanProcenat)
        ukupanProcenat = 0
        procenat = 0
        opisTransakcije.value = ''
        iznosTransakcije.value = ''
    }
}

const osveziPrviDiv = (raspolozivo, prihod, rashod, ukupanProcenat) => {
    return `
    <div id=prviDiv>
    <div id="dostupanBudzet" >
        <h1>Ukupan budzet</h1>
       <p> ${raspolozivo}</p>
    </div>
<div id=ukupniPrihodi>
<h3>Ukupni prihodi</h3>
<p>+${prihod}</p>
</div>
<div id="ukupniRashodi">
    <h3>Ukupni rashodi</h3>
    <p>-${rashod} ${ukupanProcenat}%</p>
</div>
</div>`
}
