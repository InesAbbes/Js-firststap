/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click",function () {

        window.lib.getPosts()
            .then(function (resolved) {
                console.log(resolved);

                resolved.forEach(function (post) { // perform a forEach loop on the array "resolved"
                    window.lib.getComments().then(function(addComment) { // then fetch another promis,in Comments
                        let comments = addComment[post.id];
                        if (comments !== undefined) {
                            post.comment = comments;
                        }
                        console.log(post);
                    });
                });
            });


    });
})();