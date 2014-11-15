var board = require('../board');
var expect = require('chai').expect;

describe('board', function(){
    describe('tick', function(){
        beforeEach(function(){
            board.init();
        });
        it('should kill cells with fewer than 2 neighbors', function(){
            board.cells[50][50] = true;
            board.tick();
            expect(board.cells[50][50]).to.be.false();
        });
        it('should kill cells with more than 3 neighbors', function(){
            board.cells[50][50] = true;
            board.cells[50][49] = true;
            board.cells[50][51] = true;
            board.cells[49][50] = true;
            board.cells[49][49] = true;
            board.tick();
            expect(board.cells[50][50]).to.be.false();
        });
        it('should keep a cell with 2 neighbors alive', function(){
            board.cells[50][50] = true;
            board.cells[50][49] = true;
            board.cells[50][51] = true;
            board.tick();
            expect(board.cells[50][50]).to.be.true();
        });
        it('should keep a cell with 3 neighbors alive', function(){
            board.cells[50][50] = true;
            board.cells[50][49] = true;
            board.cells[50][51] = true;
            board.cells[49][51] = true;
            board.tick();
            expect(board.cells[50][50]).to.be.true();
        });
        it('should birth a dead cell with 3 neighbors alive', function(){
            board.cells[50][49] = true;
            board.cells[50][51] = true;
            board.cells[49][51] = true;
            board.tick();
            expect(board.cells[50][50]).to.be.true();
        });
        it('should leave a dead cell dead with 2 neighbors', function(){
            board.cells[50][49] = true;
            board.cells[50][51] = true;
            board.tick();
            expect(board.cells[50][50]).to.be.false();
        });
    });
});