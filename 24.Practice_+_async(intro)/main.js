

let form = document.querySelector('form')

let button = document.querySelector('.btn');

button.addEventListener('click', function(event){
    event.preventDefault();
    
    const payload = serializeForm(form);

    fetch('http://localhost:3000/foo', {
        method: "POST",
        body: payload
    })
    .then((response) => response.json())
    .then((response) => {
        let urlToJson = `goods/${response}.json`;
        return fetch(`http://localhost:3000/${urlToJson}`);
    })
    .then((response) => response.json())
    .then((response) => {
        render(response)
    })
    .catch((erore) => {
        console.log(erore)
    })
})

function render(info) {
    form.classList.add("hide");
    const userGoods = info;
    
    const divContainer = document.createElement("div");
    divContainer.classList.add('container');
    
    userGoods.forEach(item => {
        const {model, price, img} = item;

        const content = `<div class="goods">
        <div class="title"><img src="${img}">
        </div>
        <div class="model">${model}</div>
        <div class="price">${price} грн.</div>
    </div>`
        
        divContainer.insertAdjacentHTML("beforeend", content);

    })
    document.body.append(divContainer)
}
