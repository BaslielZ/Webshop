products = [] //Initialise an empty list for future product objects


async function getData(){
    products = []
    data = await fetch('https://fakestoreapi.com/products') //fetch api and convert a useable JS array
    myData = await data.json()
    for (i = 0; i<myData.length; i++){ //Loop through each element in fetched data and add it to empty array
        products.push(myData[i])
    }
    console.log(products)
    
    displayProducts()
}


function displayProducts(){ 
    document.getElementById('message').style.visibility = 'visible'
    document.getElementById('message').style.padding = '16rem'
    document.getElementById('category-btn-container').style.display = 'none'
    document.getElementById('category-btn-container').style.display = 'flex'
    document.getElementById('product-container').style.display = 'grid'
    document.getElementById('product-container').innerHTML = ''
    for (i = 0; i < products.length; i++){ //Loop through each item in the newly updated products array
        product = document.createElement('div') //creating a div that will contain the item object
        product.classList.add('product-card')
        product.innerHTML = `                   
        <img class="product-card-image" src="${products[i].image}" alt="">
        <h3 class= "product-card-title">${products[i].title}</h3>
        <p class="product-card-description">${products[i].description}</p>
        <p class="product-card-price">${products[i].price}</p>
        <button class="addToCart-btn" onclick = "addToCart(${products[i].id})">Add to Cart</button>`//Adding contents of the item into product card
        document.getElementById('product-container').appendChild(product) //product card is inserted in a bigger container for organized display
        
    }
    document.getElementById('totalprice-container').style.display = 'none' //Hide total price in the home page
    
}

getData()



//Function for displaying the 'Men' category products
document.getElementById('men-btn').addEventListener('click', menCategory) //Adding an event listener for button

function menCategory(){
    document.getElementById('message').style.visibility = 'visible'
    document.getElementById('category-btn-container').style.visibility = 'visible'
    document.getElementById('product-container').style.display = 'grid'
    productContainer = document.getElementById('product-container') //Accessing the product list container
    productContainer.innerHTML = ''
    for (i = 0;i<products.length; i++){
        if (products[i].category == "men's clothing"){ //Getting items of the target category
            product = document.createElement('div')
            product.classList.add('product-card')
            product.innerHTML += `
            <img class="product-card-image" src="${products[i].image}" alt="">
            <h3 class= "product-card-title">${products[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
            <p class="product-card-price">${products[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart(${products[i].id})">Add to Cart</button>`//Adding target item to product cards
            productContainer.appendChild(product)//product card is inserted to the bigger container for organized display

        }
    }
}



//Function for displaying the 'Women' category products
document.getElementById('women-btn').addEventListener('click', womenCategory) //Adding an event listener for button

function womenCategory(){
    document.getElementById('message').style.visibility = 'visible'
    document.getElementById('category-btn-container').style.visibility = 'visible'
    document.getElementById('product-container').style.display = 'grid'
    productContainer = document.getElementById('product-container')//Accessing the product list container
    productContainer.innerHTML = ''
    for (i = 0;i<myData.length; i++){
        if (products[i].category == "women's clothing"){//Getting items of the target category
            product = document.createElement('div')
            product.classList.add('product-card')
            product.innerHTML += `
            <img class="product-card-image" src="${products[i].image}" alt="">
            <h3 class= "product-card-title">${products[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
            <p class="product-card-price">${products[i].price}</p>
            <button class="addToCart-btn" onclick = "addToCart(${products[i].id})">Add to Cart</button>`//Adding target item to product card
            productContainer.appendChild(product)//product card is inserted to the bigger container for organized display

        }
    }
}




//Function for displaying the 'Electronics' category products
document.getElementById('electronics-btn').addEventListener('click', accessoriesCategory) //Adding an event listener to button


function accessoriesCategory(){
    document.getElementById('message').style.visibility = 'visible'
    document.getElementById('category-btn-container').style.visibility = 'visible'
    document.getElementById('product-container').style.display = 'grid'
   productContainer = document.getElementById('product-container')//Accessing the product list container
   productContainer.innerHTML = ''
   for (i = 0;i<products.length; i++){
       if (products[i].category == "electronics" || products[i].category == 'jewelery'){//Getting items of the target category
           product = document.createElement('div')
           product.classList.add('product-card')
           product.innerHTML += `
           <img class="product-card-image" src="${products[i].image}" alt="">
           <h3 class= "product-card-title">${products[i].title}</h3>
            <p class="product-card-description">${products[i].description}</p>
           <p class="product-card-price">${products[i].price}</p>
           <button class="addToCart-btn" onclick = "addToCart(${products[i].id})">Add to Cart</button>`//Adding target item to product card
           productContainer.appendChild(product)//product card is inserted to the bigger container for organized display

       }
   }
}



productsInCart = [] //Intialize an empty list for products to-be-added to cart
totalprice = 0 //Total price variable

function addToCart(id){
    console.log(id)
        for(i=0;i<products.length;i++){ //Looping through each item in products list
            if (id == products[i].id){ //Finding item with the target id
                existingProduct = productsInCart.find(item => item.id == id); //Checking if products is already in the cart
                if (existingProduct) { //If item is already in cart existingProduct = true
                    console.log(existingProduct)
                    alert("Product already in cart."); 
                }
                else{ //If existingProduct == false
                    products[i].count = 1 //Giving new quantity property to each item 
                    productsInCart.push(products[i]) //Adding item to cart
                    totalprice += products[i].count*products[i].price //Updating total price
                }
            }
        }
    console.log(productsInCart)  
}




