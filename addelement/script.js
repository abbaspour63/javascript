// const newpargraph=document.createElement('p')
// newpargraph.textContent='This new a bookssssssss'
// document.querySelector('body').appendChild(newpargraph)



// console.log("g")
// const productItem=[{title:'book1',exist:true},{title:'book2',exist:false},{title:'book3',exist:true},{title:'book4',exist:false}]
// const availabelproducts=productItem.filter(function(item){
//    return item.exist==true

// });
// const message=document.createElement('p');
// message.textContent=`${availabelproducts.length}`
// document.querySelector('body').appendChild(message)

// productItem.forEach(function(item){
//     const p=document.createElement('p')
//     p.textContent=item.title
//      p.textContent=item.exist
//     document.querySelector('body').appendChild(p)
    
// }
// )


// document.querySelector('button').addEventListener('click',function(e){
//     e.target.textContent='Clicked'
// })
// document.querySelector('#addproduct').addEventListener('click',function(e){
//     console.log("add")
// })
// document.querySelector('#removeproduct').addEventListener('click',function(e){
//     document.querySelectorAll('.product').forEach(function(item){
//         item.remove()
//     })
// })
// document.querySelector('#searchproducts').addEventListener('change',function(e){
//     console.log(e.target.value)
// })




const now =new Date()
console.log(`Year ${now.getFullYear()}`)


const timestamp=now.getTime()
const mydate=new Date(timestamp)
console.log(mydate)
console.log(`${mydate.getUTCFullYear()}`)
