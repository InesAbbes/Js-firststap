/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    fetch("http://localhost:63342/Js-firststap/js-complete-course/_shared/api.json")

        .then(function(response) {
            return response.json();
        })

        .then(function(list) {
            let target = document.getElementById("target");
            let input = document.getElementById("hero-id");
            let tmp = document.getElementById("tpl-hero");
            let name = tmp.content.querySelector("strong");
            let alterEgo = tmp.content.querySelector("em");
            let powers = tmp.content.querySelector("p");

            document.getElementById("run").addEventListener("click", function () {
                let i = input.value - 1;
                name.innerHTML = list.heroes[i].name ;
                alterEgo.innerHTML = list.heroes[i].alterEgo ;
                powers.innerHTML = list.heroes[i].abilities ;


                var clone = tmp.content.cloneNode(true);
                target.appendChild(clone);
            });
        });
})();
