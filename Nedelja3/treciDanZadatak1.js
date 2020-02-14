function divisibleByFive(arr) {
 for(let i=0;i<arr.length;i++) {
     let element=arr[i]
if (element % 5 == 0) 
console.log(element)
    }
}
divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5])

// function divisibleByFive(arr) {
//      for (let element of arr)
//     if (element % 5 == 0) 
//     console.log(element)
//         }
    
//     divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5])
    
