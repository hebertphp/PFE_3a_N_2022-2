let destino,msg;
const saida=document.querySelector(".saida");
destino=prompt("Digite seu destino: ");
switch (destino) {
  case "São Paulo":
    msg="Seja bem vindo a cidade que nunca para!";
  break;
  case "New York":
    msg="Seja bem vindo a Big Apple!";
  break;
  default:
    msg="Não encontramos seu destino!";
}
saida.innerHTML=msg;