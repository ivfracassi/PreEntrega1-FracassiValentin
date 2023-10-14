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
        let mail = preMail[i];
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
        menu.classList.remove('invisible');
        contenido.classList.add('invisible');
        contenido.innerHTML = ""
    } else {
        menu.classList.add('invisible');
        contenido.classList.remove('invisible');
    }
}

//Opcion 1
function verClientes() {
    mostrador.innerHTML = " "
    if (clientes.length <= 0) {
        mostrador.innerHTML = "No hay ningún cliente cargado. Cargue un cliente para comenzar.";
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
function agregarFormulario(){
    let form = document.createElement("form")
    formulario.innerHTML=`
        <input type="text" id="nombre" placeholder="Nombre">
        <input type="number" id="telefono" placeholder="Número de contacto">
        <input type="email" id="email" placeholder="Email">
        <button type="submit">Agregar Cliente</button>`
    ;
    mostrador.innerHTML=" "
    mostrador.appendChild(formulario)
    form = document.getElementById("form")
    form.classList.remove("invisible") 
}
let verFormulario = document.getElementById("agregarFormulario")
verFormulario.addEventListener("click", function(){
    agregarFormulario();
})    

function agregarCliente(){
    let nom = document.getElementById("nombre").value;
    let num = document.getElementById("telefono").value;
    let mail = document.getElementById("email").value;
    if (nom == "" || num =="" || mail == ""){
        Swal.fire(
            'Error',
            'No completó todos los campos.',
            'error'
          )
        return;
    }
    let nuevo = new Cliente(nom, num, mail)
    clientes.push(nuevo)
    Swal.fire(
        'Correcto',
        'Cliente agregado con exito!.',
        'success'
      )
}

let formulario = document.getElementById("form");
console.log(formulario);
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("LO ESTOY POR AGREGAR");
    agregarCliente();
});

 
//Opcion 3
function mostrarInput(){
    let input = document.createElement("form")
    input.innerHTML=`
        <input type="text" id="nombre" placeholder="Nombre">
        <button type="submit" id="enviar">Borrar cliente</button>`
    ;
    mostrador.innerHTML=" "
    mostrador.appendChild(input)
    input = document.getElementById("input")
}
let input = document.getElementById("borrarCliente")
input.addEventListener("click", function(){
    mostrarInput()
})    


function borrarCliente(clientes){
    let nombreBorrar = document.getElementById("nombre").value
    console.log(nombreBorrar);
    let indiceCliente = -1
    for (let i = 0; i<clientes.length; i++){
        if (clientes[i]. nombre === nombreBorrar){
            indiceCliente = i
            break  
        }
    }
    if (indiceCliente !== -1){
        clientes.splice(indiceCliente, 1);
        Swal.fire({
            title: '¿Eliminar cliente?',
            text: "No podras revertirlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado',
                'El cliente ha sido eliminado.',
                'success'
              )
            }
          })
    }
    else{
        Swal.fire(
            'Error',
            'No existe ningun cliente con ese nombre.',
            'error'
          )
        return
    }

}

let op3 = document.getElementById("input")
console.log(op3)
op3.addEventListener("submit", function(e){
    e.preventDefault()
    borrarCliente(clientes)
})