const uncrypted_alphabet = ["a", "e", "i", "o", "u"];
const encrypted_alphabet = ["ai", "enter", "imes", "ober", "ufat"];
const result = document.getElementById("result_text")


function encrypt() {
  var text = document.getElementById("text").value;
  var encrypted_text = "";
  for (var i in text) {
    for (var j in uncrypted_alphabet) {
      var inside = false;
      if (text[i] == uncrypted_alphabet[j]) {
        encrypted_text = encrypted_text.concat(encrypted_alphabet[j]);
        inside = true;
        break;
      }
    }
    if (!inside) {
      encrypted_text = encrypted_text.concat(text[i]);
    }
  }
 result.textContent = encrypted_text;
}

function uncrypt() {
  var text = document.getElementById("text").value;
  var uncrypted_text = "";

  for (var i = 0; i < text.length; i++) {
    var outside = false;
    for (var j = 0; j < uncrypted_alphabet.length; j++) {
      for (var k = 0; k < encrypted_alphabet[j].length; k++) {
        outside = true;
        if (encrypted_alphabet[j][k] != text[i + k]) {
          outside = false;
          break;
        }
      }
      if (outside) {
        uncrypted_text = uncrypted_text.concat(uncrypted_alphabet[j]);
        i = i + encrypted_alphabet[j].length - 1;
        break;
      }
    }
    if (outside != true) {
      uncrypted_text = uncrypted_text.concat(text[i]);
    }
  }

  result.textContent = uncrypted_text;
}
function copy(){
navigator.clipboard.writeText(result.textContent)
}
