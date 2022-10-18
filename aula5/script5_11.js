let i,j;
const saida=document.querySelector(".saida");
for (i=0; i<3; i++) {
 for (j=0; j<4; j++) {
   saida.innerHTML+=`${i} ${j}<br>`;
 }
}
