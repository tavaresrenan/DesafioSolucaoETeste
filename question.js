const One   = require('./question_one');
const Two   = require('./question_two');
const Three = require('./question_three');
const Four  = require('./question_four');

class QuestionFactory {
    create(type, opts) {
        switch(type) {
            case 'one':
                return new One(opts.arr, opts.alvo);
            case 'two':
                return new Two(opts.arr);
            case 'three':
                return new Three(opts.arr);
            case 'four':
                return new Four(opts.arr);
            default: {
                console.log('Questão nao encontrada');
            }
        }
    }
}
module.exports = new QuestionFactory();