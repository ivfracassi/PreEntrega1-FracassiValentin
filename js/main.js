let clientes = []
let productos = []


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


let nombres = ["Carlos", "Raul", "Hector", "Mario", "Ruben", "Carolina", "Mariana", "Ruperta", "Ades", "Zeus", "Poseidon"];
let preMail = ["carlitos@gmail.com", "raul@gmail.com", "hectorcito@gmail.com", "marito@gmail.com", "ruby@gmail.com", "caren@gmail.com", "marichu@gmail.com", "rupi@gmail.com", "adesito@gmail.com", "dioszeuselmasgrande@gmail.com", "poseidon@gmail.com"];


// Define la clase Cliente aquí si aún no lo has hecho

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

console.log(clientes); // Esto mostrará el arreglo de clientes en la consola

function verClientes() {
    let mostrador = document.getElementById("mostrador");
    let clientesRecuperados = [];

    // Iterar a través de las claves del localStorage para recuperar los clientes
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let clienteJSON = localStorage.getItem(clave);
        let cliente = JSON.parse(clienteJSON);
        clientesRecuperados.push(cliente);
    }

    if (clientesRecuperados.length <= 0) {
        mostrador.innerHTML = "No hay ningún cliente cargado. Ingrese a opción 2 (cargar cliente).";
    } else {
        let listaHTML = "<ul>";

        for (let i = 0; i < clientesRecuperados.length; i++) {
            let cliente = clientesRecuperados[i];
            listaHTML += "<li>Nombre: " + cliente.nombre + " | Número: " + cliente.numero + " | Email: " + cliente.mail + "</li>";
        }

        listaHTML += "</ul>";
        mostrador.innerHTML = listaHTML;
    }
}

let botonVerCliente = document.getElementById("verClientes");
let botonLimpiar = document.getElementById("limpiar");

botonVerCliente.addEventListener("click", function () {
    verClientes();
});

botonLimpiar.addEventListener("click", function () {
    let mostrador = document.getElementById("mostrador");
    mostrador.innerHTML = ""; // Borrar el contenido del elemento mostrador
});

function borrarClientes() {
    let listaClientes = document.getElementById("listaClientes");
    listaClientes.innerHTML = ""; // Borrar el contenido del elemento listaClientes
    clientesMostrados = false; // Establecer la variable global como falsa para indicar que la lista de clientes se ha borrado
}

let botonVerClientes = document.getElementById("verClientes");
let botonBorrarClientes = document.getElementById("borrarClientes");

botonVerClientes.addEventListener("click", verClientes);
botonBorrarClientes.addEventListener("click", borrarClientes);



//Opcion 2
function nuevoCliente(clientes) {
    let nom = prompt("Ingrese nombre del cliente");
    let num = parseInt(prompt("Ingrese numero de contacto de cliente"));
    let mail = prompt("Ingrese e-mail del cliente: ");
    let nuevo = new Cliente(nom, num, mail);
    
    let mostrador = document.getElementById("mostrador");
    mostrador.innerHTML += "Datos del cliente<br>-Nombre: " + nom + "<br>-Numero de telefono: " + num + "<br>-Email: " + mail + "<br>";
    
    clientes.push(nuevo);
    
    mostrador.innerHTML += "¡Cliente agregado con éxito!<br>";
}

let registrar = document.getElementById("nuevoCliente")
registrar.onclick = () => nuevoCliente(clientes)

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

//Opcion 4
function cargarProducto(productos){
    let art = prompt("Ingrese nombre del articulo: ")
    let precio = parseFloat(prompt("Ingrese precio del articulo: "))
    let cant = parseInt(prompt("Ingrese stock del articulo: "))
    let nuevoProducto = new Producto(art, precio, cant)
    productos.push(nuevoProducto)
    alert("Datos del articulo stockeado\n-Articulo: " + art + "\n-Precio: $" + precio + "\n-Existencia: " + cant +"\n¡Producto agregado con exito!")
}
let cargarProd = document.getElementById("cargarProducto")
cargarProd.onclick = () => cargarProducto(productos)

//Opcion 5
function comprar(clientes, productos) {

}
