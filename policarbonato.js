// Classe de Abstração
function Policarbonato(fabricante, cor) {
    this.fabricante = fabricante;
    this.cor = cor;

}

// Classes Herdeiras
function Compacto (fabricante, cor, durabilidade){
    this.durabilidade = durabilidade;

    Policarbonato.call(this, fabricante, cor);

    this.enrolar = function(especuraEmMilimetros){
        if (especuraEmMilimetros <= 6){
            return "Pode enrolar";
        }
        else{
            return "Não pode enrolar";
        }
    }
}

function Alveolar (fabricante, cor, refletividade){
    this.refletividade = refletividade
    Policarbonato.call(this, fabricante, cor);

}

// Instâncias de objetos
const compacto1 = new Compacto("Emiretes", "Cinza", "10 anos");
const compacto2 = new Compacto("Actos", "Fume", "5 anos");
const alveolar1 = new Alveolar("Sabric", "Branco", "80%");
const alveolar2 = new Alveolar("Amazonas", "Bronze", "40%");

console.log(compacto1);
console.log(compacto1.enrolar(8));

console.log(compacto2);
console.log(compacto2.enrolar(4));

console.log(alveolar1);

console.log(alveolar2);