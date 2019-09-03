/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var target = document.getElementById("target");

    var one = document.getElementById("part-one");
    var two = document.getElementById("part-two");
    var three = document.getElementById("part-three");
    var four = document.getElementById("part-four");

    var firstbutton = document.getElementById("fix-part-one");
    var secondbutton = document.getElementById("fix-part-two");
    var thirdbutton = document.getElementById("fix-part-three");
    var fourthbutton = document.getElementById("fix-part-four");

    var firstmin = one.dataset.min;
    var firstmax = one.dataset.max;
    var min = two.dataset.min;
    var max = two.dataset.max;

    firstmin = Math.ceil(firstmin);
    firstmax = Math.floor(firstmax);
    min = Math.ceil(min);
    max = Math.floor(max);

    var first = "460";
    var second = "00";
    var third = "00";
    var fourth = "00";

    target.innerHTML = "0" + first + second + third + fourth;


    firstbutton.addEventListener("click", function(){

        first = Math.floor(Math.random() * (firstmax - firstmin + 1)) + firstmin;
        one.value = first;

        target.innerHTML = "0" + first + second + third + fourth;
    });

    secondbutton.addEventListener("click", function(){

        second = ("" + ("100" + Math.floor(Math.random() * (max - min + 1)) + min).slice(-3)).slice(0, 2);
        two.value = second;

        target.innerHTML = "0" + first + second + third + fourth;
    });

    thirdbutton.addEventListener("click", function(){

        third = ("" + ("100" + Math.floor(Math.random() * (max - min + 1)) + min).slice(-3)).slice(0, 2);
        three.value = third;

        target.innerHTML = "0" + first + second + third + fourth;
    });

    fourthbutton.addEventListener("click", function(){

        fourth = ("" + ("100" + Math.floor(Math.random() * (max - min + 1)) + min).slice(-3)).slice(0, 2);
        four.value = fourth;

        target.innerHTML = "0" + first + second + third + fourth;
    });



})();