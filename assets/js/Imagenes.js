import Animales from './Consulta.js'

            const { animales } = await Animales.request();
            // console.log(animales)
 

document.getElementById('animal').addEventListener('change', (e) => {
    const pj = document.getElementById('animal').value;
        
    const imagenPj = animales.find((p) => p.name == pj).imagen
        
        // console.log(imagenPj)

 document.getElementById('preview').innerHTML = `<img width= '200' src='./assets/imgs/${imagenPj}'  />`;
})

