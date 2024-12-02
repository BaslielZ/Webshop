products = []


async function getData(){
    data = await fetch('https://fakestoreapi.com/products')
    myData = await data.json()
    for (i = 0; i<myData.length; i++){
        console.log('hey')
        products.push(myData[i])
    }
    console.log(myData.length)
    console.log(products.length)
    
    function displayProducts(){
        for (i = 0; i < products.length; i++){
            product = document.createElement('div')
            product.classList.add('product-card')
            product.innerHTML = `
            <img class="product-card-image" src="${products[i].image}" alt="">
            <h3 class= "product-card-title">${products[i].title}</h3>
            <p class="product-card-price">${products[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart()">Add to Cart</button>`
            document.getElementById('product-container').appendChild(product)

            
        }
        
    }
    
    displayProducts()
    
}




getData()




productsInCart = []

function addToCart(){
    console.log('moi')
}
