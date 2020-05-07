/*

Input: [7,1,5,3,6,4]
Output: 5 (Comprou no dia 2 (preço igual a 1) e vendeu no dia 5 (preço igual a 6), lucro foi de 6 – 1 = 5
Input: [7,6,4,3,1]
Output: 0 (Nesse caso nenhuma transação deve ser feita, lucro máximo igual a 0)

Ideia final:
Percorrer o array dos preços verificando os seguintes cenários:
Se o valor da posição atual for maior que o valor da posição anterior 
entao adiciona em uma variavel comparando quem é o maior: o lucro atual ou o lucro da posição atual
caso contrário, atualiza o valor do mínimo.

*/

class Three {

    constructor(arr){
        this.arr = arr;
    }

    solution() {
        let min = this.arr[0];
        let gain = 0;

        for(let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] > this.arr[i -1]) {
                gain = Math.max(gain, this.arr[i] - min);
            } else {
                min = Math.min(min, this.arr[i]);;
            }
        }

        return gain;
    }

 }

module.exports = Three;