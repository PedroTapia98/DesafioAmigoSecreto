let ListaAmigos = [];

function agregarAmigo(){
    //Obtener el valor del input 
    let NombreAmigo = document.getElementById("amigo").value.trim();
    //let ValAmigo = input.value.trim();//Para poder eliminar lo posibles espaciós al inicio o al final de input

    //Asegurarnos de no tener valores nulos
    if (NombreAmigo  === ""){
        alert("Ingrese un valor valido");
        return;
    }

    //Agregar el valor al Array
    ListaAmigos.push(NombreAmigo);

    // Limpiar el input después de agregar
    document.getElementById('amigo').value = '';
    console.log("Lista de amigos:", ListaAmigos);
     // Actualizar la lista en el DOM
     actualizarLista();

}
function actualizarLista() {
let listaElement = document.getElementById("lista-amigos");

    // Verificar que el elemento <ul> existe
    if (!listaElement) {
        console.error("No se encontró el elemento con ID 'lista-amigos'");
        return;
    }

    // Limpiar la lista antes de volver a agregar los elementos
    listaElement.innerHTML = "";

    // Recorrer el array y agregar cada nombre a la lista
    for (let i = 0; i < ListaAmigos.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = `${i + 1}. ${ListaAmigos[i]}`;
        listaElement.appendChild(listItem); // Agregar el <li> a la lista
    }
}
