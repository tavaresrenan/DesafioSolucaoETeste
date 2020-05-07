/*
calcule quanta água é capaz de reter após a chuva
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

observações:
para acumular água é preciso existir:
1,0,1  => 1
1,0,2+ => 1
+2,0,1 => 1

-> valor minimo: 3

[
    3 - 1 = 2
        1 - 0 = 1
        0 - 1 = -1
        1 - 2 = -1
    2 - 0 = 2
        0 -1 = -1
        1 - 0 = 1
        
    3-2 = 1
        2-1 = 1
        1-2= -1
        2-1= 1
    1-0 = 1

] = 6
array_max
array_max_pos 
splita ao meio e diminui esquerda para direita

*/

class Four {

    constructor(arr){
        this.arr = arr;
    }

    solution() {
        if(this.arr.length < 3 ) return 0;
        if(this.arr.length == 3 && (this.arr[0] == 0 && this.arr[this.arr.length-1] ==0)) return 0;
        
        const array_max = this.arr.reduce(function(a, b) {
            return Math.max(a, b);
          });
        const max_pos = this.arr.indexOf(array_max);
        let   n_left  = 0,
              n_right = 0;
    
        for(let i = max_pos; i < this.arr.length; i++) {
            if(i < this.arr.length-1) n_left += this.arr[i] - this.arr[i+1];
            else if(this.arr[i] < 3) n_left += this.arr[i] - 0;        
           
        }
        for(let i = max_pos; i > 0; i--) {
            n_right += this.arr[i] - this.arr[i-1];
        }
    
        return n_left + n_right;
    }

 }

module.exports = Four;