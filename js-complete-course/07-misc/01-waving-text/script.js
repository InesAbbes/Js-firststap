/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let target = document.getElementById("target");
    let wave = "Woo-hoo! I'm making waves! Wéééé!" +
        "       Oh ... I think I'm having seasickness ...";

    target.innerHTML = '';
    let pos = 0;

    for (i=0;i<wave.length;i++){
        let char = wave.charAt(pos);
        pos++;
        if (pos === 1){
           char = "<span class='1'>" + char +"<span>";
        }
        if (pos === 2 || pos === 8){
            char = "<span class='2'>" + char +"<span>";
        }
        if (pos === 3 || pos === 7 ){
            char = "<span class='3'>" + char +"<span>";
        }
        if (pos === 4 || pos === 6){
            char = "<span class='4'>" + char +"<span>";
        }
        if (pos === 5){
            char = "<span class='5'>" + char +"<span>";
        }
        if (pos=== 8){
            pos =0;
        }

        target.innerHTML += char ;
        }
    var n ;
    var one = document.getElementsByClassName('1');
    for ( n = 0; n < one.length; n++) {
        one[n].style.fontSize = '0.5em';
    }
    var two = document.getElementsByClassName('2');
    for (n = 0; n < two.length; n++) {
        two[n].style.fontSize = '1em';
    }
    var three = document.getElementsByClassName('3');
    for ( n = 0; n < three.length; n++) {
        three[n].style.fontSize = '1.5em';
    }

    var four = document.getElementsByClassName('4');
    for ( n = 0; n < four.length; n++) {
        four[n].style.fontSize = '2em';

    }
    var five = document.getElementsByClassName('5');
    for ( n = 0; n < five.length; n++) {
        five[n].style.fontSize = '2.5em';
    }







    })();
