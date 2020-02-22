//ZADATAK 1

let pokemon1 = {
    ime: 'Bayleef',
    vrsta: 'travnati',
    sposobnosti: ['carobni list', 'slatki miris', 'tresak telom'],
    karakteristike: { napad: 62, odbrana: 80, brzina: 60 },
    slika: 'bayleef.jpg'
}
let pokemon2 = {
    ime: 'Bellsprout',
    vrsta: 'travnati',
    sposobnosti: ['uspavljujuci prah', 'povecavanje', 'kiselina'],
    karakteristike: { napad: 75, odbrana: 35, brzina: 40 },
    slika: 'bellsprout.jpg'
}
let pokemon3 = {
    ime: 'Cleffa',
    vrsta: 'normalni',
    sposobnosti: ['pevanje', 'slatki poljubac', 'carobni list'],
    karakteristike: { napad: 25, odbrana: 28, brzina: 15 },
    slika: 'cleffa.jpg'
}
let pokemon4 = {
    ime: 'Pichu',
    vrsta: 'elektricni',
    sposobnosti: ['gromoviti sok', 'zamah repom', 'opaki zaplet'],
    karakteristike: { napad: 40, odbrana: 15, brzina: 60 },
    slika: 'pichu.jpg'
}

let niz = [pokemon1, pokemon2, pokemon3, pokemon4]

//ZADATAK 2

// function nizSposobnosti(a){
//     let niz2=[]
//     for (let element of a){
//         for (let element2 of element.sposobnosti)
//         niz2.push(element2)
//     }
//     return niz2
// }
// console.log(nizSposobnosti(niz))

//ZADATAK 3

// niz.sort((a,b)=> { 
//     return a.karakteristike.brzina-b.karakteristike.brzina;
// });

// console.log(niz)

//ZADATAK 4

// function pobednikPokemon(niz) {
//     let najjaci = 0;
//     let pobednik = niz[najjaci];
//     for (let element of niz) {
//         if (pobednik.karakteristike.napad < element.karakteristike.napad)
//             pobednik = element
//     }
//     return pobednik
// }
// console.log(pobednikPokemon(niz));


//ZADATAK 5
// let container = document.querySelector('.wrapper')
// let btnSviPokemoni = document.querySelector('#prikaz')
// let btnNajjaciPokemon = document.querySelector('#pobednik')
// let div = document.createElement('div')
// let p = document.createElement('p')

// btnSviPokemoni.addEventListener('click', (e) => {
//     div.innerHTML = ""
//     for (let i = 0; i < niz.length; i++) {
//         let p = document.createElement('p')
//         p.innerHTML = `Ovaj Pokemon se zove: ${niz[i].ime}.  
//         Vrsta: ${niz[i].vrsta}. Njegove sposobnosti su: ${niz[i].sposobnosti}.
//          <img src="${niz[i].slika}">  `
//         container.appendChild(div)
//         div.appendChild(p)
//     }
// })


// btnNajjaciPokemon.addEventListener('click', (e) => {
//     div.innerHTML = ""
//     let najjaci = 0;
//     let pobednik = niz[najjaci];
//     for (let element of niz) {
//         if (pobednik.karakteristike.napad < element.karakteristike.napad)
//             pobednik = element
//     }
//     container.appendChild(div)
//     div.appendChild(p)
//     p.innerHTML = `Pobednik je: ${pobednik.ime}.  
//         Vrsta: ${pobednik.vrsta}. Njegove sposobnosti su: ${pobednik.sposobnosti}.
//          <img src="${pobednik.slika}">  `
// })
