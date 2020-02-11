function najveciBroj(broj1, broj2, broj3) {
    if (broj1 > broj2 && broj1 > broj3)
        return broj1;
    else if (broj2 > broj1 && broj2 > broj3)
        return broj2;
    else if (broj3 > broj1 && broj3 > broj2)
        return broj3;
}
let maksimum = najveciBroj(4, 8, 5)
console.log(maksimum)

// function najveciBroj(broj1, broj2, broj3) {
//     return Math.max(broj1,broj2,broj3);
// }
// let maksimum = najveciBroj(4, 8, 5)
// console.log(maksimum)

