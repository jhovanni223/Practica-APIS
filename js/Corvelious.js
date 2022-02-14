const urlapir='https://rickandmortyapi.com/api/character/150';

fetch(urlapir)
.then(respuesta => respuesta.json())
.then(data =>{
    
    let elemento=document.getElementById("Corvelious");
    console.log(data.name);
    elemento.innerHTML =`
    <h1>
    <img src='${data.image}'/>
    <p>${data.name}</p></h1>
    <h3><p>Id: ${data.id}</p>
   
    <p>Genero:${data.gender}</p>
    <p>Especie: ${data.species}</p></h3>
    `;
})
.catch(error=>console.log(error))