const saida=document.querySelector('.saida');

var uf=["SP","RJ","ES","MG"];
for (let i=0;i<uf.length;i++){
    saida.innerHTML+=`${i} - ${uf[i]}<br>`;
}