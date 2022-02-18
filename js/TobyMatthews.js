<<<<<<< HEAD
const URL_API="https://rickandmortyapi.com/api/character/354";


var contenido = document.querySelector('#contenido')
function fetchRick(){
    fetch(URL_API)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        contenido.innerHTML=`
        <img src= "${data.image}">
        <p> Id: ${data.id} </p>
        <p> Género ${data.gender} </p>
        <p> Nombre: ${data.name} </p>
        <p> Especie: ${data.species} </p>
        `
    })
}
fetchRick(1);
=======
const urlapir = 'https://rickandmortyapi.com/api/character/354';

fetch(urlapir)
    .then(respuesta => respuesta.json())
    .then(data => {

        let elemento = document.getElementById("Toby_Matthews");
        console.log(data.name);
        elemento.innerHTML = `
    <link rel="stylesheet" href="../../css/styles.css">
    <div class="cuerpo">
    <div class="card">
        <div class="card-image">
            <img src='${data.image}'>
        </div>
        <div class="card-text">
            <br>
        <h2 id="nombre" >${data.name}</h2>
        <h3 >Gender</h3>
        <p id="gender">${data.gender}</p>
        <h3 >Species</h3>
        <p id="specie">${data.species}</p>         
        </div>  
        </div>
    </div>
    `;
    })
    .catch(error => console.log(error))
>>>>>>> Developer
