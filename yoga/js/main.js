"use strict";
//---------------------Generador de Captcha------------------------

let ramdom = Math.floor((Math.random() * 10000));
document.querySelector("#textoCaptcha");
document.querySelector("#textoCaptcha").innerHTML = ramdom;
let btn_enviarCaptcha = document.querySelector("#enviarCaptcha");
btn_enviarCaptcha.addEventListener("click", verificar);
                 
document.querySelector(".botonera").classList.add("oculto");
              
let mensajeCaptcha = document.querySelector("#mensajeCaptcha");
function verificar() {
    let captchaInput = document.querySelector("#captcha");
    let captchaValue = (captchaInput.value * 1); 
    if (ramdom === captchaValue) {
        mensajeCaptcha.innerHTML = "El código ingresado es correcto. Haga click en Enviar Formulario";
        document.querySelector(".botonera").classList.remove("oculto");
        
    }
    else {
        mensajeCaptcha.innerHTML = "El código ingresado es incorrecto. Por favor, vuelva a intentarlo.";
        console.log(captchaValue);
}
}



