console.log(localStorage);

var getContinueButton = document.getElementsByClassName("nhsuk-button")[0];
var getPackShdDisPrice= localStorage.getItem("pack-should-display-price");

function storeDate() {
     var inputDay = document.getElementById("example-day");
     var inputMonth = document.getElementById("example-month");
     var inputYear = document.getElementById("example-year");
     localStorage.setItem("effective-day", inputDay.value);
     localStorage.setItem("effective-month", inputMonth.value);
     localStorage.setItem("effective-year", inputYear.value);
    }

var getEffectiveDay = localStorage.getItem("effective-day");
var getEffectiveMonth = localStorage.getItem("effective-month");
var getEffectiveYear = localStorage.getItem("effective-year");

var eDay = document.querySelector("#example-day");
var eMonth = document.querySelector("#example-month");
var eYear = document.querySelector("#example-year");

if (eDay != null && eMonth != null && eYear != null) {

  if (getEffectiveDay != null) {
    eDay.defaultValue = getEffectiveDay;
    console.log(getContinueButton);
  }

  if (getEffectiveMonth != null) {
    eMonth.defaultValue = getEffectiveMonth;
  }

  if (getEffectiveYear != null) {
    eYear.defaultValue = getEffectiveYear;
  }

  if ((getEffectiveDay != null && getEffectiveMonth != null && getEffectiveYear != null) && getPackShdDisPrice != null) {
    getContinueButton.href = "product-summary";
  }
}

function storeName(){
     var productName = document.getElementById("product-name");
     localStorage.setItem("product-name", productName.value);
    }

var getProductName = localStorage.getItem("product-name");
var prodName = document.querySelector("#product-name");

if (prodName != null) {
console.log(prodName);
  if (getProductName != null) {
    prodName.defaultValue = getProductName;
  }
  if (getProductName != null && getPackShdDisPrice != null) {
    getContinueButton.href = "product-summary";
  }
}

var radioButtons = document.getElementsByName("data-spc");

if (radioButtons) {
var getProductSpc = localStorage.getItem("product-spc");
var buttonLink = document.getElementById("continue-button");
  if (getProductSpc != null) {
    for (var radio of radioButtons) {
      if (getProductSpc === radio.value) {
     radio.checked = true;
            }
      if (radio.value == 'yes' && getPackShdDisPrice != null) {
          buttonLink.href = "product-summary";
            }
          }
        }
      };

function storeSpcYesOrNo() {
  var radioButtons = document.getElementsByName("data-spc");
  var buttonLink = document.getElementById("continue-button");
  console.log(buttonLink);

  for (var radio of radioButtons) {
      if (radio.checked) {
          localStorage.setItem("product-spc", radio.value);
         if (radio.value == 'yes' && getPackShdDisPrice == null) {
          buttonLink.href = "product-spc-upload-choice";
          } else if (radio.value == 'no') {
          buttonLink.href = "product-no-spc";
          }
        }
     }
  }

  var radioButtons = document.getElementsByName("link");

  if (radioButtons != null) {
  var getProductLink = localStorage.getItem("product-link-upload");
  var inputLink = document.getElementById("conditional-contact-1");
  var inputLinkUrl = document.getElementById("link-url");
      if (getProductLink != null) {
            for (var radio of radioButtons) {
                  if (getProductLink == radio.value) {
                          radio.checked = true;
                  if (radio.value == 'link') {
                         inputLink.classList.remove("nhsuk-radios__conditional--hidden");
                         inputLinkUrl.defaultValue = localStorage.getItem("product-link-url")
                      }
                  }
               }
           }
       };

  function storeLinkOrUpload() {
    var radioButtons = document.getElementsByName("link");
    var buttonLink = document.getElementById("continue-button");
    var inputLink = document.getElementById("link-url");

    for (var radio of radioButtons) {
        if (radio.checked) {
            localStorage.setItem("product-link-upload", radio.value);
           if (localStorage.getItem("product-link-upload") == 'upload') {
            buttonLink.href = "product-file-upload";
            }
            if (localStorage.getItem("product-link-upload") == 'link') {
            localStorage.setItem("product-link-url", inputLink.value);
            buttonLink.href = "../product-pack/pack-size-strength";
          }
          }
       }
    }
