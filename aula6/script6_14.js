const saida=document.querySelector('.saida');

const login=["admin","root"];
saida.innerHTML=login+"<hr>";
login.push("astrogildo");
saida.innerHTML+=login+"<hr>";
login.unshift("belinha");
saida.innerHTML+=login+"<hr>";