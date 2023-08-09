let nom;
let num;
let mail;



function menu(){
    return parseInt(prompt("Menu de opciones\n1- Cargar cliente\n2- Calcular costo\n0- Salir"))
}

function seleccionarOpcion(){{
    let op = menu()
    while (op != 0){
        switch (op){
            case 1:
                cliente()
                break
            case 2:
                comprar()
                break
            default:
                alert("Opcion ingresada invalida. Reiniciando menu.")
                menu()
        }
        op = menu()
    } 
    alert("Saliendo")
}}

//Funciones para el menu 1

function cliente(){
    let nom = prompt("Ingrese nombre del cliente")
    let num = parseInt(prompt("Ingrese numero de contacto de cliente"))
    let mail = prompt("Ingrese e-mail del cliente: ")
    alert("Datos del cliente\n-Nombre: " + nom + "\n-Numero de telefono: " + num + "\n-Email: " + mail)
}

//Funciones para el menu 2

function calcular(){
    let art = prompt("Ingrese nombre del articulo: ")
    let precio = parseFloat(prompt("Ingrese precio del articulo: "))
    let cant = parseInt(prompt("Ingrese cantidad a comprar"))
    alert("Datos del articulo comprado\n-Articulo: " + art + "\n-Precio: $" + precio + "\n-Cantidad: " + cant + "\n\nSubtotal: $" + precio*cant + "\n¡Agregado al carrito con exito!")
    let subtotal = precio * cant
    return subtotal
}

function totalCompra(acumulador){
    alert("Su compra ha sido realizada con exito.\nTotal de la compra: $" + acumulador)
}
    
function comprar(){
    let acumulador = 0
    let consultar = parseInt(prompt("Ingrese la cantidad de articulos que desea agregar al carrito: "))
    for (let i=1; i <= consultar; i++)
        acumulador = calcular() + acumulador
    totalCompra(acumulador)
}

//Codigo main
seleccionarOpcion()