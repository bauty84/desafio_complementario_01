const productos = [
    "frutilla",
    "manzana",
    "pera",
    "zanahoria",
    "lechuga",
    "tomate",
    "banana",
    "pepino",
    "repollo",
    "papa",
    "palta",
    "cebolla",
];

// Variables globales
let select = document.getElementById("selectProd");
let selectQty = document.getElementById("cantidad");
let seleccion = [];
let producto = 0;
let totalToPay = 0;

// Carga el select con el array de productos
window.onload = function fillSelect() {

    productos.forEach((element) => {
        let tag = document.createElement("option");
        tag.textContent = element;
        tag.value = element;
        select.add(tag);
    });

    for (let i = 1; i <=10 ; i++) {
        let tag = document.createElement("option");
        tag.textContent = i;
        tag.value = i;
        selectQty.add(tag);
        
    }
};

// Cuando se apreta el boton agregar, lo agrega al producto
const btnAdd = document
    .getElementById("btnAdd")
    .addEventListener("click", function addProd() {
        let select = document.getElementById("selectProd");
        let selectQty = document.getElementById("cantidad");
        producto = select.options[select.selectedIndex].value;
        cantidad = selectQty.options[select.selectedIndex].value

        switch (producto) {
            case "frutilla":
                seleccion.push(parseInt(290*cantidad));
                break;
            case "manzana":
                seleccion.push(parseInt(600*cantidad));
                break;
            case "pera":
                seleccion.push(parseInt(510*cantidad));
                break;
            case "zanahoria":
                seleccion.push(parseInt(330*cantidad));
                break;
            case "lechuga":
                seleccion.push(parseInt(165*cantidad));
                break;
            case "tomate":
                seleccion.push(parseInt(120*cantidad));
                break;
            case "banana":
                seleccion.push(parseInt(320*cantidad));
                break;
            case "pepino":
                seleccion.push(parseInt(580*cantidad));
                break;
            case "repollo":
                seleccion.push(parseInt(725*cantidad));
                break;
            case "papa":
                seleccion.push(parseInt(630*cantidad));
                break;
            case "palta":
                seleccion.push(parseInt(860*cantidad));
                break;
            case "cebolla":
                seleccion.push(parseInt(420*cantidad));
                break;
        }

        alert("Producto agregado exitosamente!");
    });

// Cuando quiere sacar el total de lo seleccionado
const btnPay = document
    .getElementById("btnPay")
    .addEventListener("click", function payProd() {
        for (let i = 0; i < seleccion.length; i++) {
            totalToPay += seleccion[i];
        }

        document.getElementById('toPay').innerHTML = '$'+totalToPay;
        seleccion = [];
        totalToPay = 0;
    });

// Carga el  precio  x   Kilo del producto seleccionado en el selectBox
function loadPrice() {
    let value = select.options[select.selectedIndex].value;
    switch (value) {
        case "frutilla":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $290";
            break;
        case "manzana":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $600";
            break;
        case "pera":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $510";
            break;
        case "zanahoria":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $330";
            break;
        case "lechuga":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $165";
            break;
        case "tomate":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $120";
            break;
        case "banana":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $320";
            break;
        case "pepino":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $580";
            break;
        case "repollo":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $725";
            break;
        case "papa":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $630";
            break;
        case "palta":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $860";
            break;
        case "cebolla":
            document.getElementById("priceLabel").innerHTML =
                "     x   Kilo - $420";
            break;
    }
}