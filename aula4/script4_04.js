let a,b;
a=prompt("Digite o nome");
b=prompt("Digite o sobrenome");
document.write (`${a} ${b}`);
b+=" ";
b+=a;
document.write ("<br>"+ b);