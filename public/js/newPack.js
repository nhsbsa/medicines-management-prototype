console.log(localStorage);

var summaryPage = localStorage.getItem("summary-page");
var getPackShdDisPrice = localStorage.getItem("pack-should-display-price");
var getPackTwoShdDisPrice = localStorage.getItem("pack-2-should-display-price");
var getProductHospUsage = localStorage.getItem("product-hospital-only");
var getProductLegalCat = localStorage.getItem("product-legal-category");
var getProductExtraPack = localStorage.getItem("product-extra-pack");
var getPackSize = localStorage.getItem("pack-size");

var extraPackSize = document.getElementById("extra-pack-size");
var getExtraPackShdDisPrice = localStorage.getItem(
    "pack-2-should-display-price");
var getContinueButton = document.getElementsByClassName("nhsuk-button")[0];
var buttonLink = document.getElementById("continue-button");
var continueButton = document.getElementById("continue-button");
var heading = document.getElementById("heading");

// effective date

function storeDate() {
  var inputDay = document.getElementById("example-day");
  var inputMonth = document.getElementById("example-month");
  var inputYear = document.getElementById("example-year");
  localStorage.setItem("pack-effective-day", inputDay.value);
  localStorage.setItem("pack-effective-month", inputMonth.value);
  localStorage.setItem("pack-effective-year", inputYear.value);
}

var getEffectiveDay = localStorage.getItem("pack-effective-day");
var getEffectiveMonth = localStorage.getItem("pack-effective-month");
var getEffectiveYear = localStorage.getItem("pack-effective-year");

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

  if ((getEffectiveDay != null && getEffectiveMonth != null && getEffectiveYear
      != null) && summaryPage != null) {
    getContinueButton.href = "../summary";
  }
}

// product name

function storeName() {
  var productName = document.getElementById("product-name");
  localStorage.setItem("associated-product-name", productName.value);
}

var getProductName = localStorage.getItem("product-name");
var prodName = document.querySelector("#product-name");

if (prodName != null) {
  if (getProductName != null) {
    prodName.value = getProductName;
  }
  if (getProductName != null && summaryPage != null) {
    getContinueButton.href = "../summary";
  }
}

// has spc / Data Sheet?

var radioButtons = document.getElementsByName("data-spc");

if (radioButtons) {
  var getProductSpc = localStorage.getItem("product-spc");
  var buttonLink = document.getElementById("continue-button");
  if (getProductSpc != null) {
    for (var radio of radioButtons) {
      if (getProductSpc === radio.value) {
        radio.checked = true;
      }
      if (radio.value == 'yes' && summaryPage != null) {
        buttonLink.href = "../summary";
      }
    }
  }
}
;

function storeSpcYesOrNo() {
  var radioButtons = document.getElementsByName("data-spc");
  var buttonLink = document.getElementById("continue-button");

  for (var radio of radioButtons) {
    if (radio.checked) {
      localStorage.setItem("product-spc", radio.value);
      if (radio.value == 'yes' && summaryPage == null) {
        buttonLink.href = "pack-file-upload";
      } else if (radio.value == 'no') {
        buttonLink.href = "pack-no-spc";
      }
    }
  }
}

// SmPC as link or upload?

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
}
;

function storeLinkOrUpload() {
  var radioButtons = document.getElementsByName("link");
  var buttonLink = document.getElementById("continue-button");
  var inputLink = document.getElementById("link-url");

  for (var radio of radioButtons) {
    if (radio.checked) {
      localStorage.setItem("product-link-upload", radio.value);
      if (localStorage.getItem("product-link-upload") == 'upload') {
        buttonLink.href = "pack-file-upload";
      }
      if (localStorage.getItem("product-link-upload") == 'link' && summaryPage
          == null) {
        localStorage.setItem("product-link-url", inputLink.value);
        buttonLink.href = "pack-size-and-type";
      }
      if (localStorage.getItem("product-link-upload") == 'link' && summaryPage
          != null) {
        localStorage.setItem("product-link-url", inputLink.value);
        buttonLink.href = "../summary";
      }
    }
  }
}

// SmPC as file upload - upload pages (file-1 and file-2)

var linkUrl = localStorage.getItem("product-link-url");
var uploadFile = document.getElementById("file-upload-1");
var uploadFile2 = document.getElementById("file-upload-2");
var getUploadFile = localStorage.getItem("product-upload-file");
var getUploadFile2 = localStorage.getItem("product-upload-file-2");

function storeFile() {
  localStorage.setItem("product-upload-file", uploadFile.value);
}

function storeFile2() {
  localStorage.setItem("product-upload-file-2", uploadFile2.value);
}

// SmPC as file upload - uploads as a table page

var fileSuccess = document.getElementById("file-success");

if (fileSuccess) {
  var linkUrl = localStorage.getItem("product-link-url");
  var uploadFile = document.getElementById("file-upload-1");
  var uploadFile2 = document.getElementById("file-upload-2");
  var getUploadFile = localStorage.getItem("product-upload-file");
  var getUploadFile2 = localStorage.getItem("product-upload-file-2");

  var removeFileOne = document.getElementById("remove-file-1");
  var removeRowOne = document.getElementById("hide-first-file");
  var removeRowTwo = document.getElementById("hide-second-file");
  var addLink = document.getElementById("add-link");
  var addAnotherLink = document.getElementById("add-another-link");

  if (getUploadFile && getUploadFile2 == null) {
    var fileUploadSplit = getUploadFile.split("\\");
    var fileUploadFileName = fileUploadSplit[fileUploadSplit.length - 1];
    var fileName = document.getElementById("file-upload-name");
    fileName.innerHTML =
    '<span class="nhsuk-table-responsive__heading">File name </span>'
    +
    '<span class="word-break-file">' + fileUploadFileName + '</span>';
    removeRowTwo.style.display = "none";
  } else if (getUploadFile2 && getUploadFile == null) {
    var fileUploadSplit2 = getUploadFile2.split("\\");
    var fileUploadFileName2 = fileUploadSplit2[fileUploadSplit2.length - 1];
    var fileName2 = document.getElementById("file-upload-name-2");
    fileName2.innerHTML =
    '<span class="nhsuk-table-responsive__heading">File name </span>'
                                +
    '<span class="word-break-file">' + fileUploadFileName2 + '</span>';
    removeRowOne.style.display = "none";
  } else if (getUploadFile2 && getUploadFile) {
    var fileUploadSplit = getUploadFile.split("\\");
    var fileUploadFileName = fileUploadSplit[fileUploadSplit.length - 1];
    var fileName = document.getElementById("file-upload-name");
    fileName.innerHTML =
    '<span class="nhsuk-table-responsive__heading">File name </span>'
    +
    '<span class="word-break-file">' + fileUploadFileName + '</span>';

    var fileUploadSplit2 = getUploadFile2.split("\\");
    var fileUploadFileName2 = fileUploadSplit2[fileUploadSplit2.length - 1];
    var fileName2 = document.getElementById("file-upload-name-2");
    fileName2.innerHTML =
    '<span class="nhsuk-table-responsive__heading">File name </span>'
    +
    '<span class="word-break-file">' + fileUploadFileName2 + '</span>';

    addAnotherLink.style.display = "none";
  }

  removeFileOne.addEventListener("click", function (e) {
    // e.target was the clicked element
    removeFileOne.setAttribute('href', "pack-file-upload-success");
    removeRowOne.style.display = "none";
    localStorage.removeItem("product-upload-file");

    var itemTwo = localStorage.getItem("product-upload-file-2");
    var hideTable = document.getElementById("hide-table");

    if (itemTwo == null) {
      hideTable.style.display = "none";
      addAnotherLink.style.display = "none";
      buttonLink.style.display = "none";
      addLink.style.display = "block";
    } else {
      addLink.style.display = "none";
      addAnotherLink.style.display = "block";
      document.getElementById("go-to-file-2").setAttribute('href',
          "product-file-upload");
    }
    e.preventDefault();
  });

  var removeFileTwo = document.getElementById("remove-file-2");
  var removeRowTwo = document.getElementById("hide-second-file");

  removeFileTwo.addEventListener("click", function (e) {
    // e.target was the clicked element
    removeFileTwo.setAttribute('href', "pack-file-upload-success");
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
      document.getElementById("go-to-file-2").setAttribute('href',
          "pack-file-upload-2");
    }
    e.preventDefault();
  });

  var addAnotherLink = document.getElementById("add-another-link");

  if (getUploadFile != null && getUploadFile2 == null) {
    document.getElementById("go-to-file-2").setAttribute('href',
        "pack-file-upload-2");

  } else if (getUploadFile == null && getUploadFile2 != null) {
    document.getElementById("go-to-file-2").setAttribute('href',
        "pack-file-upload");
  }

  if (getUploadFile == null && getUploadFile2 == null) {
    hideTable.style.display = "none";
    addAnotherLink.style.display = "none";
    buttonLink.style.display = "none";
    addLink.style.display = "block";
  } else if (uploadFile && uploadFile2) {
    addAnotherLink.style.display = "none";
  }

  function uploadSpcFiles() {
    localStorage.removeItem("product-link-url");
    if (getUploadFile && summaryPage || getUploadFile2 && summaryPage) {
      buttonLink.href = "../summary";
    }
  }
}

