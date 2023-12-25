// FACTORY FUNCTIONS

function criaPessoa(nome, sobrenome,altura, peso) {
    return {
        nome,
        sobrenome,
        // metodo
        fala (assunto){
            return `${this.nome} esta ${assunto}`
        },
        altura: altura,
        peso: peso,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('edgar','Mendes','1.8', 80);
const p2 = criaPessoa('Luiz','Otavio',1.8,80);

console.log(p2.fala('falando sobre js'));
console.log(p1.fala('falando sobre js'));
console.log(p1.imc());