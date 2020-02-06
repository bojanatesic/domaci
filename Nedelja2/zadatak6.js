// let ispis=["FizzBuzz", "Fizz", "Buzz"]
// let i =0;
// let brojac =0;
// for (i=1; brojac<100; i++){
//     if (i%3==0 && i%5==0){
//     console.log (ispis[0])
// } else if (i%3==0){
//     console.log  (ispis [1])
// } else if (i%5==0){
//     console.log  (ispis [2])
// } else if (i%3!=0 && i%5!=0){
//     console.log  (i)}
//     brojac++
// }

let i =0;
let brojac =0;
for (i=1; brojac<100; i++){
    if (i%3==0 && i%5==0){
    console.log ('FizzBuzz')
} else if (i%3==0){
    console.log  ('Fizz')
} else if (i%5==0){
    console.log  ('Buzz')
} else if (i%3!=0 && i%5!=0){
    console.log  (i)}
    brojac++
}