// pack size and type - type is not other (first pack)

var packTy = document.querySelector("#pack-type");

if (packTy) {

  var getPackSize = localStorage.getItem("pack-size");

  var packSi = document.querySelector("#pack-size");
  if (getPackSize != null) {
    packSi.defaultValue = getPackSize;
  }

  var getPackType = localStorage.getItem("pack-type");

  if (getPackType != null) {
    packTy.value = getPackType;
  }
  var packType = document.getElementById("pack-type");
  console.log(packType.value)

  function storeSizeAndStrength() {
    var packSize = document.getElementById("pack-size");
    localStorage.setItem("pack-size", packSize.value);

    var packType = document.getElementById("pack-type");
    localStorage.setItem("pack-type", packType.value);

    let packTypeStorage = localStorage.getItem("pack-type");

    if (packTypeStorage == "other") {
        continueButton.setAttribute('href', "pack-type-other");
        } else if (packTypeStorage == "ampoule" || packTypeStorage == "bottle" || packTypeStorage == "dose" || packTypeStorage == "vial") {
           continueButton.setAttribute('href', "pack-strength-further");
        } else if (packTypeStorage != "ampoule" && packTypeStorage != "bottle" && packTypeStorage != "dose" && packTypeStorage != "vial" && packTypeStorage != "other") {
           localStorage.removeItem("pack-type-further");
           continueButton.href = "pack-subpack"
        }
    if (packTypeStorage != "ampoule" && packTypeStorage != "bottle" && packTypeStorage != "dose" && packTypeStorage != "vial" && packTypeStorage != "other" && summaryPage) {
       continueButton.href = "../summary";
    }
  }
}

// pack type is other (first pack)

var packTypeOther = document.querySelector("#pack-type-other");

if (packTypeOther) {
  var getPackTypeOther = localStorage.getItem("pack-type-other");

  if (getPackTypeOther != null) {
    packTypeOther.value = getPackTypeOther;
  }

  function storePackTypeOther() {
    localStorage.setItem("pack-type-other", packTypeOther.value);

    if (summaryPage) {
        continueButton.href = "../summary";
        } else {
        continueButton.href = "pack-subpack";
     }
  }

  if (getPackSize != null) {
    heading.innerHTML = 'Detail the UOM for the ' + getPackSize + ' pack';
  }

}

// pack type needs further detail (first pack)

var packTypeFurther = document.querySelector("#pack-type-further");

if (packTypeFurther) {
  var getPackTypeFurther = localStorage.getItem("pack-type-further");

  if (getPackTypeFurther != null) {
    packTypeFurther.value = getPackTypeFurther;
  }

  function storePackTypeFurther() {
    localStorage.setItem("pack-type-further", packTypeFurther.value);

    if (summaryPage) {
      continueButton.href = "../summary";
    } else {
      continueButton.href = "pack-subpack";
    }
  }

  if (getPackSize != null) {
    heading.innerHTML = 'Detail the full UOM for the ' + getPackSize + ' pack';
  }
}

// should display subpack info?

var subpackRadioButtons = document.getElementsByName("data-subpack");

if (subpackRadioButtons.length != 0) {
  var getSubpack = localStorage.getItem("pack-subpack");

  if (getPackSize != null) {
    heading.innerHTML = 'Is there any subpack information for the '
        + getPackSize + ' pack?';
  }

  if (getSubpack != null) {
    for (var radio of subpackRadioButtons) {
      if (getSubpack === radio.value) {
        radio.checked = true;
      }
    }
  }
  ;

  function storeSubpackYesOrNo() {

    for (var radio of subpackRadioButtons) {
      if (radio.checked) {
        localStorage.setItem("pack-subpack", radio.value);
        if (radio.value == 'yes') {
          buttonLink.href = "pack-subpack-extra";
        } else if (radio.value == 'no' && summaryPage) {
          continueButton.href = "../summary";
        }
      }
    }
  };

}

// subpack info (first pack)

var packSubEx = document.querySelector("#subpack-extra");

if (packSubEx) {

  function storeNumberOfSubpacks() {
    var packSubpackExtra = document.getElementById("subpack-extra");
    localStorage.setItem("pack-subpack-extra", packSubpackExtra.value);
  }

  var getPackSubpackExtra = localStorage.getItem("pack-subpack-extra");

  if (getPackSubpackExtra != null) {
    packSubEx.defaultValue = getPackSubpackExtra;
  }

  if (getPackSize != null) {
    heading.innerHTML = 'How many subpacks are in the ' + getPackSize
        + ' pack?';
  }
}

// subpack confirmation page, checking if summary page

function storeSubpackConfirmation() {
    if (summaryPage) {
      continueButton.href = "../summary";
    }
  }

// add Gtin (first pack)

var packGtin = document.getElementById("pack-gtin");

