

// OBETENEMOS EL CONTENEDOR DE LAS CARDS

const contenedorCards = document.getElementById("cardContainer")

// OBTENEMOS EL LISTADO DE EVENTOS DE LA DATA

// OBTENEMOS EL CURRENT DAY DE LA DATA

let todaLaInfo = data

const dia = todaLaInfo.currentDate

const eventos = todaLaInfo.events

eventos.forEach(createCard)

// -------------------------------------  CHECKBOX  ----------------------------------------------

const contenedorChecks = document.getElementById('checkbox')

let categoriasCheckbox = [...new Set(eventos.map(evento => evento.category))]

console.log(categoriasCheckbox);

categoriasCheckbox.forEach(createCheckbox)

function createCheckbox(categoria){
    contenedorChecks.innerHTML += `
        <label for="">
        <input class= checkBoxClass fw-semibold" type="checkbox" value="${categoria}"=""> ${categoria}
        </label>
    `
} 

// ----------------------------------- CHEKBOX & SEARCH Filtering ----------------------------------------------
let checkBoxClass = Array.from(document.querySelectorAll(".checkBoxClass"))

console.log(checkBoxClass);

let searchId = document.getElementById("buscador")

checkBoxClass.forEach(checkbox => checkbox.addEventListener('click', filtrarCards))

searchId.addEventListener('input',filtrarCards)

function filtrarCards(){
    let checkboxFiltrados = checkboxFilters(eventos)
    let searchFiltrados = searchFilters(checkboxFiltrados,searchId.value)
    if(searchFiltrados.length !== 0 ){
        contenedorCards.innerHTML = ``
    }
    searchFiltrados.forEach(createCard)
}

function checkboxFilters(evento){
    let checkboxFiltering = checkBoxClass.filter(check => check.checked).map(check => check.value)
    if (checkboxFiltering.length !== 0){
        checkboxFiltering = evento.filter(event => checkboxFiltering.includes(event.category))
        return checkboxFiltering
    }
    return evento

}


function searchFilters(array, texto){
    let searFiltering = array.filter(event => event.name.toLowerCase().includes(texto.toLowerCase()))
    if(searFiltering.length === 0){
        contenedorCards.innerHTML = `
        <h1>No obtuvimos resultados en su busqueda</h1>
        `
        return []
    }
    return searFiltering
}

function createCard(evento){
    contenedorCards.innerHTML += `
    <div class="card" style="width: 18rem; height: 24rem">
        <img src="${evento.image}" class="card-img" alt="...">
        <div class="card-body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <a href="./htmls/Details.html?id=${evento._id}" class="tamaño-btn btn btn-primary">More Data</a>
        </div>
    </div>
    `
} 

/* 
const contenedorCards = document.getElementById("cardContainer")
const contenedorChecks = document.getElementById("checkbox")
const searchId = document.getElementById("buscador")

let eventos;

fetch('https://mh-amazing.herokuapp.com/amazing')
.then(data=>data.json())
.then(dataB=> {
    eventos= dataB.events
    creadorDeCheckboxs(eventos,contenedorChecks)
    impripresorDeCards(eventos,contenedorCards)
})
.catch(error=>console.log(error))
 


//--------------------------checkboxs----------------------//

function creadorDeCheckboxs (eventos, contenedor){
    let aux=eventos=>eventos.category
    let categoriasCheckbox =new Set(eventos.filter(aux).map(aux))
    console.log(categoriasCheckbox);
    categoriasCheckbox.forEach(categorias => {
        contenedor.innerHTML +=`
            <label for="">
                <input class= checkBoxClass fw-semibold" type="checkbox" value="${categorias}"> ${categorias}
            </label>
          ` 
    })
}
 */
//--------------------------cards--------------------------------//
