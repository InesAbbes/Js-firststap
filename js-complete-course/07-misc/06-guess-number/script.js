/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function() {

    let random = Math.floor(Math.random() * 100 + 1);//X
    let guess = 1;
    let ok;

    do {
        let number = prompt("Guess a number between 1 and 100:", "");//Y
        if(number === random) {
            alert("You won" + guess + " GUESSES ");
            ok = true;
        }
        else if(number > random){
            guess++;
            alert("Higher");
            ok = false;
        }
        else{
            guess++;
            alert("Lower");
            ok = false;
        }
    }
    while (ok === false);


})();