if (packGtin) {

  function storeGtin() {

    var packGtin = document.getElementById("pack-gtin");
    localStorage.setItem("pack-gtin", packGtin.value);

    var packGtin2 = document.getElementById("pack-gtin-2");
    localStorage.setItem("pack-gtin-2", packGtin2.value);
    if (packGtin2.value == "") {
      localStorage.removeItem("pack-gtin-2");
    }

    var packGtin3 = document.getElementById("pack-gtin-3");
    localStorage.setItem("pack-gtin-3", packGtin3.value);
    if (packGtin3.value == "") {
      localStorage.removeItem("pack-gtin-3");
    }

    if (summaryPage) {
      buttonLink.href = "../summary";
    }
  }

  var getPackGtin = localStorage.getItem("pack-gtin");

  var packGt = document.querySelector("#pack-gtin");
  if (getPackGtin != null) {
    packGt.defaultValue = getPackGtin;
  }

  var getPackGtin2 = localStorage.getItem("pack-gtin-2");

  var packGt2 = document.querySelector("#pack-gtin-2");
  if (getPackGtin2 != null) {
    packGt2.defaultValue = getPackGtin2;
  }

  var getPackGtin3 = localStorage.getItem("pack-gtin-3");

  var packGt3 = document.querySelector("#pack-gtin-3");
  if (getPackGtin3 != null) {
    packGt3.defaultValue = getPackGtin3;
  }

  if (getPackSize != null) {
    heading.innerHTML = 'What is the GTIN code of the ' + getPackSize
        + ' pack?';
  }

}

// should display artwork? (first pack)

var radioArtworkButtons = document.getElementsByName("display-artwork");
console.log('radioArtworkButtons', radioArtworkButtons);

if (radioArtworkButtons.length != 0) {

  var getPackShdDisArtwork = localStorage.getItem(
      "pack-should-display-artwork");

  if (getPackSize != null) {
    if (heading) {
    heading.innerHTML = 'Do you have images of the packaging to upload for the '
        + getPackSize + ' pack?';
      }
  }

  if (getPackShdDisArtwork != null) {
    for (var radio of radioArtworkButtons) {
      if (getPackShdDisArtwork === radio.value) {
        radio.checked = true;
      }
    }
  }
  ;

  function storeArtworkYesOrNo() {
  let anyArtwork = localStorage.getItem("pack-upload-artwork");
    for (var radio of radioArtworkButtons) {
      if (radio.checked) {
        localStorage.setItem("pack-should-display-artwork", radio.value);
        if (radio.value == 'yes' && !anyArtwork) {
          buttonLink.href = "pack-artwork";
        } else if (radio.value == 'no' && summaryPage) {
          buttonLink.href = "../summary";
        }
      }
    }
  }
}

// upload artworks 1-4 (first pack)

var uploadArtwork = document.getElementById("file-upload-1");

if (uploadArtwork) {
  function storeArtwork() {
    localStorage.setItem("pack-upload-artwork", uploadArtwork.value);
  }

  var getUploadArtwork = localStorage.getItem("pack-upload-artwork");

  var artworkFileUp = document.querySelector("#file-upload-1").value;
  if (getUploadArtwork != null) {
    artworkFileUp = getUploadArtwork;
  }

  if (getPackSize != null) {
    heading.innerHTML = 'Upload images of packaging for the ' + getPackSize
        + ' pack';
  }
}

var uploadArtwork2 = document.getElementById("file-upload-2");

if (uploadArtwork2) {
  function storeArtwork2() {
    localStorage.setItem("pack-upload-artwork-2", uploadArtwork2.value);
  }

  var getUploadArtwork2 = localStorage.getItem("pack-upload-artwork-2");

  var artworkFileUp2 = document.querySelector("#file-upload-2").value;
  if (getUploadArtwork2 != null) {
    artworkFileUp2 = getUploadArtwork2;
  }

  if (getPackSize != null) {
    heading.innerHTML = 'Upload images of packaging for the ' + getPackSize
        + ' pack';
  }
}

var uploadArtwork3 = document.getElementById("file-upload-3");

if (uploadArtwork3) {
  function storeArtwork3() {
    localStorage.setItem("pack-upload-artwork-3", uploadArtwork3.value);
  }

  var getUploadArtwork3 = localStorage.getItem("pack-upload-artwork-3");

  var artworkFileUp3 = document.querySelector("#file-upload-3").value;
  if (getUploadArtwork3 != null) {
    artworkFileUp3 = getUploadArtwork3;
  }

  if (getPackSize != null) {
    heading.innerHTML = 'Upload images of packaging for the ' + getPackSize
        + ' pack';
  }
}

var uploadArtwork4 = document.getElementById("file-upload-4");

if (uploadArtwork4) {
  function storeArtwork4() {
    localStorage.setItem("pack-upload-artwork-4", uploadArtwork4.value);
  }

  var getUploadArtwork4 = localStorage.getItem("pack-upload-artwork-4");

  var artworkFileUp4 = document.querySelector("#file-upload-4").value;
  if (getUploadArtwork4 != null) {
    artworkFileUp4 = getUploadArtwork4;
  }

  if (getPackSize != null) {
    heading.innerHTML = 'Upload images of packaging for the ' + getPackSize
        + ' pack';
  }
}

var artworkLimit = document.getElementById("artwork-limit");

// upload success (first pack)

