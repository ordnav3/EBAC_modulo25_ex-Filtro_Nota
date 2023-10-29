//Classe Construtora

class Aluno {
    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    }
};

//Abstração

const alunos = [];

let aluno1 = new Aluno('Evandro', 10);
alunos.push(aluno1);

let aluno2 = new Aluno ('Eduardo', 0);
alunos.push(aluno2);

let aluno3 = new Aluno ('Maria', 5);
alunos.push(aluno3);

let aluno4 = new Aluno ('Ana', 7);
alunos.push(aluno4);

let aluno5 = new Aluno ('Juliana', 8);
alunos.push(aluno5);

console.log(alunos);


//Filtro de nota

function filtroNota(aluno){
    return aluno.nota >= 6;
}

const alunosAprovados = alunos.filter(filtroNota);

console.log(alunosAprovados)