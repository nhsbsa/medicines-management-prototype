/* jshint esversion: 6 */

(function() {
  'use strict';
  // Adds an icon to allow copy to clipboard functionality
  let targets = document.getElementsByClassName('js-copy-to-clipboard');
  console.log('targets', targets);
  for (let i = 0; i < targets.length; i++) {
    const element = targets[i];
    element.insertAdjacentHTML('beforeend',
        '<button class="nhsuk-u-margin-left-1" style="border:none; background-color:transparent; vertical-align:middle; padding: 0 4px 0 0;"><svg style="vertical-align:middle; height: 31px; width:31px" alt="copy icon" class="nhsuk-icon nhsuk-icon__tick nhsuk-u-inline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-labelledby="copy-function">'
        +
        '<title id="copy-function" lang="en">Select this to copy to clipboard</title>'
        +
        '<rect x="9" y="5" rx="1" ry="1" width="9" height="11" style="fill:white;stroke:black; stroke-width:1;opacity:1" />'
        +
        '<rect x="6" y="8" rx="1" ry="1" width="9" height="11" style="fill:white;stroke:black; stroke-width:1;opacity:1" />'
        +
        '<line x1="8" y1="12" x2="13" y2="12" style="stroke:black;stroke-width:1" />'
        +
        '<line x1="8" y1="14" x2="13" y2="14" style="stroke:black;stroke-width:1" />'
        +
        '<line x1="8" y1="16" x2="13" y2="16" style="stroke:black;stroke-width:1" />'
        +
        '</svg>Copy</button>');

    element.querySelector('button').addEventListener('click', function (e) {
//    in development this needs to loop over live elements and attach text to relevant section
      let liveElement = document.querySelector('#live-text-1');
      liveElement.innerHTML = 'This has now been copied to the clipboard';

      var copiedTag = document.createElement('span');
      copiedTag.className = 'nhsuk-tag--copied';
      copiedTag.innerText = 'Copied';
      var tempInput = document.createElement("input");

      var textCopy = element.innerText.indexOf('Copied') == -1
          ? element.firstChild.textContent.trim() : element.innerText.substr(0,
              element.innerText.indexOf('Copied'));

              console.log(element.firstChild.textContent);

      tempInput.value = textCopy;

      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      element.insertAdjacentElement('beforeend', copiedTag);

      setTimeout(function () {
        element.removeChild(copiedTag);
      }, 2000);
    });

    element.querySelector('button').addEventListener('keypress', function (e) {
      if (e.code == 'Enter' || e.code == 'Space') {
      let liveElement = document.querySelector('#live-text');
      liveElement.innerHTML = 'This has now been copied to the clipboard';

      var copiedTag = document.createElement('span');
      copiedTag.className = 'nhsuk-tag--copied';
      copiedTag.innerText = 'Copied';
      var tempInput = document.createElement("input");

      var textCopy = element.innerText.indexOf('Copied') == -1
          ? element.innerText : element.innerText.substr(0,
              element.innerText.indexOf('Copied'));

      tempInput.value = textCopy;

      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      element.insertAdjacentElement('beforeend', copiedTag);

      setTimeout(function () {
        element.removeChild(copiedTag);
      }, 2000);
      }
    });
  }
 })();