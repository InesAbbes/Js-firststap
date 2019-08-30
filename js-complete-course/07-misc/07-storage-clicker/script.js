/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

var target = document.getElementById("target");
var buttom = document.getElementById("increment");
var count = window.localStorage.getItem("counter");
target.innerHTML = count;

    if(target.innerHTML=""){
        target.innerHTML = 0;
    }
buttom.addEventListener("click" , function(){
    count++;
    target.innerHTML =count;
    window.localStorage.setItem("couter" , count);

});
})();
