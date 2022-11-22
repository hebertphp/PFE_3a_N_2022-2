const saida=document.querySelector('.saida');
const estudante=['Astrogildo','Belarmina','Pafuncia'];

for (let i in estudante){
    saida.innerHTML+=`${i} - ${estudante[i]}<br>`;
}