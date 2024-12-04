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
            <p class="product-card-description">${products[i].description}</p>
            <p class="product-card-price">${products[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart()">Add to Cart</button>`
            document.getElementById('product-container').appendChild(product)

            
        }
        
    }
    
    displayProducts()
    
}

document.getElementById('men-btn').addEventListener('click', menCategory)


 async function menCategory(){
    data = await fetch('https://fakestoreapi.com/products')
    myData = await data.json()
    console.log(myData)
    productContainer = document.getElementById('product-container')
    productContainer.innerHTML = ''
    for (i = 0;i<myData.length; i++){
        console.log(myData[i].category)
        if (myData[i].category == "men's clothing"){
            product = document.createElement('div')
            product.classList.add('product-card')
            product.innerHTML += `
            <img class="product-card-image" src="${myData[i].image}" alt="">
            <h3 class= "product-card-title">${myData[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
            <p class="product-card-price">${myData[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart()">Add to Cart</button>`
            productContainer.appendChild(product)

        }
    }
}


document.getElementById('women-btn').addEventListener('click', womenCategory)


 async function womenCategory(){
    data = await fetch('https://fakestoreapi.com/products')
    myData = await data.json()
    console.log(myData)
    productContainer = document.getElementById('product-container')
    productContainer.innerHTML = ''
    for (i = 0;i<myData.length; i++){
        console.log(myData[i].category)
        if (myData[i].category == "women's clothing"){
            product = document.createElement('div')
            product.classList.add('product-card')
            product.innerHTML += `
            <img class="product-card-image" src="${myData[i].image}" alt="">
            <h3 class= "product-card-title">${myData[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
            <p class="product-card-price">${myData[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart()">Add to Cart</button>`
            productContainer.appendChild(product)

        }
    }
}

document.getElementById('electronics-btn').addEventListener('click', accessoriesCategory)


async function accessoriesCategory(){
   data = await fetch('https://fakestoreapi.com/products')
   myData = await data.json()
   console.log(myData)
   productContainer = document.getElementById('product-container')
   productContainer.innerHTML = ''
   for (i = 0;i<myData.length; i++){
       console.log(myData[i].category)
       if (myData[i].category == "electronics" || myData[i].category == 'jewelery'){
           product = document.createElement('div')
           product.classList.add('product-card')
           product.innerHTML += `
           <img class="product-card-image" src="${myData[i].image}" alt="">
           <h3 class= "product-card-title">${myData[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
           <p class="product-card-price">${myData[i].price}</p>
           <button class="addToCart-btn" onclick = "addToCart()">Add to Cart</button>`
           productContainer.appendChild(product)

       }
   }
}

getData()




productsInCart = []

function addToCart(){
    console.log('moi')
}