function showCart(){
    console.log(productsInCart)
    document.getElementById('message').style.padding = '4rem' 
    document.getElementById('message').style.visibility = 'hidden'
    document.getElementById('category-btn-container').style.display = 'none' //Style modifications for good display
    productContainer = document.getElementById('product-container') //Getting the product-container div as a variable
    productContainer.innerHTML = '' //Emptying product-container to prevent duplication of product cards
    if (productsInCart.length == 0){ //If cart is empty
        document.getElementById('product-container').style.display = 'flex'
        productContainer.innerHTML = '<p style = font-size:4rem>Your cart is empty!</p>'
        document.getElementById('totalprice-container').style.display = 'none'
    }
    for (i=0; i<productsInCart.length;i++){ //Looping throught each item in cart
        product = document.createElement('div')
        product.classList.add('product-card')
        product.innerHTML += `
        <img class="product-card-image" src="${productsInCart[i].image}" alt="">
        <h3 class= "product-card-title">${productsInCart[i].title}</h3>
        <p class="product-card-description">${productsInCart[i].description}</p>
        <p class="product-card-price">${productsInCart[i].price}</p>
        <div class="count-btn"><button id="addCount-btn" onclick="addCount(${productsInCart[i].id})">+</button><p class="" id="count${productsInCart[i].id}">${productsInCart[i].count}</p><button id="subtractCount-btn" onclick="subtractCount(${productsInCart[i].id})">-</button></div>
        <button onclick="removeProduct(${productsInCart[i].id})" class="remove-btn">Remove</button>`//Adding each item to product card

        document.getElementById('totalprice-container').innerHTML= `Total: ${totalprice.toFixed(2)} <button class="send-order-btn" onclick="sendOrder()">Send Order</button>` //Creating a totalprice display and send order button
        productContainer.appendChild(product) //product card is inserted to product-container div for display
        resetStyle() //Reseting styles of product-container if necessary
    }
}



function addCount(id){
    for (i=0;i<productsInCart.length;i++){ //Loop through each item in cart
        if (id == productsInCart[i].id){ //Find item with target id
            count =Number(productsInCart[i].count) //get the newly-defined count property
            newCount = count +1  //increase count by 1
            productsInCart[i].count = newCount //update count property
            totalprice += productsInCart[i].price //update total price
            document.getElementById('totalprice-container').innerHTML = `Total: ${totalprice.toFixed(2)} <button class="send-order-btn" onclick="sendOrder()">Send Order</button>` //Update total price display
            console.log(totalprice)
            document.getElementById(`count${productsInCart[i].id}`).innerText = `${productsInCart[i].count}` //Update count display on product card
            console.log(productsInCart[i].count)

        }
    }
}


function subtractCount(id){
    for (i=0;i<productsInCart.length;i++){ //Loop through each item in cart
        count = Number(productsInCart[i].count)//get the newly-defined count property
        while (count > 1){ //Making sure count must always be greater than 1 inorder to decrement 
            if (id == productsInCart[i].id){ //Find item with target id
                newCount = count - 1 //decrease count by 1
                productsInCart[i].count = newCount //update count property
                totalprice -= productsInCart[i].price //update total price
                document.getElementById('totalprice-container').innerHTML = `Total: ${totalprice.toFixed(2)} <button class="send-order-btn" onclick="sendOrder()">Send Order</button>` //Update total price display
                console.log(totalprice)
                document.getElementById(`count${productsInCart[i].id}`).innerText = `${productsInCart[i].count}` //Update count display on product card
    
            }
            break
        }
    }
}


function removeProduct(id){
    for (i=0;i<productsInCart.length;i++){ //Looping through each item in cart
        if(id == productsInCart[i].id){ //finding item with target id
            console.log(productsInCart[i])
            count = Number(productsInCart[i].count)
            totalprice -= productsInCart[i].price*count //Updating total price
            productsInCart = productsInCart.filter((item) => item !== productsInCart[i]) //Updating cart list by removing the target item
            showCart() //display the new cart list
        }
    }
}


function sendOrder(){
    console.log(productsInCart)
    content = document.getElementById('product-container') //getting the product-container div
    content.style.display = 'flex' //Style modifications
    content.innerHTML = `<div class="checkout">
        <input id= "name" type="text" placeholder="Name">
        <input id= "address" type="text" placeholder="Address">
        <input id= "cardnumber" type="text" placeholder="Card Number: XXXX-XXXX-XXXX-XXXX">
        <input id= "phonenumber" type="tel" placeholder="Phone Number"> 
        <p>Total Price: €${totalprice.toFixed(2)}</p>
        <button onclick = "completeOrder()">Complete Purchase</button>
    </div>` //Adding input fields for customer data with price display and order button
    document.getElementById('totalprice-container').style.display = 'none'


}


orders = [] //Initializing new list that will contain orders by the customer

function Order(name, address, cardNumber, phoneNumber){ //Object that will container customer details and orders
    this.order = productsInCart //order of customer is matched to their cart list 
    this.name = name
    this.address = address
    this.cardNumber = cardNumber
    this.phoneNumber = phoneNumber
}

function completeOrder(){
    customerName = document.getElementById('name').value
    address = document.getElementById('address').value
    cardNumber = document.getElementById('cardnumber').value
    phoneNumber = document.getElementById('phonenumber').value //Getting customer details

    order = new Order(customerName, address, cardNumber, phoneNumber) //creating a new object container the customer details and order
    orders.push(order) //customer order is put in a list to store the data

    console.log(order) 
    console.log(orders)


    document.getElementById('product-container').innerHTML = '<p>You order has been sent</p>' //Notify customer of order success
    products = [] //Reset values for new shopper!
    productsInCart = []
    totalprice = 0
}

function resetStyle(){ //Reseting styles that could have been modified in js to default css styles
    document.getElementById('totalprice-container').style= ''
    document.getElementById('product-container').style = ''
}

