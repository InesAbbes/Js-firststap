/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
        // get the birth date of the visitor
        let birthDay = document.getElementById("dob-day").value;
        let birthMonth = document.getElementById("dob-month").value;
        let birthYear = document.getElementById("dob-year").value;

        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;

        console.log(month);

        let day = today.getDate();
        console.log(day);

        let age = year - birthYear;
        if ( (month >= birthMonth) || ((month = birthMonth) && (day >= birthDay)) ) {
            alert("You are " + age + " y.old!" );
        } else {
            alert("You are " + (age - 1) + " y.old!" )
        }
    });


})();
