let estado = "estou estudando";

switch(estado) {
  case 'aprovada':
    console.log('Sua situação atual é [APROVADA(O)]');;
    break;
  case 'lista':
    console.log('Sua situação atual é [LISTA DE ESPERA]')
    break;
  case 'reprovada':
    console.log('Sua situação atual é [REPROVADA(O)]');
    break;
  default:
    console.log('Não se aplica');
}