const urlapir = 'https://rickandmortyapi.com/api/character/3';

fetch(urlapir)
    .then(respuesta => respuesta.json())
    .then(data => {

        let elemento = document.getElementById("Summer");
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
        <h3 >ID</h3>

        <p id="Id">${data.id}</p>
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