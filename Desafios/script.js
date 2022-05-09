const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const copiar = document.querySelector(".copiar");


function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none";
}

window.onload = function() {
    // Pega todos os elementos correspondentes
    var copyTextareaBtn = Array.prototype.slice.
      call(document.querySelectorAll('.js-textareacopybtn'));
    var copyTextarea = Array.prototype.slice.
      call(document.querySelectorAll('.mensagem'));
 
    // Laço para percorrer todos os elementos
    copyTextareaBtn.forEach(function(btn, idx) {
 
      btn.addEventListener("click", function() {
 
        // Copia o conteudo do textarea
        copyTextarea[idx].select();
 
          var msg = document.execCommand('copy') 
            ? 'funcionou' : 'deu erro';
          console.log('Compando para copiar texto ' + msg);
 
      });
 
    });
  }


function btnDesencriptar() {
    const textoDesencriptado = Desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    mensagem.style.backgroundImage="none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

function Desencriptar(stringDesencriptada) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringDesencriptada;
}

titulo();