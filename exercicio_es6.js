class Alunos {
    constructor(nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

class Aluno extends Alunos{}

const aluno1 = new Aluno('Maria', 9)
const aluno2 = new Aluno('João', 7)
const aluno3 = new Aluno('Diego', 4)
const aluno4 = new Aluno('Douglas', 3)
const aluno5 = new Aluno('Eduard', 6)
const aluno6 = new Aluno('Marcos', 2)

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6]


const alunosNaMedia = alunos.filter(function(item){
    return item.nota >= 6
})

console.log(alunosNaMedia)
