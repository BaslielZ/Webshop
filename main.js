products = [] //Initialise an empty list for future product objects


async function getData(){
    products = []
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
        <button class="addToCart-btn" onclick = "addToCart(${products[i].id})">Add to Cart</button>`//Adding contents into product card
        document.getElementById('product-container').appendChild(product) //product card is inserted in a bigger container for organized display
        
    }
    
}

getData()

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

totalprice = 0

function addToCart(id){
    console.log(id)
        for(i=0;i<products.length;i++){
            if (id == products[i].id){
                existingProduct = productsInCart.find(item => item.id === id);
                if (existingProduct) {
                    console.log(existingProduct)
                    console.log("Product already in cart. Incrementing count.");
                }
                else{
                    products[i].count = 1
                    productsInCart.push(products[i])
                    totalprice += products[i].count*products[i].price
                }
            }
        }
    console.log(productsInCart)  
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
        document.getElementById('totalprice-container').style.display = 'none'
    }
    for (i=0; i<productsInCart.length;i++){
        product = document.createElement('div')
        product.classList.add('product-card')
        product.innerHTML += `
        <img class="product-card-image" src="${productsInCart[i].image}" alt="">
        <h3 class= "product-card-title">${productsInCart[i].title}</h3>
        <p class="product-card-description">${productsInCart[i].description}</p>
        <p class="product-card-price">${productsInCart[i].price}</p>
        <div class="count-btn"><button id="addCount-btn" onclick="addCount(${productsInCart[i].id})">+</button><p class="" id="count${productsInCart[i].id}">${productsInCart[i].count}</p><button id="subtractCount-btn" onclick="subtractCount(${productsInCart[i].id})">-</button></div>
        <button onclick="removeProduct(${productsInCart[i].id})" class="remove-btn">Remove</button>`//Adding contents to product card

        document.getElementById('totalprice-container').innerHTML= `Total: ${totalprice.toFixed(2)} <button class="send-order-btn" onclick="sendOrder()">Send Order</button>`
        productContainer.appendChild(product)
        resetStyle()
    }
}



function addCount(id){
    for (i=0;i<productsInCart.length;i++){
        if (id == productsInCart[i].id){
            count =Number(productsInCart[i].count)
            newCount = count +1 
            productsInCart[i].count = newCount
            totalprice += productsInCart[i].price
            document.getElementById('totalprice-container').innerHTML = `Total: ${totalprice.toFixed(2)} <button class="send-order-btn" onclick="sendOrder()">Send Order</button>`
            console.log(totalprice)
            document.getElementById(`count${productsInCart[i].id}`).innerText = `${productsInCart[i].count}`
            console.log(productsInCart[i].count)

        }
    }
}


function subtractCount(id){
    for (i=0;i<productsInCart.length;i++){
        count = Number(productsInCart[i].count)
        while (count > 1){
            if (id == productsInCart[i].id){
                newCount = count - 1
                productsInCart[i].count = newCount
                totalprice -= productsInCart[i].price
                document.getElementById('totalprice-container').innerHTML = `Total: ${totalprice.toFixed(2)} <button class="send-order-btn" onclick="sendOrder()">Send Order</button>`
                console.log(totalprice)
                document.getElementById(`count${productsInCart[i].id}`).innerText = `${productsInCart[i].count}`
    
            }
            break
        }
    }
}


function removeProduct(id){
    for (i=0;i<productsInCart.length;i++){
        if(id == productsInCart[i].id){
            console.log(productsInCart[i])
            count = Number(productsInCart[i].count)
            totalprice -= productsInCart[i].price*count
            productsInCart = productsInCart.filter((item) => item !== productsInCart[i])
            showCart()
        }
    }
}


function sendOrder(){
    console.log(productsInCart)
    content = document.getElementById('product-container')
    content.style.display = 'flex'
    content.innerHTML = `<div class="checkout">
        <input id= "name" type="text" placeholder="Name">
        <input id= "address" type="text" placeholder="Address">
        <input id= "cardnumber" type="text" placeholder="Card Number: XXXX-XXXX-XXXX-XXXX">
        <input id= "phonenumber" type="tel" placeholder="Phone Number">
        <p>Total Price: €${totalprice.toFixed(2)}</p>
        <button onclick = "completeOrder()">Complete Purchase</button>
    </div>`
    document.getElementById('totalprice-container').style.display = 'none'


}


orders = []

function Order(name, address, cardNumber, phoneNumber){
    this.order = productsInCart
    this.name = name
    this.address = address
    this.cardNumber = cardNumber
    this.phoneNumber = phoneNumber
}

function completeOrder(){
    customerName = document.getElementById('name').value
    address = document.getElementById('address').value
    cardNumber = document.getElementById('cardnumber').value
    phoneNumber = document.getElementById('phonenumber').value

    order = new Order(customerName, address, cardNumber, phoneNumber)
    orders.push(order)

    console.log(order)
    console.log(orders)


    document.getElementById('product-container').innerHTML = '<p>You order has been sent</p>'
    products = []
    productsInCart = []
    totalprice = 0
}

function resetStyle(){
    document.getElementById('totalprice-container').style= ''
    document.getElementById('product-container').style = ''
}

array = ['a', 'b', 'c', 'd']

res = array.find(item => item == 'a')

console.log(res)

