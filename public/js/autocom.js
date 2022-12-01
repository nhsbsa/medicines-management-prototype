function isBlank(allSelects, allInputs) {

    let inputValue = '';

    allInputs.forEach(el => {
        if (el.className != 'nhsuk-date-input__input') {
        el.addEventListener(el, getInputValue);
        }
      });

      function getInputValue(e) {
          inputValue = this.value;
          console.log('id', e.target.id);
          if (e.keyCode == 8 || e.target.value == "") {
                      let uomId = e.target.id;
                          for (let j = 0; j < allSelects.length; j++) {
                              inputId = e.target.id + '-select';
                              if (inputId == allSelects[j].id && (uomId.substr(uomId.length - 3) == 'uom') && uomId.substr(0,3) != 'ing') {
                                  allSelects[j].value = "NO_VALUE";
                              } else if (inputId == allSelects[j].id && (uomId.substr(uomId.length - 3) != 'uom') ||  (uomId.substr(uomId.length - 3) == 'uom') && uomId.substr(0,3) == 'ing') {
                                 allSelects[j].value = "";
                          }
                      }
                  }

      }

//      function getListClickValue() {
//            let listArray = this.childNodes;
//                       for (const el of listArray) {
//                             inputValue = el.innerHTML;
//                             console.log(el.id);
//                             let splitId = el.id.split("-");
//
//             console.log('splitId from list', splitId);
//             var today = new Date();
//             var dd = String(today.getDate()).padStart(2, '0');
//             var mm = String(today.getMonth() + 1).padStart(2, '0');
//             var yyyy = today.getFullYear();
//
//              if (splitId.length == 7 || splitId.length == 9) {
//                 startDateId = splitId[0] + '-' + splitId[1] + '-' + splitId[2] + '-start-date-';
//             } else {
//                 startDateId = splitId[0] + '-' + splitId[1] + '-start-date-';
//             }
//
//
//             const startDateDayId = startDateId + 'day';
//             const startDateDayElement = document.getElementById(startDateDayId);
//
//             const startDateMonthId = startDateId + 'month';
//             const startDateMonthElement = document.getElementById(startDateMonthId);
//
//              const startDateYearId = startDateId + 'year';
//              const startDateYearElement = document.getElementById(startDateYearId);
//
//             if (startDateDayElement) {
//                  startDateDayElement.value = dd;
//                  startDateMonthElement.value = mm;
//                  startDateYearElement.value = yyyy;
//
//                  const ariaInputText = 'Start date value is now day ' + dd + ', month ' + mm + ', year ' + yyyy + '.';
//
//                 if (splitId.length == 7 || splitId.length == 9) {
//                      ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[2]);
//                } else {
//                      ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[1]);
//                }
//                      ariaLiveContainer.innerHTML = ariaInputText;
//              }
//            }
//          }

      function getListValue(e) {
      console.log('working?');
           let listArray = this.childNodes;
           console.log('listArray', listArray);
           for (const element of listArray) {
               element.addEventListener('keydown', (e) => {
                     if (e.keyCode == 13 || e.type == 'click') {
                           e.preventDefault();
                           inputValue = el.innerHTML;
                           console.log(e);
                           console.log(el.id);
                           let splitId = el.id.split("-");

                        var today = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');
                        var mm = String(today.getMonth() + 1).padStart(2, '0');
                        var yyyy = today.getFullYear();
                        let startDateId = "";

                        if (splitId.length == 7) {
                            startDateId = splitId[0] + '-' + splitId[1] + '-' + splitId[2] + '-start-date-';
                        } else {
                            startDateId = splitId[0] + '-' + splitId[1] + '-start-date-';
                        }


                        const startDateDayId = startDateId + 'day';
                        const startDateDayElement = document.getElementById(startDateDayId);

                        const startDateMonthId = startDateId + 'month';
                        const startDateMonthElement = document.getElementById(startDateMonthId);

                        const startDateYearId = startDateId + 'year';
                        const startDateYearElement = document.getElementById(startDateYearId);

                       if (startDateDayElement) {
                            startDateDayElement.value = dd;
                            startDateMonthElement.value = mm;
                            startDateYearElement.value = yyyy;

                            const ariaInputText = 'Start date value is now day ' + dd + ', month ' + mm + ', year ' + yyyy + '.';

                            if (splitId.length == 7) {
                                 ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[2]);
                            } else {
                                 ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[1]);
                            }
                            ariaLiveContainer.innerHTML = ariaInputText;
                        }
                 }
             });
          }
