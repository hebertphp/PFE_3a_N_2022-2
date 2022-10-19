let av1, av2, media, res;

av1=parseFloat(prompt("Digite a nota AV1"));
av2=parseFloat(prompt("Digite a nota AV2"));

media = (av1 + av2) /2;

res=(media>=6)?"Aprovado":"Reprovado";

document.write(`Media= ${media} você está: ${res}`);
/*
Solicitar a entrada de duas notas (av1 e av2)
Calcular a média das duas notas
media = (av1 + av2) /2;
Qual a condição para mostrar uma das mensagens abaixo:
media >= 6
"Aprovado"
"Reprovado"
*/