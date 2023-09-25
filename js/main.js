let clientes = []
let productos = []
let mostrador = document.getElementById("mostrador");

class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre
        this.precio = parseFloat(precio)
        this.stock = parseInt(stock)
        this.disponible = true
    }
}

class Cliente{
    constructor(nombre, numero, mail){
        this.nombre = nombre
        this.numero = parseInt(numero)
        this.mail = mail
    }
}

localStorage.clear()
//Funcion que genera un arreglo de clientes precargados.
function precargar(clientes){
    let nombres = ["Carlos", "Raul", "Hector", "Mario", "Ruben", "Carolina", "Mariana", "Ruperta", "Ades", "Zeus", "Poseidon"];
    let preMail = ["carlitos@gmail.com", "raul@gmail.com", "hectorcito@gmail.com", "marito@gmail.com", "ruby@gmail.com", "caren@gmail.com", "marichu@gmail.com", "rupi@gmail.com", "adesito@gmail.com", "dioszeuselmasgrande@gmail.com", "poseidon@gmail.com"];
    for (let i = 0; i < nombres.length; i++) {
        let nom = nombres[i];
        let num = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
        let indice = Math.floor(Math.random() * preMail.length);
        let mail = preMail[indice];
        let nuevo = new Cliente(nom, num, mail);
        clientes.push(nuevo);
        let numeroCliente = "Cliente" + i;
        console.log(numeroCliente)
        let clienteJSON = JSON.stringify(nuevo);
        localStorage.setItem(numeroCliente, clienteJSON);
    }
    console.log(clientes);
}
precargar(clientes)



//Funcion que esconde el menu de opciones y que permite volver presionando F4.
let menuVisible = true;
const menu = document.getElementById('opciones');
const contenido = document.getElementById('mostrador');

document.addEventListener('keydown', function(event) {
    if (event.key === 'F4' && !menuVisible) {
        toggleMenu();
        event.preventDefault();
    }
});

function toggleMenu() {
    menuVisible = !menuVisible;
    if (menuVisible) {
        menu.classList.remove('oculto');
        contenido.classList.add('oculto');
        contenido.innerHTML = ""
    } else {
        menu.classList.add('oculto');
        contenido.classList.remove('oculto');
    }
}

//Opcion 1
function verClientes() {
    if (clientes.length <= 0) {
        mostrador.innerHTML = "No hay ningún cliente cargado. Ingrese a opción 2 (cargar cliente).";
    } else {
        let listaHTML = "<ul>";
        for (let i = 0; i < clientes.length; i++) {
            let cliente = clientes[i];
            let numeroCliente = "Cliente" + i;
            let clienteJSON = JSON.stringify(cliente)
            localStorage.setItem(numeroCliente, clienteJSON)
            listaHTML += "<li>Nombre: " + cliente.nombre + " | Número: " + cliente.numero + " | Email: " + cliente.mail + "</li>";
        }
        listaHTML += "</ul>";
        mostrador.innerHTML = listaHTML;
    }
}
let botonVerCliente = document.getElementById("verClientes");
botonVerCliente.addEventListener("click", function () {
    verClientes();
})


//Opcion 2
function agregarFormulario() {
    const form = document.getElementById("nc")
    form.classList.remove("invisible")
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    
    if (!nombre || !telefono || !email) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, complete todos los campos.',
        });
        return;
    }

    const nuevo = new Cliente(nombre, parseInt(telefono), email);
    clientes.push(nuevo);
    Swal.fire({
        icon: 'success',
        title: 'Cliente agregado con éxito',
    });
    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('email').value = '';

let agregarForm = document.getElementById("agregarFormulario")
agregarForm.addEventListener("click", function(){
    agregarFormulario()
})

}

//Opcion 3
function borrarCliente(clientes){
    let nombreBorrar = prompt("Ingrese el nombre del cliente a borrar: ")
    let indiceCliente = -1
    for (let i = 0; i<clientes.length; i++){
        if (clientes[i]. nombre === nombreBorrar){
            indiceCliente = i
            break  
        }
    }
    if (indiceCliente !== -1){
        clientes.splice(indiceCliente, 1);
        alert("Cliente " + nombreBorrar + " ha sido eliminado exitosamente.")
    }
    else{
        alert("No existe un cliente con ese nombre.")
    }

}

let botonBorrarCliente = document.getElementById("borrarCliente");
botonBorrarCliente.addEventListener("click",function(){
    borrarCliente(clientes)
})