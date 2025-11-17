//----------------search in elements----------------------
const products=[{title:'nodejs design'},{title:'sdgdfghdfh'},{title:'sdgdfgfdgdfsldflsd'},{title:'sdfsdfsdf'}]
const filters={
    searchItem:''

}   
const renderproducts=function(products,filters){
    const filterdproduct=products.filter(function(item){
        return item.title.toLowerCase().includes(filters.searchItem.toLowerCase())
    })
    // console.log(filterdproduct)
    document.querySelector('#searchproducts').innerHTML=''
     filterdproduct.forEach(function(item){
        const productEl=document.createElement('p')
        productEl.textContent=item.title
        document.querySelector('#searchproducts').appendChild(productEl)
    })
} 

renderproducts(products,filters)
document.querySelector('#searchproduct').addEventListener('input',function(e){
    filters.searchItem=e.target.value
    renderproducts(products,filters)
})
