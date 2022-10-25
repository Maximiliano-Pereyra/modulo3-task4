const contenedorDetais = document.getElementById('containerDetail')

let todaLaInfo = data

let eventos = data.events

let id = location.search.slice(4)
console.log(id);

let eventosF = eventos.filter(evento => evento._id == id)

eventosF = eventosF[0]

createCard(eventosF)

function createCard(tarjeta) {
    contenedorDetais.innerHTML += ` 
    <div class="texto-main">
                <h5 class="card-title">${tarjeta.name}</h5>
                <p class="card-text">Date: ${tarjeta.date}</p>
                <p class="card-text">${tarjeta.description}</p>
                <p class="card-text">${tarjeta.category}</p>
                <p class="card-text">Place: ${tarjeta.place}</p>
                <p class="card-text">Capacity: ${tarjeta.capacity}</p>
                <p class="card-text"> Assistance/Estimate:${tarjeta.assistance ||tarjeta.estimate} </p>
                <p>Price:${tarjeta.price}</p>
                <a href="#" class="btn btn-primary btnCard">Buy</a>
            </div>

            <div class="imagen-main">
                <img src="${tarjeta.image}" alt="evento">
            </div>
        `
}