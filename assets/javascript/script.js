var button = document.getElementById("submit");
var text = document.getElementById("text");
var characters =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
button.addEventListener("click", function(event) {
  event.preventDefault();
});

function generatePassword() {
  var passwordLength = parseInt(
    document.getElementById("passwordLength").value
  );
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomNumber);
  }
  text.value = password;
}
function updateTextInput(val) {
  document.getElementById("pwlength").textContent = val;
}
button.onclick = function() {
  generatePassword();
};
