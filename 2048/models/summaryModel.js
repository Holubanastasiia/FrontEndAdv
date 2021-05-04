function SummaryModel() {
    this.attributes = {
        totalScore: 0,
        bestScore: 0,
    }
}

SummaryModel.prototype.startNewGame = function () {

    this.publish('changeInfo');
}