function table(rows, columns) {
    var table = document.querySelector('table');
    for (var i = 0; i < rows; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
            td = document.createElement("td");
            $(td).attr("data-pos", `${i}-${j}`)
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
table(3, 3);

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


var contentTd = document.querySelectorAll("td");
contentTd.forEach(e => e.addEventListener("click", createHTML));

var player = false;
var count = 0, countX = 0, countY=0, countN = 0;
var perX = 0 ,  perY = 0 , perN = 0;
var id = null;
function getWinner(str){
var sum = countX + countY + countN;
    if(id) return;
    if (str === "XXX") {
      id =  setTimeout(function(){
             if(confirm("win 'X'")){
                 if(localStorage.getItem("key")){
                    countX = +localStorage.getItem("key");
                    countX ++;
                    localStorage.setItem("key",  countX );
                }else{
                    countX  = 0;
                    localStorage.setItem("key",  countX );
                }
                console.log(localStorage.getItem("key"));
               
               perX = countX * 100 / sum;
                // document.location.reload(true);
             }else{
                 alert("Вы закончили игру")
                 localStorage.clear();
                //  document.location.reload(true);
             };
             id = null; 
        },1000)           
    } else if (str === "OOO") {
       id =  setTimeout(function(){
           if( confirm("win 'O'")){
               
            if(localStorage.getItem("key")){
                countY = +localStorage.getItem("key");
                countY ++;
                localStorage.setItem("key",  countY );
            }else{
                countY  = 0;
                localStorage.setItem("key",  countY );
            }
            console.log(localStorage.getItem("key"));
            
            perY = countY * 100 / sum;
            // document.location.reload(true); 
           }else{
            alert("Вы закончили игру");
            localStorage.clear();
            // document.location.reload(true);
           }
           id = null;
        },1000)
    } else if(count == 9){
      id =  setTimeout(function(){
            if(confirm("no winner")){
                
                if(localStorage.getItem("key")){
                    countN = +localStorage.getItem("key");
                    countN ++;
                    localStorage.setItem("key",  countN );
                }else{
                    countN  = 0;
                    localStorage.setItem("key",  countN );
                }
                console.log(localStorage.getItem("key"));

                
                perN = countN * 100 / sum;
                // document.location.reload(true);   
            }else{
                alert("Вы закончили игру");
                localStorage.clear();
                // document.location.reload(true);
            } 
            id = null;          
        },1000)
    }
    document.querySelector(".rezult").innerHTML = `Sum : ${sum} Player X : ${perX}% Player Y : ${perY}% Draw : ${perN}%`
}
function createHTML() {

    if (!this.className) {
        player = !player;
        console.log(player);
        this.classList.add(player ? "cross" : "zero");
        var i = $(this).attr("data-pos").split("-");
        var target = player ? "cross" : "zero";
        field[+i[0]][+i[1]] = target == "cross" ? "X" : "O";
        count++;
        if(field[+i[0]][+i[1]] == "X"){
            document.querySelector(".step").innerHTML =  'O'
        }else{          
            document.querySelector(".step").innerHTML = 'X'
        }
    }

    var str = [`${field[0][0]}${field[0][1]}${field[0][2]}`,
    `${field[1][0]}${field[1][1]}${field[1][2]}`,
    `${field[2][0]}${field[2][1]}${field[2][2]}`,
    `${field[0][0]}${field[1][0]}${field[2][0]}`,
    `${field[0][1]}${field[1][1]}${field[2][1]}`,
    `${field[0][2]}${field[1][2]}${field[2][2]}`,
    `${field[0][0]}${field[1][1]}${field[2][2]}`,
    `${field[2][0]}${field[1][1]}${field[0][2]}`];

        
    for (var i = 0 ; i < str.length ; i++){        
        getWinner(str[i]);

    }

    // if( count == 9){
    //     setTimeout(function(){
    //         confirm("no winner")
    //         event.preventDefault()
    //     },1000)
    // }

    document.getElementById("test").innerHTML = `<pre>${JSON.stringify(
        field,
        0,
        2
    )}</pre>`;
   
}

var field = [["", "", ""], ["", "", ""], ["", "", ""]];




