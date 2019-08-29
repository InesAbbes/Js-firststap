/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    (function() {

        let inputElement = document.getElementById("pass-one");
        let counter = document.getElementById("validity");
        let number = new RegExp( /[0-9].*[0-9]/ );

        inputElement.setAttribute("maxlength", "10");

        inputElement.addEventListener("input", function() {
            if (inputElement.value.length >= 8 && inputElement.value.match(number)) {
                counter.innerHTML = "ok";
            } else {
                counter.innerHTML = "Not ok";
            }
        });

    })();
