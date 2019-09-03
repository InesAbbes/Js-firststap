/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
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

    var first = one.innerHTML;
    var second = two.innerHTML;
    var third = three.innerHTML;
    var fourth = four.innerHTML;

    one.innerHTML = "4" + 60;

    first = "60";
    second = "00";
    third = "00";
    fourth = "00";

    target.innerHTML = "04" + first + second + third + fourth;

    one.addEventListener("click", function(){

        if(first === "4" + 99 ){
            one.innerHTML = 59;
        }

        first++;

        first = "4" + parseInt(one.innerHTML);

        one.innerHTML++;
        first = "4" + one.innerHTML.slice(-2);
        one.innerHTML = first;
        target.innerHTML = "0" + first + second + third + fourth;
    });

    two.addEventListener("click", function(){

        first = "4" + parseInt(one.innerHTML);
        first = "4" + one.innerHTML.slice(-2);
        one.innerHTML = first;

        second++;

        second = parseInt(two.innerHTML);

        two.innerHTML++;
        if(second < 9 ){
            second = "0" + two.innerHTML.slice(-2);
        }
        else{
            second = two.innerHTML.slice(-2);
        }
        two.innerHTML = second;
        target.innerHTML = "0" + first + second + third + fourth;
    });

    three.addEventListener("click", function(){

        first = "4" + parseInt(one.innerHTML);
        first = "4" + one.innerHTML.slice(-2);
        one.innerHTML = first;

        third++;

        third = parseInt(three.innerHTML);

        three.innerHTML++;
        if(third < 9 ){
            third = "0" + three.innerHTML.slice(-2);
        }
        else{
            third = three.innerHTML.slice(-2);
        }
        three.innerHTML = third;
        target.innerHTML = "0" + first + second + third + fourth;
    });

    four.addEventListener("click", function(){

        first = "4" + parseInt(one.innerHTML);
        first = "4" + one.innerHTML.slice(-2);
        one.innerHTML = first;

        fourth++;

        fourth = parseInt(four.innerHTML);

        four.innerHTML++;
        if(fourth < 9 ){
            fourth = "0" + four.innerHTML.slice(-2);
        }
        else{
            fourth = four.innerHTML.slice(-2);
        }
        four.innerHTML = fourth;
        target.innerHTML = "0" + first + second + third + fourth;
    });
})();