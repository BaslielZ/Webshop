productsList = []

fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(resObj => console.log(resObj))
.then(products => products.forEach(product => {
    productsList.push(product)
}))

console.log(productsList)
