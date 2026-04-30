function limpiarTablas(){
    arregloIzquierda = [];// No funciona con variables constantes.
    arregloDerecha.splice(0);// No reasigna la variable, solo modifica su contenido.
    pintarArregloIzquierda();
    pintarArregloDerecha();
 
}
 
let arregloIzquierda = [];
const arregloDerecha = [];
 
// 2. Función agregarEdad
function agregarEdad() {
    let edadInput = document.getElementById("edad");
    let valor = edadInput.value;
 
    if (valor !== "") {
        arregloIzquierda.push(parseInt(valor));  
        edadInput.value = "";
        pintarArregloIzquierda();  
    }
}
 
// 3. Función pintarArregloIzquierda
function pintarArregloIzquierda() {
    let tabla = document.getElementById("tablaIzquierda");
    let html= "";
 
    for (let i = 0; i < arregloIzquierda.length; i++) {
        html+= `
            <tr>
                <td>${arregloIzquierda[i]}</td>
                <td><button class="btn-eliminar" onclick="eliminarIzquierdo(${i})">Eliminar</button></td>
                <td><button class="btn-mover" onclick="moverHaciaDerecha(${i})">➜</button></td>
            </tr>`;
    }
        let suma=sumarEdadesIzquierda();
                html+="<tr>";
                html+="<td>"+suma+"</td>";
                html+="<td>"+"Total Suma"+"</td>";
                html+="<td>"+""+"</td>";
                html+="</tr>";
    tabla.innerHTML=html;
}

 
// 5. Función pintarArregloDerecha
function pintarArregloDerecha() {
    let tabla = document.getElementById("tablaDerecha");
    let html="";
    tabla.innerHTML = "";
 
    for (let i = 0; i < arregloDerecha.length; i++) {
        html+= `
            <tr>
                <td><button class="btn-mover" onclick="moverHaciaIzquierda(${i})">⬅</button></td>
                <td>${arregloDerecha[i]}</td>
                <td><button class="btn-eliminar" onclick="eliminarDerecho(${i})">Eliminar</button></td>
            </tr>`;
    }
            let suma=sumarEdadesDerecha();
                html+="<tr>";
                html+="<td>"+suma+"</td>";
                html+="<td>"+"Total Suma"+"</td>";
                html+="<td>"+""+"</td>";
                html+="</tr>";
    tabla.innerHTML=html;
}
 
function eliminarIzquierdo(indice) {
    arregloIzquierda.splice(indice, 1);
    pintarArregloIzquierda();
}
 
function eliminarDerecho(indice) {
    arregloDerecha.splice(indice, 1);
    pintarArregloDerecha();
}
 
// 7. Función moverHaciaDerecha
function moverHaciaDerecha(indice) {
    let valor = arregloIzquierda[indice];
    arregloDerecha.push(valor);
    arregloIzquierda.splice(indice, 1);
 
    pintarArregloIzquierda();
    pintarArregloDerecha();
}
 
// 8. Función moverHaciaIzquierda
function moverHaciaIzquierda(indice) {
    let valor = arregloDerecha[indice];
    arregloIzquierda.push(valor);
    arregloDerecha.splice(indice, 1);
   
    pintarArregloIzquierda();
    pintarArregloDerecha();
}
 
function limpiarTablas(){
    // No funciona con variables constantes.
    arregloIzquierda = [];
    // No reasigna la variable, solo modifica su contenido.
    arregloDerecha.splice(0);
    pintarArregloIzquierda();
    pintarArregloDerecha();
}

function moverTodoDerecha(){
    for(let indice=0; indice<arregloIzquierda.length; indice++){
        let valor=arregloIzquierda[indice];
        arregloDerecha.push(valor);
    }
    arregloIzquierda.splice(0);
    pintarArregloIzquierda();
    pintarArregloDerecha();
}

function moverTodoIzquierda(){
    for(let indice=0; indice<arregloDerecha.length; indice++){
        let valor=arregloDerecha[indice];
        arregloIzquierda.push(valor);
    }
    arregloDerecha.splice(0);
    pintarArregloDerecha();
    pintarArregloIzquierda();
}

function sumarEdadesIzquierda(){
    let suma=0;
    for (let i=0; i< arregloIzquierda.length;i++){
      suma+=arregloIzquierda[i]
    }
    return suma;
}

function sumarEdadesDerecha(){
    let suma=0;
    for (let i=0; i< arregloDerecha.length;i++){
      suma+=arregloDerecha[i]
    }
    return suma;
}