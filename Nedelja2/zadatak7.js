// let n=5;
// let k=5;

// let x='';
//     for (k=1;k<=n;k++){
//         x +=('#'.repeat(k) + '\n').repeat(n-4)
//     }
// console.log(x);

let n=5;
let x='';
for(let i=0;i<n;i++){
    x+='#'.repeat(i+1) + ' '.repeat(n-i-1) + '\n'; 
}
console.log(x)

