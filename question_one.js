/*
Dado nums = [2, 7, 11, 15],
     alvo = 9,
Como nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]

Ideia final:
Criar um objeto que será mapeado com o valor: alvo - número atual
Ex:
9 - 2 = 7 -> Match com 7
Na passada seguinte, caso tenha o match já retorna os dados.
 */

 class One {

    constructor(nums, alvo){
        this.nums = nums;
        this.alvo = alvo;
    }

    solution() {
        const _objMap = {};
        for (let i = 0; i < this.nums.length; i++) {
            const number = this.nums[i];
            if (_objMap.hasOwnProperty(number)) {
                return [_objMap[number], i];
            }
            const newNumber = this.alvo - number;
            _objMap[newNumber] = i;
        }
    }

 }

module.exports = One;