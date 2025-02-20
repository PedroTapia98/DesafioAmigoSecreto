let ListaAmigos = [];

function agregarAmigo(){
    //Obtener el valor del input 
    let NombreAmigo = document.getElementById("amigo");
    //let ValAmigo = input.value.trim();//Para poder eliminar lo posibles espaciós al inicio o al final de input

    //Asegurarnos de no tener valores nulos
    if (ValAmigo  === ""){
        alert("Ingrese un valor valido");
        return;
    }

    //Agregar el valor al Array
    ListaAmigos.push(ValAmigo);

    console.log("Lista de amigos:", ListaAmigos);
        
}
