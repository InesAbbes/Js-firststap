/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    // create an HTML table with 1 column and 10 rows.
    let target = document.getElementById("target");

    let table = document.createElement("table");
    table.setAttribute("id", "myTable");
    table.setAttribute("border",1);

    target.appendChild(table);
    for(let r=0; r<10; r++){

        let row =document.getElementById("myTable").insertRow(r);

        for(let c=0; c<10; c++){
            let col = row.insertCell(c);

            col.innerHTML = (r+1) * (c+1) ;
        }
    }

})();
