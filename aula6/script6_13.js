const saida=document.querySelector('.saida');

let notas=[10,9,8];
let outras_notas=[4,3,2,1];
saida.innerHTML=notas+"<hr>";
let novas_notas=notas.concat(7,6,5);
saida.innerHTML+=novas_notas+"<hr>";
let junta_tudo=novas_notas.concat(outras_notas);
saida.innerHTML+=junta_tudo+"<hr>";