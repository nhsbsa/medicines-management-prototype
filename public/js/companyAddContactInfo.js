function storeExistingUserYesOrNo() {
  var radioButtons = document.getElementsByName("existing-user");
  var buttonLink = document.getElementById("continue-button");

  for (var radio of radioButtons) {
    if (radio.checked) {
        localStorage.setItem("existing-user", radio.value);
        if (radio.value == 'yes') {
            buttonLink.href = "add-contact-users-list";
        } else if (radio.value == 'no') {
            buttonLink.href = "add-contact-name";
        }
    }
  }
}

function userAdded() {
  var getPrimaryUser = localStorage.getItem("primary-user");
  if (getPrimaryUser == "true") {
    localStorage.setItem("secondary-user", "true");
  } else {
    localStorage.setItem("primary-user", "true");
  }
}

function displayAddContactMessage() {
  var messageContainer = document.getElementById("message-container");
  var messageText = document.getElementById("not-submitted-message");
  var getPrimaryUser = localStorage.getItem("primary-user");
  var getSecondaryUser = localStorage.getItem("secondary-user");
  var buttonText = document.getElementById("primary-contact-button");
  var clearStorageLink = document.getElementById("clear-storage");

  if (getSecondaryUser == "true") {
    messageContainer.style.display = "none";
    buttonText.style.display = "none";
    clearStorageLink.style.display = "block";
  } else if (getPrimaryUser == "true") {
    messageText.innerHTML = "You have not added a secondary contact";
    buttonText.innerHTML = "Add secondary contact";
    clearStorageLink.style.display = "none";
  } else {
    messageText.innerHTML = "You have not added a primary or secondary contact";
    buttonText.innerHTML = "Add primary contact";
    clearStorageLink.style.display = "none";
  }
}

function displayContacts() {
  var primaryContact = document.getElementsByClassName("primary-user-data");
  var secondaryContact = document.getElementsByClassName("secondary-user-data");
  var getPrimaryUser = localStorage.getItem("primary-user");
  var getSecondaryUser = localStorage.getItem("secondary-user");

  if (getPrimaryUser == "true") {
    for (let i = 0; i < primaryContact.length; i++) {
      primaryContact[i].style.display = "table-row";
    }
  } else {
    for (let i = 0; i < primaryContact.length; i++) {
      primaryContact[i].style.display = "none";
    }
  }

  if (getSecondaryUser == "true") {
    for (let i = 0; i < secondaryContact.length; i++) {
      secondaryContact[i].style.display = "table-row";
    }
  } else {
    for (let i = 0; i < secondaryContact.length; i++) {
      secondaryContact[i].style.display = "none";
    }
  }
}

function clearLocalStorage() {
  localStorage.clear();
}