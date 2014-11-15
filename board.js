module.exports = {
    getFreshBoard: function(){
        var cells = [];
        for (var i = 0; i < 100; i++) {
            cells.push([]);
            for(var j = 0; j < 100; j++){
                cells[i][j] = false;
            }
        }
        return cells;
    },
    init: function(){
        this.cells = this.getFreshBoard();
    },
    cells: undefined,
    getNextState: function(x, y){
        var livingNeighbors = 0;
        livingNeighbors += this.cells[x-1][y-1];
        livingNeighbors += this.cells[x][y-1];
        livingNeighbors += this.cells[x+1][y-1];
        livingNeighbors += this.cells[x-1][y];
        livingNeighbors += this.cells[x+1][y];
        livingNeighbors += this.cells[x-1][y+1];
        livingNeighbors += this.cells[x][y+1];
        livingNeighbors += this.cells[x+1][y+1];
        var isCellAlive = this.cells[x][y] == true;
        if (isCellAlive) {
            if(livingNeighbors == 2 || livingNeighbors == 3){
                return true;
            }
        }
        else {
            if (livingNeighbors == 3) {
                return true;
            }
        }
        return false;
    },
    tick: function(){
        var nextStep = this.getFreshBoard();
        for(var i = 1; i < this.cells.length - 1; i++){
            for(var j = 1; j < this.cells[i].length - 1; j++){
                nextStep[i][j] = this.getNextState(i, j);
            }
        }
        this.cells = nextStep;
    }
};

module.exports.init();