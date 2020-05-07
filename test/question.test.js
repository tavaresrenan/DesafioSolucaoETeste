const QuestionFactory = require('../question');
var expect  = require('chai').expect;

describe('Desafios', function() {
    describe('Questao 01', function() {
        it('Arr: [2, 7, 11, 15], Alvo: 9 -> Deve retornar [0,1]', function(done) {
            const one = QuestionFactory.create('one', { arr: [2, 7, 11, 15], alvo: 9 });
            expect(one.solution()).to.eql([0,1]);
            done();
        });
        it('Arr: [2, 7, 11, 15], Alvo: 52 -> Deve retornar undefined', function(done) {
            const one = QuestionFactory.create('one', { arr: [2, 7, 11, 15], alvo: 52 });
            expect(one.solution()).to.eql(undefined);
            done();
        });
    });
    describe('Questao 02', function() {
        it('Arr: {[()]} -> Deve retornar true', function(done) {
            const two = QuestionFactory.create('two', { arr: '{[()]}' });
            expect(two.solution()).to.equal(true);
            done();
        });
        it('Arr: {[(]} -> Deve retornar false', function(done) {
            const two = QuestionFactory.create('two', { arr: '{[(]}' });
            expect(two.solution()).to.equal(false);
            done();
        });
    });
    describe('Questao 03', function() {
        it('Arr: [7, 1, 5, 3, 6, 4] -> Deve retornar 5', function(done) {
            const three = QuestionFactory.create('three', { arr: [7, 1, 5, 3, 6, 4] });
            expect(three.solution()).to.equal(5);
            done();
        });
        it('Arr: [7,6,4,3,1] -> Deve retornar 0', function(done) {
            const three = QuestionFactory.create('three', { arr: [7, 6, 4, 3, 1] });
            expect(three.solution()).to.equal(0);
            done();
        });
    });
    describe('Questao 04', function() {
        it('Arr: [7, 1, 5, 3, 6, 4] -> Deve retornar 6', function(done) {
            const four = QuestionFactory.create('four', { arr: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] });
            expect(four.solution()).to.equal(6);
            done();
        });
        it('Arr: [2,0,2] -> Deve retornar 2', function(done) {
            const four = QuestionFactory.create('four', { arr: [2, 0, 2] });
            expect(four.solution()).to.equal(2);
            done();
        });
        it('Arr: [2,1,0,2] -> Deve retornar 1', function(done) {
            const four = QuestionFactory.create('four', { arr: [2, 1, 0, 2] });
            expect(four.solution()).to.equal(1);
            done();
        });
    });
});