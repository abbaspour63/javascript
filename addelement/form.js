document.querySelector('#productform').addEventListener('submit',function(e){
    e.preventDefault()
    e.target.elements
    console.log(e.target.elements.productTitle.value)
    e.target.elements.productTitle.value=''
})


const products=[]
const filters={
    searchitem:''
}
const renderproducts=
renderproducts(products,filters)