     class Animal {
        constructor(nombre, edad, img, comentarios, sonido){
            let Nombre = nombre;
            let Edad = edad;
            let Img = img;
            let Comentarios = comentarios;
            let Sonido = sonido;

            this.getNombre = () => Nombre;
            this.getEdad = () => Edad;
            this.getImg = () => Img;
            this.getComentarios = () => Comentarios
            this.getSonido = () => Sonido;

            this.setComentarios = (nuevoComentario) => Comentarios = nuevoComentario;
        }
        getNombre (){
            return this.getNombre();
        }
        getEdad (){
            return this.getEdad();
        }
        getImg (){
            return this.getImg();
        }
        getSonido (){
            return this.getSonido();
        }
        setComentarios(nuevoComentario){
            return this.getComentarios(nuevoComentario)
        }
    }
    // console.log(new Animal('ss', '3', '...', 'oi'))
  
    
export default Animal
