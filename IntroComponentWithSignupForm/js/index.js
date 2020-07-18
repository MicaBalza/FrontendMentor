document.getElementById("form").addEventListener("submit", comprobarform);

function comprobarform(e) {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var arroba = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  var password = document.getElementById("password").value;

  if (firstName == 0) {
    document.getElementById("first-name").style.border = "2px solid #ff7a7a";
    document.getElementById("first-error").style.display = "flex";
    document.getElementById("1").style.visibility = "visible";
  }

  if (lastName == 0) {
    document.getElementById("last-name").style.border = "2px solid #ff7a7a";
    document.getElementById("last-error").style.display = "flex";
    document.getElementById("2").style.visibility = "visible";
  }

  if (!arroba.test(email)) {
    document.getElementById("email").style.border = "2px solid #ff7a7a";
    document.getElementById("email-error").style.display = "flex";
    document.getElementById("3").style.visibility = "visible";
  }

  if (password == 0) {
    document.getElementById("password").style.border = "2px solid #ff7a7a";
    document.getElementById("password-error").style.display = "flex";
    document.getElementById("4").style.visibility = "visible";
  }

  e.preventDefault();
}
