products = [] //Initialise an empty list for future product objects


async function getData(){
    data = await fetch('https://fakestoreapi.com/products') //fetch api and convert a useable JS array
    myData = await data.json()
    for (i = 0; i<myData.length; i++){ //Loop through each element in fetched data and add it to empty array
        console.log('hey')
        products.push(myData[i])
    }
    console.log(myData.length)
    console.log(products.length)
    
    displayProducts()
}

getData()


function displayProducts(){ 
    document.getElementById('message').style.visibility = 'visible'
    document.getElementById('message').style.padding = '16rem'
    document.getElementById('category-btn-container').style.display = 'none'
    document.getElementById('category-btn-container').style.display = 'flex'
    document.getElementById('product-container').style.display = 'grid'
    document.getElementById('product-container').innerHTML = ''
    for (i = 0; i < products.length; i++){ //Loop through each item in the newly updated array
        product = document.createElement('div') //creating a div that will serve as a product card
        product.classList.add('product-card')
        product.innerHTML = `                   
        <img class="product-card-image" src="${products[i].image}" alt="">
        <h3 class= "product-card-title">${products[i].title}</h3>
        <p class="product-card-description">${products[i].description}</p>
        <p class="product-card-price">${products[i].price}</p>
        <button class="addToCart-btn" onclick = "addToCart(${myData[i].id})">Add to Cart</button>`//Adding contents into product card
        document.getElementById('product-container').appendChild(product) //product card is inserted in a bigger container for organized display

        
    }
    
}


//Function for displaying the 'Men' category products
document.getElementById('men-btn').addEventListener('click', menCategory)


function menCategory(){
    document.getElementById('message').style.visibility = 'visible'
    document.getElementById('category-btn-container').style.visibility = 'visible'
    document.getElementById('product-container').style.display = 'grid'
    productContainer = document.getElementById('product-container') //Accessing the product list container
    productContainer.innerHTML = ''
    for (i = 0;i<products.length; i++){
        if (products[i].category == "men's clothing"){ //Getting elements with the target category and making instructions for them
            product = document.createElement('div')
            product.classList.add('product-card')
            product.innerHTML += `
            <img class="product-card-image" src="${products[i].image}" alt="">
            <h3 class= "product-card-title">${products[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
            <p class="product-card-price">${products[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart(${products[i].id})">Add to Cart</button>`//Adding contents to product card
            productContainer.appendChild(product)//product card is inserted to the bigger container for organized display

        }
    }
}



//Function for displaying the 'Women' category products
document.getElementById('women-btn').addEventListener('click', womenCategory)


function womenCategory(){
    document.getElementById('message').style.visibility = 'visible'
    document.getElementById('category-btn-container').style.visibility = 'visible'
    document.getElementById('product-container').style.display = 'grid'
    productContainer = document.getElementById('product-container')//Accessing the product list container
    productContainer.innerHTML = ''
    for (i = 0;i<myData.length; i++){
        if (products[i].category == "women's clothing"){//Getting elements with the target category and making instructions for them
            product = document.createElement('div')
            product.classList.add('product-card')
            product.innerHTML += `
            <img class="product-card-image" src="${products[i].image}" alt="">
            <h3 class= "product-card-title">${products[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
            <p class="product-card-price">${products[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart(${products[i].id})">Add to Cart</button>`//Adding contents to product card
            productContainer.appendChild(product)//product card is inserted to the bigger container for organized display

        }
    }
}




//Function for displaying the 'Electronics' category products
document.getElementById('electronics-btn').addEventListener('click', accessoriesCategory)


function accessoriesCategory(){
    document.getElementById('message').style.visibility = 'visible'
    document.getElementById('category-btn-container').style.visibility = 'visible'
    document.getElementById('product-container').style.display = 'grid'
   productContainer = document.getElementById('product-container')//Accessing the product list container
   productContainer.innerHTML = ''
   for (i = 0;i<products.length; i++){
       if (products[i].category == "electronics" || products[i].category == 'jewelery'){//Getting elements with the target category and making instructions for them
           product = document.createElement('div')
           product.classList.add('product-card')
           product.innerHTML += `
           <img class="product-card-image" src="${products[i].image}" alt="">
           <h3 class= "product-card-title">${products[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
           <p class="product-card-price">${products[i].price}</p>
           <button class="addToCart-btn" onclick = "addToCart(${products[i].id})">Add to Cart</button>`//Adding contents to product card
           productContainer.appendChild(product)//product card is inserted to the bigger container for organized display

       }
   }
}








productsInCart = []


function addToCart(id){
    console.log(id)
    for(i=0;i<products.length;i++){
        if (id == products[i].id){
            productsInCart.push(products[i])
        }
    }
    console.log(productsInCart)
    return productsInCart
    
}

function showCart(){
    console.log(productsInCart)
    document.getElementById('message').style.padding = '4rem'
    document.getElementById('message').style.visibility = 'hidden'
    document.getElementById('category-btn-container').style.display = 'none'
    productContainer = document.getElementById('product-container')
    productContainer.innerHTML = ''
    if (productsInCart.length == 0){
        document.getElementById('product-container').style.display = 'flex'
        productContainer.innerHTML = '<p style = font-size:4rem>Your cart is empty!</p>'
    }
    for (i=0; i<productsInCart.length;i++){
        product = document.createElement('div')
        product.classList.add('product-card')
        product.innerHTML += `
        <img class="product-card-image" src="${productsInCart[i].image}" alt="">
        <h3 class= "product-card-title">${productsInCart[i].title}</h3>
        <p class="product-card-description">${productsInCart[i].description}</p>
        <p class="product-card-price">${productsInCart[i].price}</p>
        <div class="count-btn"><button id="addCount-btn" onclick="addCount(${productsInCart[i].id})">+</button><p class="" id="count${productsInCart[i].id}">1</p><button id="subtractCount-btn" onclick="subtractCount(${productsInCart[i].id})">-</button></div>
        <button onclick="removeProduct(${productsInCart[i].id})" class="remove-btn">Remove</button>`//Adding contents to product card

        productContainer.appendChild(product)
    }
}


totalprice = 0

function addCount(id){
    for (i=0;i<productsInCart.length;i++){
        if (id == productsInCart[i].id){
            count = Number(document.getElementById(`count${productsInCart[i].id}`).innerText)
            newCount = count+1
            console.log(newCount)
            document.getElementById(`count${productsInCart[i].id}`).innerText = `${newCount}`

        }
    }
}


function subtractCount(id){
    for (i=0;i<productsInCart.length;i++){
        count = Number(document.getElementById(`count${productsInCart[i].id}`).innerText)
        while (count > 1){
            if (id == productsInCart[i].id){
                console.log(count--)
                document.getElementById(`count${productsInCart[i].id}`).innerText = `${count--}`
                
    
            }
            break
        }
    }
}


function removeProduct(id){
    for (i=0;i<productsInCart.length;i++){
        if(id == productsInCart[i].id){
            productsInCart = productsInCart.filter((item) => item !== productsInCart[i] )
            showCart()
        }
    }
}