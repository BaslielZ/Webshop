async function getData(){
    data = await fetch('https://fakestoreapi.com/products')
    myData = await data.json()
    console.log(myData)
}

getData()