if (artworkLimit) {
  var artworkOne = localStorage.getItem("pack-upload-artwork");
  var artworkTwo = localStorage.getItem("pack-upload-artwork-2");
  var artworkThree = localStorage.getItem("pack-upload-artwork-3");
  var artworkFour = localStorage.getItem("pack-upload-artwork-4");

  var removeLinkOne = document.getElementById("remove-file-1");
  var removeLinkTwo = document.getElementById("remove-file-2");
  var removeLinkThree = document.getElementById("remove-file-3");
  var removeLinkFour = document.getElementById("remove-file-4");

  var removeRowOne = document.getElementById("hide-first-file");
  var removeRowTwo = document.getElementById("hide-second-file");
  var removeRowThree = document.getElementById("hide-third-file");
  var removeRowFour = document.getElementById("hide-fourth-file");

  if (artworkOne != null) {
    var artworkOneSplit = artworkOne.split("\\");
    var artworkOneFileName = artworkOneSplit[artworkOneSplit.length - 1];
    console.log(artworkOneFileName);
    var fileName = document.getElementById("file-upload-name");
    fileName.innerHTML =
    '<span class="nhsuk-table-responsive__heading">File name </span>'
                                    +
    '<span class="word-break-file">' + artworkOneFileName + '</span>';

  } else {
    removeRowOne.style.display = "none";
  }

  if (artworkTwo != null) {
    var artworkTwoSplit = artworkTwo.split("\\");
    var artworkTwoFileName = artworkTwoSplit[artworkTwoSplit.length - 1];
    var fileName = document.getElementById("file-upload-name-2");
    fileName.innerHTML =
    '<span class="nhsuk-table-responsive__heading">File name </span>'
    +
    '<span class="word-break-file">' + artworkTwoFileName + '</span>';
  } else {
    removeRowTwo.style.display = "none";
  }

  if (artworkThree != null) {
    var artworkThreeSplit = artworkThree.split("\\");
    var artworkThreeFileName = artworkThreeSplit[artworkThreeSplit.length - 1];
    var fileName = document.getElementById("file-upload-name-3");
    fileName.innerHTML =
    '<span class="nhsuk-table-responsive__heading">File name </span>'
    +
    '<span class="word-break-file">' + artworkThreeFileName + '</span>';
  } else {
    removeRowThree.style.display = "none";
  }

  if (artworkFour != null) {
    var artworkFourSplit = artworkFour.split("\\");
    var artworkFourFileName = artworkFourSplit[artworkFourSplit.length - 1];
    var fileName = document.getElementById("file-upload-name-4");
    fileName.innerHTML =
    '<span class="nhsuk-table-responsive__heading">File name </span>'
    +
    '<span class="word-break-file">' + artworkFourFileName + '</span>';

    var addLink = document.getElementById("add-link");
    addLink.style.display = "none";

  } else {
    removeRowFour.style.display = "none";
  }

  removeLinkOne.addEventListener("click", function (e) {
    // e.target was the clicked element
    removeLinkOne.setAttribute('href', "pack-artwork-upload-success");
    removeRowOne.style.display = "none";
    localStorage.removeItem("pack-upload-artwork");
    var itemTwo = localStorage.getItem("pack-upload-artwork-2");
    var itemThree = localStorage.getItem("pack-upload-artwork-3");
    var itemFour = localStorage.getItem("pack-upload-artwork-4");

    if (itemTwo == null && itemThree == null && itemFour == null) {
      document.getElementById("hide-table").style.display = "none";
      document.getElementById("add-another-link").style.display = "none";
      document.getElementById("continue-button").style.display = "none";
      document.getElementById("add-link").style.display = "block";
    } else {
      document.getElementById("add-link").style.display = "none";
      document.getElementById("add-another-link").style.display = "block";
      document.getElementById("go-to-file-2").setAttribute('href',
          "pack-artwork");
    }
    e.preventDefault();

  });

  removeLinkTwo.addEventListener("click", function (e) {
    // e.target was the clicked element
    removeLinkTwo.setAttribute('href', "pack-artwork-upload-success");
    removeRowTwo.style.display = "none";
    localStorage.removeItem("pack-upload-artwork-2");
    var itemOne = localStorage.getItem("pack-upload-artwork");
    var itemThree = localStorage.getItem("pack-upload-artwork-3");
    var itemFour = localStorage.getItem("pack-upload-artwork-4");
    if (itemOne == null && itemThree == null && itemFour == null) {
      document.getElementById("hide-table").style.display = "none";
      document.getElementById("add-another-link").style.display = "none";
      document.getElementById("continue-button").style.display = "none";
      document.getElementById("add-link").style.display = "block";
    } else {
      document.getElementById("add-link").style.display = "none";
      document.getElementById("add-another-link").style.display = "block";
      document.getElementById("go-to-file-2").setAttribute('href',
          "pack-artwork-2");
    }
    e.preventDefault();
  });

  removeLinkThree.addEventListener("click", function (e) {
    // e.target was the clicked element
    removeLinkThree.setAttribute('href', "pack-artwork-upload-success");
    removeRowThree.style.display = "none";
    localStorage.removeItem("pack-upload-artwork-3");
    var itemOne = localStorage.getItem("pack-upload-artwork");
    var itemTwo = localStorage.getItem("pack-upload-artwork-2");
    var itemFour = localStorage.getItem("pack-upload-artwork-4");
    if (itemOne == null && itemTwo == null && itemFour == null) {
      document.getElementById("hide-table").style.display = "none";
      document.getElementById("add-another-link").style.display = "none";
      document.getElementById("continue-button").style.display = "none";
      document.getElementById("add-link").style.display = "block";
    } else {
      document.getElementById("add-link").style.display = "none";
      document.getElementById("add-another-link").style.display = "block";
      document.getElementById("go-to-file-2").setAttribute('href',
          "pack-artwork-3");
    }
    e.preventDefault();
  });

  removeLinkFour.addEventListener("click", function (e) {
    // e.target was the clicked element
    removeLinkFour.setAttribute('href', "pack-artwork-upload-success");
    removeRowFour.style.display = "none";
    localStorage.removeItem("pack-upload-artwork-4");
    var itemOne = localStorage.getItem("pack-upload-artwork");
    var itemTwo = localStorage.getItem("pack-upload-artwork-2");
    var itemThree = localStorage.getItem("pack-upload-artwork-3");
    if (itemOne == null && itemTwo == null && itemThree == null) {
      document.getElementById("hide-table").style.display = "none";
      document.getElementById("add-another-link").style.display = "none";
      document.getElementById("continue-button").style.display = "none";
      document.getElementById("add-link").style.display = "block";
    } else {
      document.getElementById("add-link").style.display = "none";
      document.getElementById("add-another-link").style.display = "block";
      document.getElementById("go-to-file-2").setAttribute('href',
          "pack-artwork-4");
    }
    e.preventDefault();
  });

  if (artworkOne != null && artworkTwo == null && artworkThree == null
      && artworkFour == null) {
    document.getElementById("go-to-file-2").setAttribute('href',
        "pack-artwork-2");
  } else if (artworkOne == null && artworkTwo != null && artworkThree == null
      && artworkFour == null) {
    document.getElementById("go-to-file-2").setAttribute('href',
        "pack-artwork");
  } else if (artworkOne != null && artworkTwo != null && artworkThree == null
      && artworkFour == null) {
    document.getElementById("go-to-file-2").setAttribute('href',
        "pack-artwork-3");
  } else if (artworkOne != null && artworkTwo != null && artworkThree != null
      && artworkFour == null) {
    document.getElementById("go-to-file-2").setAttribute('href',
        "pack-artwork-4");
  } else if (artworkOne != null && artworkTwo != null && artworkThree != null
      && artworkFour != null) {
    document.getElementById("add-another-link").style.display = "none";
  } else if (artworkOne == null && artworkTwo == null && artworkThree == null
      && artworkFour == null) {
    document.getElementById("hide-table").style.display = "none";
    document.getElementById("add-another-link").style.display = "none";
    document.getElementById("continue-button").style.display = "none";
    document.getElementById("add-link").style.display = "block";
  }

  function uploadArtworkFiles() {
    if (artworkOne && summaryPage || artworkTwo && summaryPage || artworkThree
        && summaryPage || artworkFour && summaryPage) {
      buttonLink.href = "../summary";
    }
  }
}

// should display price (first pack)

var radioShouldDisplayPriceButtons = document.getElementsByName(
    "display-price");

