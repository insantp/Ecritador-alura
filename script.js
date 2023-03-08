
function encriptarTexto() {
    let texto = document.querySelector('.texto').value;
    let encriptado = texto.replace(/e/g, 'enter')
                          .replace(/i/g, 'imes')
                          .replace(/a/g, 'ai')
                          .replace(/o/g, 'ober')
                          .replace(/u/g, 'ufat');
    return encriptado;
    
  }
  
  function desencriptarTexto() {
    let texto = document.querySelector('.resultArea').value;
    let desencriptado = texto.replace(/enter/g, 'e')
                             .replace(/imes/g, 'i')
                             .replace(/ai/g, 'a')
                             .replace(/ober/g, 'o')
                             .replace(/ufat/g, 'u');
    return desencriptado;
  }
  
  function copiarTexto() {
    let textoEncriptado = document.querySelector('.resultArea').value;
    navigator.clipboard.writeText(textoEncriptado);
  }
  
  document.querySelector('.btn-encriptar').addEventListener('click', function() {
    let encriptado = encriptarTexto();
    document.querySelector('.resultArea').value = encriptado;
  });
  
  document.querySelector('.btn-decriptar').addEventListener('click', function() {
    let desencriptado = desencriptarTexto();
    document.querySelector('.resultArea').value = desencriptado;
  });
  
  document.querySelector('.btn-copiar').addEventListener('click', function() {
    copiarTexto();
  });
  