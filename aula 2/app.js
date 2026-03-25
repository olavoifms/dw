const container = document.querySelector(`#Container`)

// Could be GET or POST/PUT/PATCH/DELETE
fetch('https://dummyjson.com/products?limit=4&key=id,title,description,price')
.then(res => res.json())
.then((resp)=>{
container.textContent=JSON.stringify(resp)
});
/* { status: 'ok', method: 'GET' } */