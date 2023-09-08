let nom;
let num;
let mail;
let clientes = []
let productos = []



/* function menu(){
    return parseInt(prompt("Menu de opciones\n1- Ver listado de clientes\n2- Cargar nuevo cliente\n3- Eliminar cliente\n4- Cargar producto\n5- Comprar\n0- Salir"))
}
 */
/* function seleccionarOpcion(){{
    let op = menu()
    while (op != 0){
        switch (op){
            case 1:
                verClientes(clientes);
                break
            case 2:
                nuevoCliente(clientes);
                break
            case 3:
                borrarCliente(clientes)
                break
            case 4:
                cargarProducto(productos)
                break
            case 5:
                comprar(clientes, productos)
                break
            default:
                alert("Opcion ingresada invalida. Reiniciando menu.")
                menu()
        }
        op = menu()
    } 
    alert("Saliendo")
}}
 */
//Clase producto y cliente
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

//Opcion 1
function verClientes(clientes){
    if (clientes.length <= 0){
        alert("No hay ningun cliente cargado.\nIngrese a opcion 2 (cargar cliente).")
    }
    else{
        for (let cliente of clientes){
            alert("Nombre: " + cliente.nombre + " | Numero: " + cliente.numero + " | Email: " + cliente.mail)
        }
    }
}
let boton = document.getElementById("verClientes")
boton.onclick = () => verClientes(clientes)

//Opcion 2
function nuevoCliente(clientes){
    let nom = prompt("Ingrese nombre del cliente")
    let num = parseInt(prompt("Ingrese numero de contacto de cliente"))
    let mail = prompt("Ingrese e-mail del cliente: ")
    let nuevo = new Cliente(nom, num, mail)
    alert("Datos del cliente\n-Nombre: " + nom + "\n-Numero de telefono: " + num + "\n-Email: " + mail)
    clientes.push(nuevo)
    alert("¡Cliente agregado con exito!")
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
let registrar = document.getElementById("borrarCliente")
registrar.onclick = () => borrarCliente(clientes)

//Opcion 4
function cargarProducto(productos){
    let art = prompt("Ingrese nombre del articulo: ")
    let precio = parseFloat(prompt("Ingrese precio del articulo: "))
    let cant = parseInt(prompt("Ingrese stock del articulo: "))
    let nuevoProducto = new Producto(art, precio, cant)
    productos.push(nuevoProducto)
    alert("Datos del articulo stockeado\n-Articulo: " + art + "\n-Precio: $" + precio + "\n-Existencia: " + cant +"\n¡Producto agregado con exito!")
}
let registrar = document.getElementById("cargarProducto")
registrar.onclick = () => cargarProducto(productos)

//Opcion 5
function comprar(clientes, productos) {

}

//Codigo main
seleccionarOpcion()