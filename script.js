function vowelToi() {

  var original = document.getElementById('original').value;
  var newText = original.replaceAll(/[AEOU]/g,'I')
  newText = newText.replaceAll(/[aeouü]/g,'i')
  newText = newText.replaceAll(/[ÁÉÚÓ]/g,'Í')
  newText = newText.replaceAll(/[áéóú]/g,'í')

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
