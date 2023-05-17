// const prompt=require("prompt-sync")({signin:true});
// let n = prompt ("Enter number");
// for (let i = 1;i<=n;i++){
//     console.log(i);
// }

// console.log(+"100")
// console.log(+true)
// console.log(+"hello")

// const score = 80;
// const scoreRating = score > 50 ? "Good" : "Poor";
// console.log(scoreRating);

//print fizzbuzz
// for (let i=1;i<=100;i++){
//     let f = i % 3 ==0,
//     b=i % 5 ==0;
//     console.log(f ? (b ? 'fizzbuzz' : 'fizz') : b ? 'buzz' : i);
// }

//strings
// let name = " Garima ";
// for (let i=0;i<name.length;i++){
//     console.log(name[i]);
// }

function product(a,b){
    return a*b;
}
var result = product.call(this, 20,5);
console.log(result);