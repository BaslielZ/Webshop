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
    
    function displayProducts(){ 
        for (i = 0; i < products.length; i++){ //Loop through each item in the newly updated array
            product = document.createElement('div') //creating a div that will serve as a product card
            product.classList.add('product-card')
            product.innerHTML = `                   
            <img class="product-card-image" src="${products[i].image}" alt="">
            <h3 class= "product-card-title">${products[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
            <p class="product-card-price">${products[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart()">Add to Cart</button>`//Adding contents into product card
            document.getElementById('product-container').appendChild(product) //product card is inserted in a bigger container for organized display

            
        }
        
    }
    
    displayProducts() //Products are displayed right after fetching
    
}


//Function for displaying the 'Men' category products
document.getElementById('men-btn').addEventListener('click', menCategory)


 async function menCategory(){
    data = await fetch('https://fakestoreapi.com/products') //Fetching api and coverting to useable JS array
    myData = await data.json()
    console.log(myData)
    productContainer = document.getElementById('product-container') //Accessing the product list container
    productContainer.innerHTML = ''
    for (i = 0;i<myData.length; i++){
        console.log(myData[i].category)
        if (myData[i].category == "men's clothing"){ //Getting elements with the target category and making instructions for them
            product = document.createElement('div')
            product.classList.add('product-card')
            product.innerHTML += `
            <img class="product-card-image" src="${myData[i].image}" alt="">
            <h3 class= "product-card-title">${myData[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
            <p class="product-card-price">${myData[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart()">Add to Cart</button>`//Adding contents to product card
            productContainer.appendChild(product)//product card is inserted to the bigger container for organized display

        }
    }
}



//Function for displaying the 'Women' category products
document.getElementById('women-btn').addEventListener('click', womenCategory)


 async function womenCategory(){
     data = await fetch('https://fakestoreapi.com/products')//Fetching api and coverting to useable JS array
     myData = await data.json()
    console.log(myData)
    productContainer = document.getElementById('product-container')//Accessing the product list container
    productContainer.innerHTML = ''
    for (i = 0;i<myData.length; i++){
        console.log(myData[i].category)
        if (myData[i].category == "women's clothing"){//Getting elements with the target category and making instructions for them
            product = document.createElement('div')
            product.classList.add('product-card')
            product.innerHTML += `
            <img class="product-card-image" src="${myData[i].image}" alt="">
            <h3 class= "product-card-title">${myData[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
            <p class="product-card-price">${myData[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart()">Add to Cart</button>`//Adding contents to product card
            productContainer.appendChild(product)//product card is inserted to the bigger container for organized display

        }
    }
}




//Function for displaying the 'Electronics' category products
document.getElementById('electronics-btn').addEventListener('click', accessoriesCategory)


async function accessoriesCategory(){
   data = await fetch('https://fakestoreapi.com/products')//Fetching api and coverting to useable JS array
   myData = await data.json()
   console.log(myData)
   productContainer = document.getElementById('product-container')//Accessing the product list container
   productContainer.innerHTML = ''
   for (i = 0;i<myData.length; i++){
       console.log(myData[i].category)
       if (myData[i].category == "electronics" || myData[i].category == 'jewelery'){//Getting elements with the target category and making instructions for them
           product = document.createElement('div')
           product.classList.add('product-card')
           product.innerHTML += `
           <img class="product-card-image" src="${myData[i].image}" alt="">
           <h3 class= "product-card-title">${myData[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
           <p class="product-card-price">${myData[i].price}</p>
           <button class="addToCart-btn" onclick = "addToCart()">Add to Cart</button>`//Adding contents to product card
           productContainer.appendChild(product)//product card is inserted to the bigger container for organized display

       }
   }
}

getData()




productsInCart = []

function addToCart(){
    console.log('moi')
}
