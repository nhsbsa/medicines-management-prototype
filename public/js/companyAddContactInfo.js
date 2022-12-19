function storeExistingUserYesOrNo() {
  var radioButtons = document.getElementsByName("existing-user");
  var buttonLink = document.getElementById("continue-button");

  for (var radio of radioButtons) {
    if (radio.checked) {
        localStorage.setItem("existing-user", radio.value);
        if (radio.value == 'yes') {
            buttonLink.href = "add-contact-users-list";
            existingUser('true');
        } else if (radio.value == 'no') {
            buttonLink.href = "add-contact-first-name";
            existingUser('false');
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
  var secondaryHeader = document.getElementById("no-secondary-header");
  var getPrimaryUser = localStorage.getItem("primary-user");
  var getSecondaryUser = localStorage.getItem("secondary-user");
  var buttonText = document.getElementById("primary-contact-button");

  if (getSecondaryUser == "true") {
    messageContainer.style.display = "none";
    buttonText.innerHTML = "Add secondary contact";
  } else if (getPrimaryUser == "true") {
    messageText.innerHTML = "No secondary contacts currently exist.";
    buttonText.innerHTML = "Add secondary contact";
    secondaryHeader.style.display = "table";
  } else {
    messageContainer.classList.add("nhsuk-inset-text");
    messageContainer.classList.add("nhsuk-u-margin-top-0");
    messageText.innerHTML = "You have not added a primary or secondary contact.";
    buttonText.innerHTML = "Add primary contact";
  }
}

function displayContacts() {
  var primaryContact = document.getElementsByClassName("primary-user-data");
  var secondaryContact = document.getElementsByClassName("secondary-user-data");
  var getPrimaryUser = localStorage.getItem("primary-user");
  var getSecondaryUser = localStorage.getItem("secondary-user");

  if (getPrimaryUser == "true") {
    for (let i = 0; i < primaryContact.length; i++) {
      primaryContact[i].style.display = "table";
    }
  } else {
    for (let i = 0; i < primaryContact.length; i++) {
      primaryContact[i].style.display = "none";
    }
  }

  if (getSecondaryUser == "true") {
    for (let i = 0; i < secondaryContact.length; i++) {
      secondaryContact[i].style.display = "table";
    }
  } else {
    for (let i = 0; i < secondaryContact.length; i++) {
      secondaryContact[i].style.display = "none";
    }
  }
}

function promoteSecondaryContactYesOrNo() {
  var radioButtons = document.getElementsByName("replace");
  var buttonLink = document.getElementById("continue-button");

  for (var radio of radioButtons) {
    if (radio.checked) {
        if (radio.value == 'yes') {
            buttonLink.href = "promote-secondary-user";
        } else if (radio.value == 'no') {
            buttonLink.href = "add-user/add-contact-existing-user";
        }
    }
  }
}

function lastContact(value) {
  localStorage.setItem("lastContact", value);
}

function removeContactYesOrNo() {
  var radioButtons = document.getElementsByName("delete");
  var buttonLink = document.getElementById("removeButton");

  for (var radio of radioButtons) {
    if (radio.checked) {
        if (radio.value == 'yes') {
            removeContact();
        } else if (radio.value == 'no') {
            buttonLink.href = "view-company-details";
        }
    }
  }
}

function removeContact() {
  var lastContact = localStorage.getItem("lastContact");
  var buttonLink = document.getElementById("removeButton");

  if (lastContact == 'true') {
    buttonLink.href = "replace-last-contact";
  }
}

function existingUser(value) {
  localStorage.setItem("existingUser", value);
}

function displayChangeLinks() {
  var changeLinks = document.getElementsByClassName("hide-existing-user");
  var submitButton = document.getElementById("next");
  if (localStorage.getItem("existingUser") == 'true') {
    for (let i = 0; i < changeLinks.length; i++) {
      changeLinks[i].style.display = "none";
    }
  }

  if (localStorage.getItem("primary-user") == "true") {
    submitButton.innerHTML = "Save as secondary contact";
  }
}