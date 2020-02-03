var cena = 100;
var novac = 200;
if (novac<cena){
    console.log ("Nemate dovoljno novca");
    console.log (`Trenutno stanje je ${novac}`);
}
else console.log("Uspešno ste kupili proizvod");
console.log (`Trenutno stanje je ${novac-cena}`);