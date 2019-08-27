/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {

        let numbers = [];
        for (let i = 1; i < 11; i++) {
            let randomnr = Math.floor((Math.random() * 100) + 1);
            numbers.push(randomnr);
            let newId = "n-" + i;   //console.log(numbers);
            document.getElementById(newId).innerHTML = randomnr;
        }
        document.getElementById("min").innerHTML = Math.min(...numbers);
        document.getElementById("max").innerHTML = Math.max(...numbers);
        document.getElementById("sum").innerHTML = numbers.reduce((a, b) => a + b);
        document.getElementById("average").innerHTML = numbers.reduce((a, b) => a + b, 0) / numbers.length


    });

})();
