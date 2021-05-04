function MatrixModel() {
    BaseModel.call(this);
    this.attributes = {
        size: {
            width: 4,
            height: 4,
        },
        grid: [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
        ]
    }

    // SINGLETON
    var instance = this;
    MatrixModel = function () {
        return instance;
    }
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

function getRandomNum() {
    if (Math.random() < 0.5) {
        return "2"
    } else {
        return "4";
    }
};

function getRandomGrid() {
    return Math.floor(Math.random() * (4))
};

MatrixModel.prototype.startNewGame = function () {
    this.attributes.grid[getRandomGrid()][getRandomGrid()] = getRandomNum();
    this.publish('changeData');

}


MatrixModel.prototype.makeActionByKey = function (key) {

    var i = getRandomGrid();
    var j = getRandomGrid();


    if (this.attributes.grid[i][j] === "") {
        this.attributes.grid[i][j] = getRandomNum();
    }

    this.publish('changeData');



}

MatrixModel.prototype.make = function () {

    document.addEventListener('keydown', function (event) {

        if (event.code == 'ArrowLeft') {
            var len = this.attributes.grid.length;
            var arr = this.grid;
            for (i = 0; i < len; i += 1) {
                arr.unshift(arr[i]);
            }
            arr.splice(0, len);

        }
        console.log(len);
    });
    this.publish('changeData');
}




