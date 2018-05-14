function table(rows,columns){
    var table = document.querySelector('table');  
    for (var i = 0; i < rows; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
          td = document.createElement("td");
          $(td).attr("data-pos",`${i}-${j}`)
          tr.appendChild(td);
        }
        table.appendChild(tr);
    }  
}
table(3,3);

// addPos();
// function addPos(){
//     var F = $("table tr");
//     for(var i=0; i<F.length;i++){
//         var T = $(F[i]).find("td");
//         for( var j = 0; j< T.length;j++){
//             $(T[j]).attr("data-pos",`${i}-${j}`);
//         }
//     }
// }


var  contentTd = document.querySelectorAll("td");
contentTd.forEach(e => e.addEventListener("click", createHTML));

var player = false;

function createHTML() {
  
 if (!this.className) {
   player = !player;
   console.log(player);
   this.classList.add( player ? "cross" : "zero");

    var i= $(this).attr("data-pos").split("-");
    var target = player ? "cross" : "zero";
    field[+i[0]][+i[1]] = target == "cross" ? "X" : "O";
}
 document.getElementById("test").innerHTML = `<pre>${JSON.stringify(
   field,
   0,
   2
 )}</pre>`;
}

var field = [["", "", ""], ["", "", ""], ["", "", ""]];

var winCombinations = [
    [00, 01, 02],
    [00, 10, 20],
    [00, 11, 22],
    [01, 11, 21],
    [02, 12, 22],
    [02, 11, 20],
    [10, 11, 12],
    [20, 21, 22]
]