if (radioShouldDisplayPriceButtons.length != 0) {

  if (getPackSize != null) {
    heading.innerHTML = 'Do you want to display a price for the ' + getPackSize
        + ' pack?';
  }

  if (getPackShdDisPrice != null) {
    for (var radio of radioShouldDisplayPriceButtons) {
      if (getPackShdDisPrice === radio.value) {
        radio.checked = true;
      }
    }
  }
  ;

  function storeShouldDisplayPrice() {

    for (var radio of radioShouldDisplayPriceButtons) {
      if (radio.checked) {
        localStorage.setItem("pack-should-display-price", radio.value);
        if (radio.value == 'yes') {
          buttonLink.href = "pack-price";
        }
      }
    }
  }
}

// product price (first pack)

var prodPrice = document.getElementById("product-price");

if (prodPrice) {

  function storePrice() {
    localStorage.setItem("product-price", prodPrice.value);
  }

  var getProdPrice = localStorage.getItem("product-price");

  if (getProdPrice != null) {
    prodPrice.defaultValue = getProdPrice;
  }

  var getPrice = localStorage.getItem("pack-should-display-price");

  if (getPackSize != null) {
    heading.innerHTML = 'What is the price of the ' + getPackSize + ' pack?';
  } else {

  }
}

// price confirmation

localStorage.removeItem("product-price-confirm"); // removing localStorage as want the user to select every time they land on page

var productPrice = localStorage.getItem("product-price");

var formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

var penceToPound = productPrice / 100;
var poundVersion = formatter.format(penceToPound);

var priceAmountHint = document.getElementById("price-amount-hint");

if (priceAmountHint) {
  priceAmountHint.innerHTML = 'The price you have entered is ' + productPrice
      + ' pence or ' + poundVersion + '.'
}

var getConfPrice = localStorage.getItem("product-price-confirm");

var radioConfPriceButtons = document.getElementsByName("data-price");

if (getConfPrice != null) {
  for (var radio of radioConfPriceButtons) {
    if (getConfPrice === radio.value) {
      radio.checked = true;
    }
  }
}

function storeCorrectPriceYesOrNo() {
  var radioButtons = document.getElementsByName("data-price");
  var buttonLink = document.getElementById("continue-button");

  for (var radio of radioButtons) {
    if (radio.checked) {
      localStorage.setItem("product-price-confirm", radio.value);
      if (radio.value == 'no') {
        buttonLink.href = "pack-price";
      } else if (radio.value == 'yes' && summaryPage) {
        buttonLink.href = "../summary";
      }
    }
  }
}

// legal category

var radioLegalButtons = document.getElementsByName("data-legal-cat");

if (radioLegalButtons.length != 0) {

  if (getPackSize != null) {
    heading.innerHTML = 'What is the legal category of the ' + getPackSize
        + ' pack?';
  }

  if (getProductLegalCat != null) {
    for (var radio of radioLegalButtons) {
      if (getProductLegalCat === radio.value) {
        radio.checked = true;
      }
    }
  }
}
;

function storeLegalCategory() {
  for (var radio of radioLegalButtons) {
    if (radio.checked) {
      localStorage.setItem("product-legal-category", radio.value);
    }
    if (summaryPage) {
      buttonLink.href = "../summary";
    }
  }
}

// hospital yes/no extra pack

var radioUsageButtons = document.getElementsByName("data-usage");
var getProductHospUsage = localStorage.getItem("product-hospital-only");

if (radioUsageButtons.length != 0) {

  if (getPackSize != null) {
    heading.innerHTML = 'Is this ' + getPackSize
        + ' pack to be used in hospitals only';
  }

  if (getProductHospUsage != null) {
    for (var radio of radioUsageButtons) {
      if (getProductHospUsage === radio.value) {
        radio.checked = true;
      }
    }
  }
  ;

  function storeUsage() {

    for (var radio of radioUsageButtons) {
      if (radio.checked) {
        localStorage.setItem("product-hospital-only", radio.value);
      }
      if (summaryPage) {
        buttonLink.href = "../summary";
      }
    }
  }
}

function store() {
  var radioButtons = document.getElementsByName("data-extra-pack");
  var buttonLink = document.getElementById("continue-button");

  for (var radio of radioButtons) {
    if (radio.checked) {
      localStorage.setItem("product-extra-pack", radio.value);
      if (radio.value == 'yes') {
        buttonLink.href = "extra-pack/pack-size-2";
      }
    }
  }
}

// pack size (second pack)

var getExtraPackSize = localStorage.getItem("pack-2-size");

if (extraPackSize) {
  function storeExtraPackSize() {
    localStorage.setItem("pack-2-size", extraPackSize.value);
    if (summaryPage && getExtraPackShdDisPrice) {
      buttonLink.href = "../summary";
    }
  }

  var exPackSi = document.querySelector("#extra-pack-size");
  if (getExtraPackSize != null) {
    exPackSi.defaultValue = getExtraPackSize;
  }
}

// any subpack info? (second pack)

var radioExtraPackSubpackButtons = document.getElementsByName(
    "extra-pack-data-subpack");

if (radioExtraPackSubpackButtons.length != 0) {

  var getExtraPackSubpack = localStorage.getItem("pack-2-subpack");

  if (getExtraPackSize != null) {
    heading.innerHTML = 'Is there any subpack information for the '
        + getExtraPackSize + ' pack?';
  }

  if (getExtraPackSubpack != null) {
    for (var radio of radioExtraPackSubpackButtons) {
      if (getExtraPackSubpack === radio.value) {
        radio.checked = true;
      }
    }
  }
  ;

  function storeHasExtraPackSubpack() {

    for (var radio of radioExtraPackSubpackButtons) {
      if (radio.checked) {
        localStorage.setItem("pack-2-subpack", radio.value);
        if (radio.value == 'yes') {
          buttonLink.href = "subpack-extra-2";
        }
        if (radio.value == 'no' && (summaryPage && getExtraPackShdDisPrice)) {
          buttonLink.href = "../summary"
        }
      }
    }
  }
}

var extraPackSubpackExtra = document.getElementById("extra-pack-subpack-extra");

if (extraPackSubpackExtra) {

  function storeExtraPackSubpackInfo() {
    localStorage.setItem("pack-2-subpack-extra", extraPackSubpackExtra.value);
  }

  var getExtraPackSubpackExtra = localStorage.getItem("pack-2-subpack-extra");

  if (getExtraPackSubpackExtra != null) {
    extraPackSubpackExtra.defaultValue = getExtraPackSubpackExtra;
  }

  if (getExtraPackSize != null) {
    heading.innerHTML = 'How many subpacks are in the ' + getExtraPackSize
        + ' pack?';
  }
}

// subpack confirmation page, checking if summary page

function storeExtraPackSubpackConfirmation() {
    if (summaryPage) {
      continueButton.href = "../summary";
    }
  }

// gtin (second pack)

var extraPackGtin = document.getElementById("extra-pack-gtin");

