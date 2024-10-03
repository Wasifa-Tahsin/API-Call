// console.log(1)
// console.log(2)
// setTimeout(()=>{console.log('lazy logged')},4000)
// console.log(4)
// function doSomething(){
//     console.log(3)
// }


const myLoader=()=>{
    return new Promise((resolve,reject)=>{
        const success=Math.random();
        if(success<=0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}
myLoader()
.then(data=>console.log('resolved', data))
.catch(err=>console.log('rejected',err))


fetch('')
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))

// function declare er somoy avabe
 async function loadData(){
    const res=await fetch('')
    const data=await res.json()
    console.log(data)
}

// arrow function declare er somoy avabe
const taskLoader=async()=>{
    const res=await fetch('')
}
loadData()