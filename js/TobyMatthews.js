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