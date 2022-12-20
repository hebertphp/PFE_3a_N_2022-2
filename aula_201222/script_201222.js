const saida=document.querySelector('.saida');
//             0          1         2         3 
const nomes=["Lucas", "Daniela","Aderbal","Timóteo"];
//const estudante=["Aderbal",123456789,"TADS",1];
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
saida.innerHTML+=aluno.semestre+"<br>";
console.log(aluno);//comando de saída e direciona para o console

/*
https://www.w3schools.com/js/js_objects.asp
*/