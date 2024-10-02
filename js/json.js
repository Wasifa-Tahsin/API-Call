const user={id:1, name:'Afia', job:'web Developer'}
// javaScript Object Notation (JSON)
const stringified =JSON.stringify(user)
// console.log(user)
// console.log(stringified)

// { id: 1, name: 'Afia', job: 'web Developer' }
// {"id":1,"name":"Afia","job":"web Developer"}

const shop={
    owner:'Afia',
    address:{
        street:'Benrsee',
        city:'Dhaka',
        country:'Bangladesh'
    },
    products:['laptop','mic','Monitor','keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:'false'
}

console.log(shop)
const shopJSON=JSON.stringify(shop)
console.log(shopJSON)
const shopObj=JSON.parse(shopJSON)
console.log(shopObj)