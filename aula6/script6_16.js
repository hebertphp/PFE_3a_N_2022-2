const saida=document.querySelector('.saida');

var uf=["SP","RJ","AC","TO","MG"];
saida.innerHTML=uf+"<hr>";
uf.sort();
saida.innerHTML+=uf+"<hr>";
uf.reverse();
saida.innerHTML+=uf+"<hr>";