const saida=document.querySelector('.saida');
const estudante=['Astrogildo','Belarmina','Pafuncia'];
//for(let var_simples of array)
//pegar todos os valores, um de cada vez, e atribui para a var_simples
for (let x of estudante){
    saida.innerHTML+=`${x}<br>`;
}
// [Ctrl][;] comentário