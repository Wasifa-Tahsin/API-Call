console.log(1)
console.log(2)
// setTimeout(() => {
//     console.log(3)
// }, Timeout);
// setTimeout(() => {
//     console.log(3)
// }, 4000);
let num=0
 const clockId=setInterval(() => {
    // num++
    // num=num+1
    num+=1
    console.log(clockId,num)
    if(num>6){
        clearInterval(clockId)
    }
},4000);
console.log(4)