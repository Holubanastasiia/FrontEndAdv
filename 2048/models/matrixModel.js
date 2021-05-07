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
    return Math.floor(Math.random() * 4)
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


    if (key === 'ArrowLeft') {
        var len = this.attributes.grid.length;
        var arr = this.attributes.grid;

        // for (i = 0; i < len; i += 1) {
        //     if (arr[i][j] != "") {
        //         arr.unshift(arr[i][j]);
        //     }
        // }
        //     function moveLeftByLine(arr) {
        //         for (let i = 0; i < arr.length; i++) {
        //             moveLeftByCell(arr, i);
        //         }
        //     }
        //     this.publish('changeData');

        //     function moveLeftByCell(arr, i) {
        //         for (let j = 0; j < arr[i].length; j++) {
        //             // Если это ноль - пропускаем
        //             if (arr[i][j] == "") {
        //                 continue;
        //             }

        //             // проверяем, можем ли добавить число справа
        //             let l = j;
        //             while (++l < arr[i].length) {
        //                 if (arr[i][l] == arr[i][j]) {
        //                     break;
        //                 } else if (arr[i][l] != "") {
        //                     l = j;
        //                     break;
        //                 }
        //             }

        //             // если можем - добавляем
        //             if (l < arr[i].length && l > j) {
        //                 arr[i][j] = (+arr[i][l] * 2) + "";
        //                 arr[i][l] = "";
        //             }

        //             // Проверяем, можем ли мы подвинуть число влево и если да, то на сколько позиций
        //             let k = j;
        //             while (--k >= -1) {
        //                 if (arr[i][k] != "") {
        //                     k++;
        //                     break;
        //                 }
        //             }

        //             // если можем - двигаем
        //             if (k >= 0 && k < j) {
        //                 arr[i][k] = arr[i][j];
        //                 arr[i][j] = "";
        //             }
        //         }
        //     }
        //     this.publish('changeData');
        //     function showGrid(flag) {
        //         console.log('----- ' + flag + ' -----');

        //         for (let i = 0; i < grid.length; i++) {
        //             console.log(grid[i].join(' '));
        //         }
        //     }

        //     showGrid("main");
        //     moveLeftByLine(this.attributes.grid);
        //     showGrid("after left move");
        // 
        // this.publish('changeData');
        // console.log(this.attributes.grid[i][j]);
    }
}





