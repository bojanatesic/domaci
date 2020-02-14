function lifeSupply(numPerMonth,age){
    let lifespan=100;
    return (lifespan-age)*12*numPerMonth
}
console.log(lifeSupply(5,30))