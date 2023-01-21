function requireYesOrNo() {
  var radioButtons = document.getElementsByName("example");

  for (var radio of radioButtons) {
      if (radio.checked) {
      localStorage.setItem("two-fa-reset", radio.value);
    }
  }
}

function display2faReset() {
  var resetMessage = document.getElementById("reset-2fa-message");

  if (localStorage.getItem("two-fa-reset") == "true") {
      resetMessage.style.display = "block";
  } else {
      resetMessage.style.display = "none";
  }
}

function deleteUser () {
  let radioButtons = document.getElementsByName("delete-radio");
  let continueButton = document.getElementById("continue-button");

  for (var radio of radioButtons) {
    if (radio.value == 'yes' && radio.checked == true) {
      continueButton.setAttribute("href", "delete-confirmation");
    }
  }
}