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
  if (getProductName != null) {
    prodName.defaultValue = getProductName;
  }
  if (getProductName != null && getPackShdDisPrice != null) {
    getContinueButton.href = "product-summary";
  }
}