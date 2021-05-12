function vowelToi() {

  var original = document.getElementById('original').value;
  var newText = original.replaceAll(/c[aou]/g,'qui')
  newText = newText.replaceAll(/C[aou]/g,'Qui')
  newText = newText.replaceAll(/Z[aou]/g,'Ci')
  newText = newText.replaceAll(/z[aou]/g,'ci')
  newText = newText.replaceAll(/[AEOU]/g,'I')
  newText = newText.replaceAll(/[aeou]/g,'i')
  newText = newText.replaceAll(/qii/g,'qui')

  document.getElementById('ridiculizado').value= newText;

}

function copyText() {
         let text = document.getElementById("ridiculizado").value;
         navigator.clipboard.writeText(text)
           .then(() => {
             alert('Texto copiado al portapapeles.');
           })
           .catch(err => {
             alert('Error in copying text: ', err);
           });
       }