//          this.children.forEach(el => {
//                      el.addEventListener('keydown', (e) => {
//                             console.log('e', e);
//                             console.log('el', el);
//
//                      });
//                    });
      }
   }

            //           console.log('clicked value', e);
            //           let currentSelection = e.target.parentElement.id.split("-");
            //           let newSelection = e.target.id.split("-");
            //
            //           let matchCurrent = currentSelection[0,1];
            //           let matchNew = newSelection[0,1];
            //
            //           if (matchCurrent == matchNew) {
            //               console.log('match');
            //           } else {
            //               console.log('no match');
            //           }


            //           if (e.target.innerText != e.parent)

//                });
//
//
//          if (e.keyCode == 8 || e.target.value == "") {
//                      console.log('el', e.target.value);
//                      console.log(e.keyCode);
//                      let uomId = el.id;
//                          for (let j = 0; j < allSelects.length; j++) {
//                              inputId = el.id + '-select';
//
//                              if (inputId == allSelects[j].id && (uomId.substr(uomId.length - 3) == 'uom') && uomId.substr(0,3) != 'ing') {
//                                  allSelects[j].value = "NO_VALUE";
//                                  console.log('working?', allSelects[j].value);
//                              } else if (inputId == allSelects[j].id && (uomId.substr(uomId.length - 3) != 'uom') ||  (uomId.substr(uomId.length - 3) == 'uom') && uomId.substr(0,3) == 'ing') {
//                                 allSelects[j].value = "";
//                          }
//                      }
//
//                      allListIds.forEach(el => {
//                                          el.addEventListener('keydown', (e) => {
//                                             console.log('keydown');
//
//                                             if (e.keyCode == 13 && (initialValue != e.target.innerHTML)) {
//                                             console.log('initialValue from input', initialValue);
//                                                             e.preventDefault();
//                                                             console.log();
//                                                             let splitId = el.id.split("-");
//
//                                                                                                  console.log('splitId from list', splitId);
//
//                                              var today = new Date();
//                                                                                                   var dd = String(today.getDate()).padStart(2, '0');
//                                                                                                   var mm = String(today.getMonth() + 1).padStart(2, '0');
//                                                                                                   var yyyy = today.getFullYear();
//
//                                                                                                   let startDateId = "";
//
//                                                                                                  if (splitId.length == 7) {
//                                                                                                    startDateId = splitId[0] + '-' + splitId[1] + '-' + splitId[2] + '-start-date-';
//                                                                                                      } else {
//                                                                                                    startDateId = splitId[0] + '-' + splitId[1] + '-start-date-';
//                                                                                                      }
//
//                                                                                                   const startDateDayId = startDateId + 'day';
//                                                                                                   const startDateDayElement = document.getElementById(startDateDayId);
//
//                                                                                                   const startDateMonthId = startDateId + 'month';
//                                                                                                   const startDateMonthElement = document.getElementById(startDateMonthId);
//
//                                                                                                   const startDateYearId = startDateId + 'year';
//                                                                                                   const startDateYearElement = document.getElementById(startDateYearId);
//
//                                                                                                   if (startDateDayElement) {
//                                                                                                   startDateDayElement.value = dd;
//                                                                                                   startDateMonthElement.value = mm;
//                                                                                                   startDateYearElement.value = yyyy;
//
//                                                                                                   const ariaInputText = 'Start date value is now day ' + dd + ', month ' + mm + ', year ' + yyyy + '.';
//
//                                                                                                   if (splitId.length == 7) {
//                                                                                                   ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[2]);
//                                                                                                   } else {
//                                                                                                   ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[1]);
//                                                                                                   }
//                                                                                                   ariaLiveContainer.innerHTML = ariaInputText;
//                                                          }
//                                                                                                  }
//
//                    }
//
//          let uomTargetId = e.target.id;
//                  if (e.keyCode == 9 || e.keyCode == 13) {
//                    if (!e.target.classList.contains('nhsuk-date-input__input') && initialValue != e.target.value) {
//                                 let splitId = el.id.split("-");
//
//                                     console.log('splitId', splitId);
//
//
//                                     var today = new Date();
//                                     var dd = String(today.getDate()).padStart(2, '0');
//                                     var mm = String(today.getMonth() + 1).padStart(2, '0');
//                                     var yyyy = today.getFullYear();
//
//                                     let startDateId = "";
//
//                                    if (splitId.length == 7) {
//                                      startDateId = splitId[0] + '-' + splitId[1] + '-' + splitId[2] + '-start-date-';
//                                        } else {
//                                      startDateId = splitId[0] + '-' + splitId[1] + '-start-date-';
//                                        }
//
//                                     const startDateDayId = startDateId + 'day';
//                                     const startDateDayElement = document.getElementById(startDateDayId);
//
//                                     const startDateMonthId = startDateId + 'month';
//                                     const startDateMonthElement = document.getElementById(startDateMonthId);
//
//                                     const startDateYearId = startDateId + 'year';
//                                     const startDateYearElement = document.getElementById(startDateYearId);
//
//                                     if (startDateDayElement) {
//                                     startDateDayElement.value = dd;
//                                     startDateMonthElement.value = mm;
//                                     startDateYearElement.value = yyyy;
//
//                                     const ariaInputText = 'Start date value is now day ' + dd + ', month ' + mm + ', year ' + yyyy + '.';
//
//                                     if (splitId.length == 7) {
//                                     ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[2]);
//                                     } else {
//                                     ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[1]);
//                                     }
//                                     ariaLiveContainer.innerHTML = ariaInputText;
//                                  }
//                                }
//                             }
//                   });
//
//        el.addEventListener('click', (e) => {
//        let initialClickValue = e.target.value;
//                     allListIds.forEach(el => {
//                            el.addEventListener('click', (e) => {
//
//            if (initialClickValue != e.target.innerHTML) {
//                                  console.log('initialValue from input', initialClickValue);
//                                                  e.preventDefault();
//                                                  console.log();
//                                                  let splitId = el.id.split("-");
//
//                                                                                       console.log('splitId from list', splitId);
//
//                                   var today = new Date();
//                                                                                        var dd = String(today.getDate()).padStart(2, '0');
//                                                                                        var mm = String(today.getMonth() + 1).padStart(2, '0');
//                                                                                        var yyyy = today.getFullYear();
//
//                                                                                        let startDateId = "";
//
//                                                                                       if (splitId.length == 7) {
//                                                                                         startDateId = splitId[0] + '-' + splitId[1] + '-' + splitId[2] + '-start-date-';
//                                                                                           } else {
//                                                                                         startDateId = splitId[0] + '-' + splitId[1] + '-start-date-';
//                                                                                           }
//
//                                                                                        const startDateDayId = startDateId + 'day';
//                                                                                        const startDateDayElement = document.getElementById(startDateDayId);
//
//                                                                                        const startDateMonthId = startDateId + 'month';
//                                                                                        const startDateMonthElement = document.getElementById(startDateMonthId);
//
//                                                                                        const startDateYearId = startDateId + 'year';
//                                                                                        const startDateYearElement = document.getElementById(startDateYearId);
//
//                                                                                        if (startDateDayElement) {
//                                                                                        startDateDayElement.value = dd;
//                                                                                        startDateMonthElement.value = mm;
//                                                                                        startDateYearElement.value = yyyy;
//
//                                                                                        const ariaInputText = 'Start date value is now day ' + dd + ', month ' + mm + ', year ' + yyyy + '.';
//
//                                                                                        if (splitId.length == 7) {
//                                                                                        ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[2]);
//                                                                                        } else {
//                                                                                        ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[1]);
//                                                                                        }
//                                                                                        ariaLiveContainer.innerHTML = ariaInputText;
//                                               }
//                                                                                       }
//
//         });
//
//        console.log(e.target.value);
//
//        if (!e.target.classList.contains('nhsuk-date-input__input') || el.target.id != 'insert-vmp-select-unit-dose-uom' || el.target.id != 'insert-vmp-select-vmp-uom-value') {
//                                         let splitId = el.id.split("-");
//
//                                             console.log('splitId', splitId);
//
//
//                                             var today = new Date();
//                                             var dd = String(today.getDate()).padStart(2, '0');
//                                             var mm = String(today.getMonth() + 1).padStart(2, '0');
//                                             var yyyy = today.getFullYear();
//
//                                             let startDateId = "";
//
//                                            if (splitId.length == 7) {
//                                              startDateId = splitId[0] + '-' + splitId[1] + '-' + splitId[2] + '-start-date-';
//                                                } else {
//                                              startDateId = splitId[0] + '-' + splitId[1] + '-start-date-';
//                                                }
//
//                                             const startDateDayId = startDateId + 'day';
//                                             const startDateDayElement = document.getElementById(startDateDayId);
//
//                                             const startDateMonthId = startDateId + 'month';
//                                             const startDateMonthElement = document.getElementById(startDateMonthId);
//
//                                             const startDateYearId = startDateId + 'year';
//                                             const startDateYearElement = document.getElementById(startDateYearId);
//
//                                             if (startDateDayElement) {
//                                             startDateDayElement.value = dd;
//                                             startDateMonthElement.value = mm;
//                                             startDateYearElement.value = yyyy;
//
//                                             const ariaInputText = 'Start date value is now day ' + dd + ', month ' + mm + ', year ' + yyyy + '.';
//
//                                             if (splitId.length == 7) {
//                                             ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[2]);
//                                             } else {
//                                             ariaLiveContainer = document.getElementById('start-date-hidden-' + splitId[1]);
//                                             }
//                                             ariaLiveContainer.innerHTML = ariaInputText;
//                                          }
//                                        }

//        el.addEventListener('change', function(e) {
//              console.log('change work?', e);9
//
//         });
//    });
//    });
//  }
