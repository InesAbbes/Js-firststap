/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    fetch ("http://localhost:63342/Js-firststap/js-complete-course/_shared/api.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (list) {
    document.getElementById("run").addEventListener("click",function () {
        let heroName = document.getElementById("hero-name").value;
        let ego = document.getElementById("hero-alter-ego").value;
        let powers =document.getElementById("hero-powers").value;

         let newheroId = list.heroes.length +1;
         list.heroes.push({"id": newheroId ,
                           "name": heroName,
                           "alterEgo":  ego,
                           "abilities": powers,});

                 console.log(list.heroes);
    });
     });
})();
