/*
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
*/
let tabuada, i;
const saida=document.querySelector(".saida");
for(tabuada=0;tabuada<=10;tabuada++){
    for(i=0;i<=10;i++){
        saida.innerHTML+=`${tabuada} x ${i} = ${tabuada*i}<br>`;
    }
    saida.innerHTML+=`<hr>`;
}
