//change in email
function changeEmail() {
    localStorage.setItem("email-changed", "true");
}

function displayPendingMessage() {
  var pendingTag = document.getElementById("pending-tag");

  if (localStorage.getItem("email-changed") == "true") {
    pendingTag.style.display = "inline-block";
  } else {
    pendingTag.style.display = "none";
  }
}