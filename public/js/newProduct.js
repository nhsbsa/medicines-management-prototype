console.log(localStorage);

var getContinueButton = document.getElementsByClassName("nhsuk-button")[0];
var getPackShdDisPrice= localStorage.getItem("pack-should-display-price");
var buttonLink = document.getElementById("continue-button");

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
            if (localStorage.getItem("product-link-upload") == 'link' && getPackShdDisPrice == null) {
            localStorage.setItem("product-link-url", inputLink.value);
            buttonLink.href = "../product-pack/pack-size-strength";
          }
          if (localStorage.getItem("product-link-upload") == 'link' && getPackShdDisPrice != null) {
              localStorage.setItem("product-link-url", inputLink.value);
              buttonLink.href = "product-summary";
           }
         }
      }
   }


   var fileSuccess = document.getElementById("file-success");

   if (fileSuccess) {
      var linkUrl = localStorage.getItem("product-upload-file");
      var linkUrl2 = localStorage.getItem("product-upload-file-2");
      var removeLinkOne = document.getElementById("remove-file-1");
      var removeRowOne = document.getElementById("hide-first-file");
      var removeRowTwo = document.getElementById("hide-second-file");


   if (linkUrl != null) {
      var linkUrlSplit = linkUrl.split("\\");
      var linkUrlFileName = linkUrlSplit[linkUrlSplit.length - 1];
      var fileName = document.getElementById("file-upload-name");
      fileName.innerHTML = linkUrlFileName;
     } else {
      removeRowOne.style.display = "none";
     }

   if (linkUrl2) {
   var linkUrlSplit2 = linkUrl2.split("\\");
   var linkUrlFileName2 = linkUrlSplit2[linkUrlSplit2.length - 1];
   var fileName = document.getElementById("file-upload-name-2");
   fileName.innerHTML = linkUrlFileName2;

   var addLink = document.getElementById("add-link");
   addLink.style.display = "none";
      } else {
   removeRowTwo.style.display = "none";
    }

    removeLinkOne.addEventListener("click", function(e) {
   	// e.target was the clicked element
   	removeLinkOne.setAttribute('href', "product-file-upload-success");
   	removeRowOne.style.display = "none";
   	localStorage.removeItem("product-upload-file");

   	var itemTwo = localStorage.getItem("product-upload-file-2");
   	var hideTable = document.getElementById("hide-table");
    var addAnotherLink = document.getElementById("add-another-link");
    console.log(addAnotherLink);

   	if (itemTwo == null) {
      hideTable.style.display = "none";
      addAnotherLink.style.display = "none";
      buttonLink.style.display = "none";
      addLink.style.display = "block";
      } else {
      addLink.style.display = "none";
      addAnotherLink.style.display = "block";
      document.getElementById("go-to-file-2").setAttribute('href',  "product-file-upload");
      }
   	  e.preventDefault();
   });

   var removeLinkTwo = document.getElementById("remove-file-2");
   var removeRowTwo = document.getElementById("hide-second-file");

    removeLinkTwo.addEventListener("click", function(e) {
   	// e.target was the clicked element
   	removeLinkTwo.setAttribute('href', "product-file-upload-success");
   	removeRowTwo.style.display = "none";
   	localStorage.removeItem("product-upload-file-2");
   	var itemOne = localStorage.getItem("product-upload-file");
   if (itemOne == null) {
   hideTable.style.display = "none";
   addAnotherLink.style.display = "none";
   buttonLink.style.display = "none";
   addLink.style.display = "block";
   } else {
   addLink.style.display = "none";
   addAnotherLink.style.display = "block";
   document.getElementById("go-to-file-2").setAttribute('href',  "product-file-upload-2");
   }
   	e.preventDefault();
   });

  var addAnotherLink = document.getElementById("add-another-link");


   if (linkUrl != null && linkUrl2 == null) {
   document.getElementById("go-to-file-2").setAttribute('href',  "product-file-upload-2");

   } else if (linkUrl == null && linkUrl2 != null) {
     document.getElementById("go-to-file-2").setAttribute('href',  "product-file-upload");
    }

   if (linkUrl == null && linkUrl2 == null) {
   hideTable.style.display = "none";
   addAnotherLink.style.display = "none";
   buttonLink.style.display = "none";
   addLink.style.display = "block";
     } else if (linkUrl && linkUrl2) {
   addAnotherLink.style.display = "none";
    }

    function uploadSpcFiles() {
       if (linkUrl && getPackShdDisPrice || linkUrl2 && getPackShdDisPrice) {
          buttonLink.href = "product-summary";
       }
    }

   }

   var packTy = document.querySelector("#pack-type");

   if (packTy) {

   var continueButton = document.getElementById("continue-button");
   var getPackSize = localStorage.getItem("pack-size");

   var packSi = document.querySelector("#pack-size");
   if (getPackSize != null) {
   packSi.defaultValue = getPackSize;
   }

   var getPackType = localStorage.getItem("pack-type");

   if (getPackType != null) {
   packTy.value = getPackType;
   }

   console.log(continueButton);

   function storeSizeAndStrength(){
        var packSize = document.getElementById("pack-size");
        localStorage.setItem("pack-size", packSize.value);

        var packType = document.getElementById("pack-type");
        localStorage.setItem("pack-type", packType.value);

        if (packType.value == "other") {
            continueButton.setAttribute('href', "pack-strength-other");
           }
        if (packSi && packSize && getPackShdDisPrice) {
              continueButton.href = "../product/product-summary";
           }
       }
  }