if (extraPackGtin) {

  function storeExtraPackGtin() {

    var extraPackGtin = document.getElementById("extra-pack-gtin");
    localStorage.setItem("pack-2-gtin", extraPackGtin.value);

    var extraPackGtin2 = document.getElementById("extra-pack-gtin-2");
    localStorage.setItem("pack-2-gtin-2", extraPackGtin2.value);
    if (extraPackGtin2.value == "") {
      localStorage.removeItem("pack-2-gtin-2");
    }

    var extraPackGtin3 = document.getElementById("extra-pack-gtin-3");
    localStorage.setItem("pack-2-gtin-3", extraPackGtin3.value);
    if (extraPackGtin3.value == "") {
      localStorage.removeItem("pack-2-gtin-3");
    }

    if (summaryPage) {
        buttonLink.href = "../summary";
    }
  }

  var getExtraPackGtin = localStorage.getItem("pack-2-gtin");

  var extraPackGt = document.querySelector("#extra-pack-gtin");
  if (getExtraPackGtin != null) {
    extraPackGt.defaultValue = getExtraPackGtin;
  }

  var getExtraPackGtin2 = localStorage.getItem("pack-2-gtin-2");

  var extraPackGt2 = document.querySelector("#extra-pack-gtin-2");
  if (getExtraPackGtin2 != null) {
    extraPackGt2.defaultValue = getExtraPackGtin2;
  }

  var getExtraPackGtin3 = localStorage.getItem("pack-2-gtin-3");

  var extraPackGt3 = document.querySelector("#extra-pack-gtin-3");
  if (getExtraPackGtin3 != null) {
    extraPackGt3.defaultValue = getExtraPackGtin3;
  }

  if (getPackSize != null) {
    heading.innerHTML = 'What is the GTIN code of the ' + getPackSize
        + ' pack?';
  }

}

// require artwork? (second pack)

var radioExtraPackRequireArtworkButtons = document.getElementsByName(
    "extra-pack-display-artwork");

if (radioExtraPackRequireArtworkButtons.length != 0) {

  var getExtraPackShdDisArtwork = localStorage.getItem(
      "pack-2-should-display-artwork");

  if (getExtraPackSize != null) {
    heading.innerHTML = 'Do you have images of the packaging to upload for the '
        + getExtraPackSize + ' pack?';
  }

  if (getExtraPackShdDisArtwork != null) {
    for (var radio of radioExtraPackRequireArtworkButtons) {
      if (getExtraPackShdDisArtwork === radio.value) {
        radio.checked = true;
      }
    }
  }
  ;

  function storeExtraPackRequireArtwork() {

    for (var radio of radioExtraPackRequireArtworkButtons) {
      if (radio.checked) {
        localStorage.setItem("pack-2-should-display-artwork", radio.value);
        if (radio.value == 'yes') {
          buttonLink.href = "extra-pack-2-artwork";
        }
        if (radio.value == 'no' && (summaryPage && getExtraPackShdDisPrice)) {
          buttonLink.href = "../summary";
        }
      }
    }
  }
}

// artwork upload file one (second pack)

var extraPackUploadFile = document.getElementById("extra-pack-file-upload-1");
console.log(extraPackUploadFile);

if (extraPackUploadFile) {

  function storeExtraPackFileOneUpload() {
    localStorage.setItem("pack-2-upload-artwork", extraPackUploadFile.value);
  }

  var getExtraPackUploadFile = localStorage.getItem("pack-2-upload-artwork");

  if (getExtraPackUploadFile != null) {
    extraPackUploadFile.value = getExtraPackUploadFile;
  }

  if (getExtraPackSize != null) {
    heading.innerHTML = 'Upload images of packaging for the ' + getExtraPackSize
        + ' pack';
  }
}

// artwork upload file two (second pack)

var extraPackUploadFile2 = document.getElementById("extra-pack-file-upload-2");

if (extraPackUploadFile2) {

  function storeExtraPackFileTwoUpload() {
    localStorage.setItem("pack-2-upload-artwork-2", extraPackUploadFile2.value);
  }

  var getExtraPackUploadFile2 = localStorage.getItem("pack-2-upload-artwork-2");

  if (getExtraPackUploadFile2 != null) {
    extraPackUploadFile2.value = getExtraPackUploadFile2;
  }

  if (getExtraPackSize != null) {
    heading.innerHTML = 'Upload images of packaging for the ' + getExtraPackSize
        + ' pack';
  }
}

// artwork upload file three (second pack)

var extraPackUploadFile3 = document.getElementById("extra-pack-file-upload-3");

if (extraPackUploadFile3) {

  function storeExtraPackFileThreeUpload() {
    localStorage.setItem("pack-2-upload-artwork-3", extraPackUploadFile3.value);
  }

  var getExtraPackUploadFile3 = localStorage.getItem("pack-2-upload-artwork-3");

  if (getExtraPackUploadFile3 != null) {
    extraPackUploadFile3.value = getExtraPackUploadFile3;
  }

  if (getExtraPackSize != null) {
    heading.innerHTML = 'Upload images of packaging for the ' + getExtraPackSize
        + ' pack';
  }
}

// artwork upload file four (second pack)

var extraPackUploadFile4 = document.getElementById("extra-pack-file-upload-4");

if (extraPackUploadFile4) {

  function storeExtraPackFileFourUpload() {
    localStorage.setItem("pack-2-upload-artwork-4", extraPackUploadFile4.value);
  }

  var getExtraPackUploadFile4 = localStorage.getItem("pack-2-upload-artwork-4");

  if (getExtraPackUploadFile4 != null) {
    extraPackUploadFile4.value = getExtraPackUploadFile4;
  }

  if (getExtraPackSize != null) {
    heading.innerHTML = 'Upload images of packaging for the ' + getExtraPackSize
        + ' pack';
  }
}

// upload artwork success page (second pack)

var extraPackDetail = document.getElementById("extra-pack-detail");

