const saida=document.querySelector('.saida');
//             0          1         2         3 
const nomes=["Lucas", "Daniela","Aderbal","Timóteo"];
//const estudante=["Aderbal",123456789,"TADS",1];
//const nome=[valor, valor]; é um array
//const nome={propriedade:"valor_string",propriedade:valor}; é um objeto
const aluno={
    nome:"Aderbal",
    ra:123456789,
    curso:"TADS",
    semestre:1
};

// saida.innerHTML=nomes[2];//Aderbal
saida.innerHTML=aluno.nome+"<br>";
saida.innerHTML+=aluno.ra+"<br>";
saida.innerHTML+=aluno.curso+"<br>";
saida.innerHTML+=aluno.semestre+"<hr>";
console.log(aluno);//comando de saída e direciona para o console

const presente={
    nome:"PS5",
    jogo:"God of war",
    valor:5000,
    tipo:"🎁"
}
saida.innerHTML+=presente.nome+"<br>";
saida.innerHTML+=presente.jogo+"<br>";
saida.innerHTML+=presente.valor+"<br>";
saida.innerHTML+=presente.tipo+"<br>";
saida.innerHTML+=presente["tipo"]+"<hr>";
for (let prop in presente){
    saida.innerHTML+=`${prop}: ${presente[prop]}<br>`;
}    
/*
Desafio:
Criar um objeto presente_natal
com pelo menos 3 propriedades, sendo uma delas o valor do presente(R$)
Mostrar os dados na página
*/

/* https://www.w3schools.com/js/js_objects.asp */