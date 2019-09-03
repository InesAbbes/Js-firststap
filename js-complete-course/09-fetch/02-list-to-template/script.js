/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
document.getElementById("run").addEventListener("click", function () {

      fetch("http://localhost:63342/Js-firststap/js-complete-course/_shared/api.json")
          .then(function (response) {
                return response.json();
                  })

                  .then(function (data) {
                        console.log(data);
                        data.heroes.forEach(function (hero) {
                            const tmpl = document.getElementById('tpl-hero').content.cloneNode(true);
                            tmpl.querySelector('.name').innerText = hero.name;
                            tmpl.querySelector('.alter-ego').innerText = hero.alterEgo;
                            tmpl.querySelector('.powers').innerText = hero.abilities;

  document.getElementById("target").appendChild(tmpl);
  });

 });
 });
  })();

