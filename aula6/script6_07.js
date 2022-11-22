const saida=document.querySelector('.saida');
const estudante=['Astrogildo','Belarmina','Pafuncia'];

for (let n of estudante){
    saida.innerHTML+=`${n}<br>`;
}