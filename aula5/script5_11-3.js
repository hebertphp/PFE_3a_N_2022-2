const uf=["SP","RJ","MG","SC","TO","AM","MS"];
const uf_saida=document.querySelector("#uf");
for(let i=0;i<uf.length;i++){
    uf_saida.innerHTML+=` <option value="${uf[i]}">${uf[i]}</option>`;
}