const QuestionFactory = require('./question');

const one = QuestionFactory.create('one', { arr: [2, 7, 11, 15], alvo: 9 });
console.log(one.solution());

const two = QuestionFactory.create('two', { arr: '{[()]}' });
console.log(two.solution());

const three = QuestionFactory.create('three', { arr: [7, 1, 5, 3, 6, 4] });
console.log(three.solution());

const four = QuestionFactory.create('four', { arr: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] });
console.log(four.solution());