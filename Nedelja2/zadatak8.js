let n=5;
let x='';

for (let i=0;i<n;i++){
        x += ' '.repeat(n-i-1) + '#'.repeat(i+1) + '\n';
}
console.log(x)
