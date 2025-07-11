//-----------------------Tabla dinámica----------------------------
"use strict";
const BASE_API =
  "https://6382b8886e6c83b7a985b4dc.mockapi.io/api/v1/yogapilates";
document.addEventListener("DOMContentLoaded", mostrarTabla);

let filas = [];
console.log(BASE_API);

//----------------------Función mostrar tabla-------------------
async function mostrarTabla() {
  cuerpoTabla.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif?20090907150129"/>`;
  try {
    let respuesta = await fetch(BASE_API);
    filas = await respuesta.json();
    cuerpoTabla.innerHTML = "";
    for (let fila of filas) {
      cuerpoTabla.innerHTML += `
      <tr>
        <td>${fila.nombre}</td>
        <td>${fila.telefono}</td>
        <td>${fila.horario}</td>
        <td>${fila.comentario}</td>
        <td class="span"><button class="btnEdit" data-id="${fila.id}"></button> 
        <button class="btnEliminar" data-id="${fila.id}"></button></td>
      </tr>
      `;
    }
    let botonesEditar = document.querySelectorAll(".btnEdit");
    for (let btn of botonesEditar) {
      btn.addEventListener("click", initEditForm);
    }
    let botonesEliminar = document.querySelectorAll(".btnEliminar");
    for (let btn of botonesEliminar) {
      btn.addEventListener("click", eliminar);
    }
  } catch (error) {
    console.log("Error: " + error);
  }
}

//----------------------funcion enviar------------------
let btn_enviar = document.querySelector("#enviar");
btn_enviar.addEventListener("click", enviar);
async function enviar(evento) {
  evento.preventDefault();
  let nombreIngresado = document.querySelector("#nombre").value;
  let telefonoIngresado = document.querySelector("#telefono").value;
  let diaIngresado = document.querySelector("#dia").value;
  let horarioIngresado = document.querySelector("#horario").value;
  let comentarioIngresado = document.querySelector("#comentario").value;

  if (
    !nombreIngresado ||
    !telefonoIngresado ||
    !diaIngresado ||
    !horarioIngresado
  ) {
    alert(
      "Por favor, complete todos los campos obligatorios antes de enviar el formulario."
    );
    return;
  }

  let renglon = {
    nombre: nombreIngresado,
    telefono: telefonoIngresado,
    dia: dia,
    horario: horarioIngresado,
    comentario: comentarioIngresado,
  };

  try {
    await fetch(BASE_API, {
      method: "POST", //POST me permite ingresar un nuevo dato en el server
      headers: { "Content-type": "application/json" }, //contenido de tipo json
      body: JSON.stringify(renglon), //agrego el contenido del arreglo renglon
    });
    let respuestaNueva = await fetch(BASE_API, {
      method: "GET", //vuelvo a tomar lo que subi al server
    });

    if (respuestaNueva.ok) {
      let datos = await respuestaNueva.json();
      cuerpoTabla.innerHTML = ""; //si la respuesta está bien, vacío la tabla y agrego el contenido de respuesta
      mostrarTabla();
      
      // Mostrar mensaje de éxito
      mostrarMensajeExito();
      
      // Limpiar el formulario
      document.getElementById("formulario").reset();
      
    } else {
      console.log("hubo un error"); //si la respuesta no llega por algún error, muestra en consola que hubo un error
    }
  } catch (error) {
    console.log("Error: " + error); //muestra por consola y por pantalla que hubo un error
  }
}

//----------------------funcion eliminar------------------

async function eliminar(event) {
  event.preventDefault(); //previene que se recargue la pagina
  let id = this.getAttribute("data-id"); //busco el atributo id (si no existiese devuelve null)
  try {
    let respuesta = await fetch(BASE_API + "/" + id, {
      //le asigno el id a la url de la API
      method: "DELETE", //permite eliminar la propiedad de un objeto
    });

    if (respuesta.ok) {
      console.log("Se Elimino con Exito!"); //muestro por consola que fue exitosa la eliminación
      await mostrarTabla(); //espero a la función mostrar tabla, para que se muestre ek contenido
    } else {
      console.log("fallo DELETE");
    }
  } catch (error) {
    console.log("Error: " + error); //detecto errores de tipo conección u otros.
  }
}
//----------------------funcion inicializar form-------------------
function initEditForm(event) {
  event.preventDefault;
  try {
    formEdit.classList.remove("oculto"); //el formulario de editar comienza oculto
    const idSeleccionado = this.dataset.id; //tomo el id de la fila seleccionada
    let filaSeleccionada = filas.find(
      //.find: devuelve el valor del primer elemento con ese id
      function (fila) {
        return fila.id == idSeleccionado;
      }
    ); //tomo todos los datos con ese id (osea la fila)
    inputEditId.value = filaSeleccionada.id;
    inputEditNombre.value = filaSeleccionada.nombre;
    inputEditTelefono.value = filaSeleccionada.telefono;
    inputEditHorario.value = filaSeleccionada.horario;
    inputEditComentario.value = filaSeleccionada.comentario;
  } catch (error) {
    console.log("Error: " + error);
  }
}
//----------------------funcion modificar------------------
formEdit.addEventListener("submit", modificar);
async function modificar(event) {
  event.preventDefault();
  let formData = new FormData(this); //captura el contenido del formulario
  let datos = {
    id: formData.get("id"),
    nombre: formData.get("nombre"),
    telefono: formData.get("telefono"),
    horario: formData.get("horario"),
    comentario: formData.get("comentario"),
  };
  let respuesta = null; // si la respuesta es null se dasabilita el
  fieldsetEdit.disabled = true; //fieldset es un grupo de campos
  try {
    respuesta = await fetch(BASE_API + "/" + formData.get("id"), {
      //al igual que en eliminar, le agrego a la url el id de la fila que quiero modificar
      method: "PUT", //el metodo put me permite sustituir el contenido de la fila
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos), //convierte el contenido en tipo jason en string (texto)
    });
  } catch (error) {
    console.log("Error" + error);
  }
  if (respuesta == null) {
    return;
  }

  console.log(respuesta.ok);
  formEdit.classList.add("oculto"); //vuelve a ocultarse
  formEdit.reset(); //reseteo el formulario
  fieldsetEdit.disabled = false; //si se desabilita es falso
  await mostrarTabla(); //muestro tabla
}

//----------------------función mostrar mensaje de éxito------------------
function mostrarMensajeExito() {
  const mensajeExito = document.getElementById("mensajeExito");
  mensajeExito.innerHTML = "¡Formulario enviado con éxito! Gracias por tu inscripción.";
  mensajeExito.classList.remove("oculto");
  
  // Ocultar el mensaje después de 5 segundos
  setTimeout(() => {
    mensajeExito.classList.add("oculto");
  }, 5000);
}