if (extraPackDetail) {

  var getExtraPackUploadArtwork = localStorage.getItem("pack-2-upload-artwork");
  var getExtraPackUploadArtwork2 = localStorage.getItem(
      "pack-2-upload-artwork-2");
  var getExtraPackUploadArtwork3 = localStorage.getItem(
      "pack-2-upload-artwork-3");
  var getExtraPackUploadArtwork4 = localStorage.getItem(
      "pack-2-upload-artwork-4");

  var removeExtraPackFileOne = document.getElementById(
      "extra-pack-remove-file-1");
  var removeExtraPackFileTwo = document.getElementById(
      "extra-pack-remove-file-2");
  var removeExtraPackFileThree = document.getElementById(
      "extra-pack-remove-file-3");
  var removeExtraPackFileFour = document.getElementById(
      "extra-pack-remove-file-4");

  var removeExtraPackRowOne = document.getElementById(
      "extra-pack-hide-first-file");
  var removeExtraPackRowTwo = document.getElementById(
      "extra-pack-hide-second-file");
  var removeExtraPackRowThree = document.getElementById(
      "extra-pack-hide-third-file");
  var removeExtraPackRowFour = document.getElementById(
      "extra-pack-hide-fourth-file");

  if (getExtraPackUploadArtwork != null) {
    var extraPackUploadArtworkSplit = getExtraPackUploadArtwork.split("\\");
    var extraPackUploadArtworkFileName = extraPackUploadArtworkSplit[extraPackUploadArtworkSplit.length
    - 1];
    var extraPackFileName = document.getElementById(
        "extra-pack-file-upload-name");
    extraPackFileName.innerHTML = extraPackUploadArtworkFileName;
  } else {
    removeExtraPackRowOne.style.display = "none";
  }

  if (getExtraPackUploadArtwork2 != null) {
    var extraPackUploadArtwork2Split = getExtraPackUploadArtwork2.split("\\");
    var extraPackUploadArtworkFileName2 = extraPackUploadArtwork2Split[extraPackUploadArtwork2Split.length
    - 1];
    var extraPackFileName2 = document.getElementById(
        "extra-pack-file-upload-name-2");
    extraPackFileName2.innerHTML = extraPackUploadArtworkFileName2;
  } else {
    removeExtraPackRowTwo.style.display = "none";
  }

  if (getExtraPackUploadArtwork3 != null) {
    var extraPackUploadArtwork3Split = getExtraPackUploadArtwork3.split("\\");
    var extraPackUploadArtworkFileName3 = extraPackUploadArtwork3Split[extraPackUploadArtwork3Split.length
    - 1];
    var extraPackFileName3 = document.getElementById(
        "extra-pack-file-upload-name-3");
    extraPackFileName3.innerHTML = extraPackUploadArtworkFileName3;
  } else {
    removeExtraPackRowThree.style.display = "none";
  }

  if (getExtraPackUploadArtwork4 != null) {
    var extraPackUploadArtwork4Split = getExtraPackUploadArtwork4.split("\\");
    var extraPackUploadArtworkFileName4 = extraPackUploadArtwork4Split[extraPackUploadArtwork4Split.length
    - 1];
    var extraPackFileName4 = document.getElementById(
        "extra-pack-file-upload-name-4");
    extraPackFileName4.innerHTML = extraPackUploadArtworkFileName4;

    var addExtraPackLink = document.getElementById("extra-pack-add-link");
    addExtraPackLink.style.display = "none";

  } else {
    removeExtraPackRowFour.style.display = "none";
  }

  removeExtraPackFileOne.addEventListener("click", function (e) {
    // e.target was the clicked element
    removeExtraPackFileOne.setAttribute('href',
        "extra-pack-2-artwork-upload-success");
    removeExtraPackRowOne.style.display = "none";
    localStorage.removeItem("pack-2-upload-artwork");
    var itemTwo = localStorage.getItem("pack-2-upload-artwork-2");
    var itemThree = localStorage.getItem("pack-2-upload-artwork-3");
    var itemFour = localStorage.getItem("pack-2-upload-artwork-4");

    if (itemTwo == null && itemThree == null && itemFour == null) {
      document.getElementById("extra-pack-hide-table").style.display = "none";
      document.getElementById(
          "extra-pack-add-another-link").style.display = "none";
      document.getElementById("continue-button").style.display = "none";
      document.getElementById("extra-pack-add-link").style.display = "block";
    } else {
      document.getElementById("extra-pack-add-link").style.display = "none";
      document.getElementById(
          "extra-pack-add-another-link").style.display = "block";
      document.getElementById("extra-pack-go-to-file-2").setAttribute('href',
          "extra-pack-2-artwork");
    }
    e.preventDefault();

  });

  removeExtraPackFileTwo.addEventListener("click", function (e) {
    // e.target was the clicked element
    removeExtraPackFileTwo.setAttribute('href',
        "extra-pack-2-artwork-upload-success");
    removeExtraPackRowTwo.style.display = "none";
    localStorage.removeItem("pack-2-upload-artwork-2");
    var itemOne = localStorage.getItem("pack-2-upload-artwork");
    var itemThree = localStorage.getItem("pack-2-upload-artwork-3");
    var itemFour = localStorage.getItem("pack-2-upload-artwork-4");
    if (itemOne == null && itemThree == null && itemFour == null) {
      document.getElementById("extra-pack-hide-table").style.display = "none";
      document.getElementById(
          "extra-pack-add-another-link").style.display = "none";
      document.getElementById("continue-button").style.display = "none";
      document.getElementById("extra-pack-add-link").style.display = "block";
    } else {
      document.getElementById("extra-pack-add-link").style.display = "none";
      document.getElementById(
          "extra-pack-add-another-link").style.display = "block";
      document.getElementById("extra-pack-go-to-file-2").setAttribute('href',
          "extra-pack-2-artwork-2");
    }
    e.preventDefault();
  });

  removeExtraPackFileThree.addEventListener("click", function (e) {
    // e.target was the clicked element
    removeExtraPackFileThree.setAttribute('href',
        "extra-pack-2-artwork-upload-success");
    removeExtraPackRowThree.style.display = "none";
    localStorage.removeItem("pack-2-upload-artwork-3");
    var itemOne = localStorage.getItem("pack-2-upload-artwork");
    var itemTwo = localStorage.getItem("pack-2-upload-artwork-2");
    var itemFour = localStorage.getItem("pack-2-upload-artwork-4");
    if (itemOne == null && itemTwo == null && itemFour == null) {
      document.getElementById("extra-pack-hide-table").style.display = "none";
      document.getElementById(
          "extra-pack-add-another-link").style.display = "none";
      document.getElementById("continue-button").style.display = "none";
      document.getElementById("extra-pack-add-link").style.display = "block";
    } else {
      document.getElementById("extra-pack-add-link").style.display = "none";
      document.getElementById(
          "extra-pack-add-another-link").style.display = "block";
      document.getElementById("extra-pack-go-to-file-2").setAttribute('href',
          "extra-pack-2-artwork-3");
    }
    e.preventDefault();
  });

  removeExtraPackFileFour.addEventListener("click", function (e) {
    // e.target was the clicked element
    removeExtraPackFileFour.setAttribute('href',
        "extra-pack-2-artwork-upload-success");
    removeExtraPackRowFour.style.display = "none";
    localStorage.removeItem("pack-upload-artwork-4");
    var itemOne = localStorage.getItem("pack-2-upload-artwork");
    var itemTwo = localStorage.getItem("pack-2-upload-artwork-2");
    var itemThree = localStorage.getItem("pack-2-upload-artwork-3");
    if (itemOne == null && itemTwo == null && itemThree == null) {
      document.getElementById("extra-pack-hide-table").style.display = "none";
      document.getElementById(
          "extra-pack-add-another-link").style.display = "none";
      document.getElementById("continue-button").style.display = "none";
      document.getElementById("extra-pack-add-link").style.display = "block";
    } else {
      document.getElementById("extra-pack-add-link").style.display = "none";
      document.getElementById(
          "extra-pack-add-another-link").style.display = "block";
      document.getElementById("extra-pack-go-to-file-2").setAttribute('href',
          "extra-pack-2-artwork-4");
    }
    e.preventDefault();
  });

  if (getExtraPackUploadArtwork != null && getExtraPackUploadArtwork2 == null
      && getExtraPackUploadArtwork3 == null && getExtraPackUploadArtwork3
      == null) {
    document.getElementById("extra-pack-go-to-file-2").setAttribute('href',
        "extra-pack-2-artwork-2");
  } else if (getExtraPackUploadArtwork == null && getExtraPackUploadArtwork2
      != null && getExtraPackUploadArtwork3 == null
      && getExtraPackUploadArtwork4 == null) {
    document.getElementById("extra-pack-go-to-file-2").setAttribute('href',
        "extra-pack-2-artwork");
  } else if (getExtraPackUploadArtwork != null && getExtraPackUploadArtwork2
      != null && getExtraPackUploadArtwork3 == null
      && getExtraPackUploadArtwork4 == null) {
    document.getElementById("extra-pack-go-to-file-2").setAttribute('href',
        "extra-pack-2-artwork-3");
  } else if (getExtraPackUploadArtwork != null && getExtraPackUploadArtwork2
      != null && getExtraPackUploadArtwork3 != null
      && getExtraPackUploadArtwork4 == null) {
    document.getElementById("extra-pack-go-to-file-2").setAttribute('href',
        "extra-pack-2-artwork-4");
  } else if (getExtraPackUploadArtwork != null && getExtraPackUploadArtwork2
      != null && getExtraPackUploadArtwork3 != null
      && getExtraPackUploadArtwork4 != null) {
    document.getElementById(
        "extra-pack-add-another-link").style.display = "none";
  } else if (getExtraPackUploadArtwork == null && getExtraPackUploadArtwork2
      == null && getExtraPackUploadArtwork3 == null
      && getExtraPackUploadArtwork4 == null) {
    document.getElementById("extra-pack-hide-table").style.display = "none";
    document.getElementById(
        "extra-pack-add-another-link").style.display = "none";
    document.getElementById("continue-button").style.display = "none";
    document.getElementById("extra-pack-add-link").style.display = "block";
  }

  function uploadExtraPackArtworkFiles() {
    if (getExtraPackUploadArtwork && (summaryPage && getExtraPackShdDisPrice)
        || getExtraPackUploadArtwork2 && (summaryPage
            && getExtraPackShdDisPrice) || getExtraPackUploadArtwork3
        && (summaryPage && getExtraPackShdDisPrice)
        || getExtraPackUploadArtwork4 && (summaryPage
            && getExtraPackShdDisPrice)) {
      buttonLink.href = "../summary";
    }
  }
}

