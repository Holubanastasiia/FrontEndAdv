function BaseView() {
    this.rootElement = document.createElement('div');
}

BaseView.prototype.show = function (element) {
    this.beforeRender();
    this.rootElement.innerHTML = this.render();
    this.rootElement.classList.add(this.className);
    element.appendChild(this.rootElement);
    this.afterRender();
}

BaseView.prototype.beforeRender = function () { };
BaseView.prototype.afterRender = function () { };

BaseView.prototype.reRender = function () {
    console.log('reRender')
    this.beforeUpdate();
    this.rootElement.innerHTML = this.render();
    this.afterUpdate();
};

BaseView.prototype.beforeUpdate = function () { };
BaseView.prototype.afterUpdate = function () { };
