/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
document.getElementById("run").addEventListener("click", function () {
   window.lib.getPosts() //you call promise in this file
       .then(function (list) { // we have to use .then , to specify what needs to happen when promise is returned
           console.log(list);// we need to show the list in console.
           return list ;// return to activate the function .

       });
});
})();