// should display price (second pack)

var radioExtraPackShouldDisplayPriceButtons = document.getElementsByName(
    "display-price-extra");

if (radioExtraPackShouldDisplayPriceButtons.length != 0) {

  if (getExtraPackShdDisPrice != null) {
    for (var radio of radioExtraPackShouldDisplayPriceButtons) {
      if (getExtraPackShdDisPrice === radio.value) {
        radio.checked = true;
      }
    }
  }
  ;

  if (getExtraPackSize != null) {
    heading.innerHTML = 'Do you want to display the price for the '
        + getExtraPackSize + ' pack?';
  }

  function storeExtraPackShouldDisplayPrice() {
    for (var radio of radioExtraPackShouldDisplayPriceButtons) {
      if (radio.checked) {
        localStorage.setItem("pack-2-should-display-price", radio.value);
        if (radio.value === 'yes') {
          buttonLink.href = "pack-price";
        }
      }
    }
  }
}

// pack price (second pack)

var extraPackProdPrice = document.getElementById("extra-pack-product-price");

if (extraPackProdPrice) {

  function storeExtraPackPrice() {
    localStorage.setItem("product-2-price", extraPackProdPrice.value);
  }

  var getExtraPackProdPrice = localStorage.getItem("product-2-price");

  if (getExtraPackProdPrice != null) {
    extraPackProdPrice.defaultValue = getExtraPackProdPrice;
  }

  if (getExtraPackSize != null) {
    heading.innerHTML = 'What is the price of the ' + getExtraPackSize
        + ' pack?';
  }
}

// extra pack price confirmation

localStorage.removeItem("product-2-price-confirm"); // removing localStorage as want the user to select every time they land on page

var productExtraPrice = localStorage.getItem("product-2-price");

var formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

var penceToPoundExtra = productExtraPrice / 100;
var poundVersionExtra = formatter.format(penceToPoundExtra);

var priceAmountExtraHint = document.getElementById("price-amount-extra-hint");

if (priceAmountExtraHint) {
  priceAmountExtraHint.innerHTML = 'The price you have entered is '
      + productExtraPrice + ' pence or ' + poundVersionExtra + '.'
}

var getConfPriceExtra = localStorage.getItem("product-2-price-confirm");

var radioConfPriceExtraButtons = document.getElementsByName("data-price-extra");

if (getConfPriceExtra != null) {
  for (var radio of radioConfPriceExtraButtons) {
    if (getConfPriceExtra === radio.value) {
      radio.checked = true;
    }
  }
}

function storeCorrectPriceExtraPackYesOrNo() {
  var radioButtons = document.getElementsByName("data-price-confirm-extra");
  var buttonLink = document.getElementById("continue-button");

  for (var radio of radioButtons) {
    if (radio.checked) {
          localStorage.setItem("product-2-price-confirm", radio.value);
          if (radio.value == 'no') {
            buttonLink.href = "pack-price";
          } else if (radio.value == 'yes' && summaryPage) {
            buttonLink.href = "../summary";
        }
     }
  }
}

// legal category pack 2

var radioLegalButtonsExtra = document.getElementsByName("data-legal-cat-extra");
var getProductLegalCatExtra = localStorage.getItem("pack-2-legal-category");

if (radioLegalButtonsExtra.length != 0) {

  if (getExtraPackSize != null) {
    heading.innerHTML = 'What is the legal category of the ' + getExtraPackSize
        + ' pack?';
  }

  if (getProductLegalCatExtra != null) {
    for (var radio of radioLegalButtonsExtra) {
      if (getProductLegalCatExtra === radio.value) {
        radio.checked = true;
      }
    }
  }
}
;

function storeLegalCategoryExtra() {
  for (var radio of radioLegalButtonsExtra) {
    if (radio.checked) {
      localStorage.setItem("pack-2-legal-category", radio.value);
    }
    if (summaryPage) {
      buttonLink.href = "../summary";
    }
  }
}

// hospital yes/no extra pack

var radioUsageButtonsExtra = document.getElementsByName("data-usage-extra");
var getProductHospUsageExtra = localStorage.getItem("pack-2-hospital-only");

if (radioUsageButtonsExtra.length != 0) {

  if (getExtraPackSize != null) {
    heading.innerHTML = 'Is this ' + getExtraPackSize
        + ' pack to be used in hospitals only?';
  }

  if (getProductHospUsageExtra != null) {
    for (var radio of radioUsageButtonsExtra) {
      if (getProductHospUsageExtra === radio.value) {
        radio.checked = true;
      }
    }
  }
  ;

  function storeUsageExtra() {

    for (var radio of radioUsageButtonsExtra) {
      if (radio.checked) {
        localStorage.setItem("pack-2-hospital-only", radio.value);
      }
      if (summaryPage) {
        buttonLink.href = "../summary";
      }
    }
  }
}