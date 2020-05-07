/*

{[()]} SIM
{[(])} NAO
{{[[(())]]}} SIM

Ideia final:
transformar o texto em um array de char.
criar um loop verificando se existe os brackets abertos e fechados somando/diminuindo no acumulador.
*/

const bracketsOpened = ['[', '{', '('];
const bracketsClosed = [']', '}', ')'];

class Two {

    constructor(text){
        this.text = text;
    }

    solution() {
        var result = !this.text.split('').reduce((acc, element) => {

            if(element === bracketsOpened[0] || element === bracketsOpened[1] || element === bracketsOpened[2] ) {
                return ++acc;
            } else if (element === bracketsClosed[0] || element === bracketsClosed[1] || element === bracketsClosed[2] ) {
                return --acc;
            }
    
            return acc
        }, 0);
        return result;
    }

 }

module.exports = Two;