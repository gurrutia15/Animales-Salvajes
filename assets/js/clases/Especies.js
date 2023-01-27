import Animal from "./Animal.js";



class Leon extends Animal{
    constructor(nombre,edad,img,comentarios){
        super(nombre,edad,img,comentarios,"./assets/sounds/Rugido.mp3");
    }
    Rugir(){
        return this.getSonido();
    }
}

class Lobo extends Animal{
    constructor(nombre,edad,img,comentarios){
        super(nombre,edad,img,comentarios,"./assets/sounds/Aullido.mp3");
    }
    Aullar(){
        return this.getSonido();
    }
}
class Oso extends Animal{
    constructor(nombre,edad,img,comentarios){
        super(nombre,edad,img,comentarios,"./assets/sounds/Gruñido.mp3");
    }
    Gruñir(){
        return this.getSonido();
    }
}

class Serpiente extends Animal{
    constructor(nombre,edad,img,comentarios){
        super(nombre,edad,img,comentarios,"./assets/sounds/Siseo.mp3");
    }
    Sisear(){
        return this.getSonido();
    }
}

class Aguila extends Animal{
    constructor(nombre,edad,img,comentarios){
        super(nombre,edad,img,comentarios,"./assets/sounds/Chillido.mp3");
    }
    Chillar(){
        return this.getSonido();
    }
}




export  { Leon, Lobo, Oso, Serpiente, Aguila }