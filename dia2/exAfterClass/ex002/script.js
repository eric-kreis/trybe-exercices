const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (objeto, chave, valor) => objeto[chave] = valor;

const listaChaves = (objeto) => Object.keys(objeto);

const tamanhoObjeto = (objeto) => listaChaves(objeto).length;

const listaValores = (objeto) => Object.values(objeto);

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3),
};

const totalAlunos = () => {
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
} 

const valorPosicao = (objeto, posicao) => {
  const chaves = listaChaves(objeto);
  return objeto[chaves[posicao]];
}

const verificaPar = (objeto, chave, valor) => {
  const chavesValores = Object.entries(objeto)
  for (const chaveValor of chavesValores) {
    if (chaveValor[0] === chave && chaveValor[1] == valor) { 
    return true;
    }
  }
  return false;
}

const relatorio = (professor, aulas, numeroEstudantes) =>
({professor: professor, aulas: aulas, estudantes: numeroEstudantes});

const criaRelatorio = (objeto, professor) => {
  let numeroEstudantes = 0;
  const aulas = [];
  for (const key in objeto) {
    const chave = objeto[key];
    if (chave.professor === professor) {
      numeroEstudantes += chave.numeroEstudantes;
      aulas.push(chave.materia);
    }
  }
  return relatorio(professor, aulas, numeroEstudantes);
}

adicionaTurno(lesson2, 'turno', 'manhã');
console.log(listaChaves(lesson2));
console.log(tamanhoObjeto(lesson2));
console.log(listaValores(lesson2));
console.log(allLessons);
console.log(totalAlunos());
console.log(valorPosicao(lesson2, 0));
console.log(verificaPar(lesson2, 'turno', 'manhã'));
console.log(criaRelatorio(allLessons, 'Maria Clara'));