//importa a través de un destructuring
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Especies.js";

let animales = [];

document.querySelector("#btnRegistrar").addEventListener('click',  ()=> {
    let animal = document.querySelector('#animal');
    let edad = document.querySelector('#edad');
    let comentarios = document.querySelector('#comentarios');
    let previewElement = document.querySelector('#preview img');  //cuadro para la foto


// Selección especie
    let nuevoAnimal;  
    if (animal.value && edad.value && comentarios.value && previewElement.src){
        switch(animal.value){
            case 'Leon':
                nuevoAnimal = new Leon (
                    animal.value,
                    edad.value,
                    previewElement.src,
                    comentarios.value 
                );
            break;
            case 'Lobo':
                nuevoAnimal = new Lobo (
                    animal.value,
                    edad.value,
                    previewElement.src,
                    comentarios.value 
                );
            break;
            case 'Oso':
            nuevoAnimal = new Oso (
                animal.value,
                edad.value,
                previewElement.src,
                comentarios.value 
            );
            break;
            case 'Serpiente':
            nuevoAnimal = new Serpiente (
                animal.value,
                edad.value,
                previewElement.src,
                comentarios.value 
            );
            break;
            case 'Aguila':
            nuevoAnimal = new Aguila (
            animal.value,
            edad.value,
            previewElement.src,
            comentarios.value 
        );
    break;
        }
  

   

//VALIDACION
    animales.push(nuevoAnimal);
    reloadTable()

    animal.selectedIndex= 0;
    edad.selectedIndex= 0;
    comentarios.value = '';
    previewElement.src= '';

} else {
    alert('Faltan datos por llenar')
}

console.log(animales)
})


const reloadTable = () => {
    const animalesTemplate = document.getElementById('Animales');
    animalesTemplate.innerHTML = '';
    animales.forEach((a,i) => {         /* a = animal, i=indice */
        animalesTemplate.innerHTML+= `
        <div class="px-3 pb-2 participante" data-animal="${a.getNombre()}">  
        <div class="card">
            <input type ='image' src="${a.getImg()}"
                class="card-img-top style="width:267px;height:302px" data-toggle="modal" data-target="#exampleModal" onclick="Modal('${i}')">
                <button type="button" class="btn" style="background-color:#737a80; width:auto" onclick="Sonido('${i}')"><img width="20px" src="./assets/imgs/audio.svg"><audio src="${a.getSonido()}"></audio></button>    
            
            </div>
            </div>`
        })
    }


//SONIDO
window.Sonido = (i) => {
    const animalSonido = animales[i];
    new Audio(animalSonido.getSonido()).play()
};


//VENTANA MODAL
window.Modal = (i) =>{
    const datAnimal = animales[i];
    const modal = document.querySelector('.modal-body')
    modal.innerHTML = `<div class = 'text-center' >
        <img src= '${datAnimal.getImg()}' class = 'card-img-top p-2'>
        <h4 style='color: white'>${datAnimal.getEdad()}</h4>
        <h4 style= 'color: white'>Comentarios</h4>
        <hr>
        <h5 style= 'color: white'>${datAnimal.getComentarios()}</h5>
    </div>`
}