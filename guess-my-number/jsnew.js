// let  userinfone={
//     userid:22,
//     username:'masoodsadri',
//     role:'Admin'
// }
// let userinfoTwo={
//      userid:20,
//     username:'a',
//     role:'user'
// }
// console.log(`username:${userinfone.role}`)

// let fetchuserData=function(user){
//     console.log(`username:${userinfone.role}`)
// }
// fetchuserData(userinfone)
//-----------------------------------------------------------------
// let userAccount={
//     fullname:'masoodsadri',
//     outgo:0,
//     income:0
// }
// let  addoutgo=function(account,amount){
//     account.outgo=account.outgo+amount
// }

// let addincome=function(account,income){
//     account.income=account.income+income
// }
// let getAccountData=function(account){
//     let balance=account.income-account.outgo
//     return `Account Name : ${account.fullname} -balance ${balance}`
// }
// addincome(userAccount,200)
// addoutgo(userAccount,50)
// console.log(getAccountData(userAccount))

//method object

// let course={
//     name:'advanced ',
//     studentlimit:30,
//     studentcount:0,
//     checkavilability:function(coursesize){
//        let leftcount=this.studentlimit-this.studentcount
//        return coursesize<=leftcount
//     }
// }
// let sataus=course.checkavilability(200)
// console.log(sataus)
// console.log(course)

//------------------------------------------------------------------------
// let isvalidpassword=function(password){
//     if (password.length>8 && !password.includes('12345')){
//         return true
//      } else {
//         return false
//      }

// }
// console.log(isvalidpassword('abc'))


// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(3));
// // Expected output: 0, 1 or 2

// console.log(getRandomInt(1));
// // Expected output: 0

// console.log(Math.random());

// const cartitems=['book1','book2','book3']
// for(let c=0;c<cartitems.length;c++){
//     console.log(cartitems[c])
// }

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); 
// //-------------------------------------------------------------
// const cartitem=[{title:'book1',price:123},{title:'book2',price:123},{title:'book3',price:123},{title:'book4',price:123}]

//  const indexvalue=cartitem.findIndex(function(item,index){
//   return item.title==='book4'
// })
// console.log(cartitem)

// const findproduct=function(cart,producttitle){
//    const indexvalue= cart.findIndex(function(item,index){
//         return item.title.toLowerCase()===producttitle.toLowerCase()
//     })
//     return cart[indexvalue]
// }
// const result=findproduct(cartitem,'Book3')
// console.log(result)



// const numbers=[50,2,5,89,90,231]
// const filterednumber=numbers.filter(function(item){
//     return item>200
// })
// console.log(filterednumber)



// const productNotExist=function(products){
//     return products.filter(function(item){
//     //    return item.exist===false
//        return !item.exist
//     })
// }
// let result=productNotExist(productItems)
// console.log(result)

const productItems=[{title:'book1',exist:true},{title:'book10',exist:true},{title:'book100',exist:true},{title:'book2',exist:false},{title:'book3',exist:false}]

const sortproducts=function(products){
    products.sort(function(a,b){
        if (a.exist===true && b.exist===false){
            return -1
        }else if(b.exist===true && a.exist===false){
            return 1
    }else {
        return 0
    }
})

}
sortproducts(productItems)
console.log(productItems)
console.log(productItems)

