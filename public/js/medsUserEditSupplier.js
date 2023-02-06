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
  var resetLink = document.getElementById("reset-link");
  var setUpMessage = document.getElementById("set-up-message");

  if (localStorage.getItem("two-fa-reset") == "true") {
      resetMessage.classList.add("nhsuk-tag--blue");
      resetMessage.innerHTML = "Requires set up";
      setUpMessage.style.display = "block";
      resetLink.style.display = "none";
  } else {
      resetMessage.classList.add("nhsuk-tag--green");
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