//hacer una pag nueva agregar el menu hamburguesa, agregar herencia .


//clase equipo
class Equipo {
    constructor (nombre,apellido,rolEnEquipo){
        this.nombre = nombre
        this.apellido = apellido
        this.rolEnEquipo = rolEnEquipo
    }
}


//herencia 
class Personal extends Equipo {
    constructor (nombre,apellido,rolEnEquipo,antiguedad,foto) {
    super(nombre,apellido,rolEnEquipo);
    this.antiguedad = antiguedad;
    this.foto = foto;
    }

    datosEquipo() {
         return ` <img src="${this.foto}" alt="Foto de ${this.nombre}">
        <p>Nombre: ${this.nombre} </p>
        <p> Apellido: ${this.apellido}</p>
        <p>Rol que desempeña en equipo: ${this.rolEnEquipo}</p>
        <p>Desempeña su rol desde: ${this.antiguedad} </p>`
    }

} 

//instancia
const personal1 = new Personal('Daniela','Fulco','Lider de equipo y Desarrollador',2019,'assets/fotoDani.jpg')
console.log(personal1.datosEquipo())


const personal2 = new Personal('Patricia','Chavez','Diseñador y Desarrollador',2022,'assets/fotoDani.jpg')
console.log(personal2.datosEquipo())


const personal3 = new Personal('Fernando','Figueroa','Desarrollador',2023,'assets/fotoDani.jpg')
console.log(personal3.datosEquipo())






// Mostrar los datos en la interfaz
function mostrarEquipo() {
    const equipoContainer = document.getElementById('equipo');
    
    // Crear un div para cada persona y agregarlo al contenedor
    equipoContainer.innerHTML = `
        <div class="persona">
            ${personal1.datosEquipo()}
        </div>
        <div class="persona">
            ${personal2.datosEquipo()}
        </div>
        <div class="persona">
            ${personal3.datosEquipo()}
        </div>`
    ;
}

// llamado a la funcion  para mostrar los datos en el navegador
mostrarEquipo();