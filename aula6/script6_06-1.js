const saida=document.querySelector('.saida');
//                0           1         2         3        4          5         6
const semana = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];
for (let i = 0; i < 7; i++){
    saida.innerHTML+=`${semana[i]}  é o ${i+1}o dia da semana!<br>`;
}
