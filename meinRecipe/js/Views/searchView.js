class searchView {
  _parentElement = document.querySelector(".nav__form");

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  getQuery() {
    const query = this._parentElement.querySelector(".nav__input").value;
    this.clearInput();
    return query;
  }

  clearInput() {
    this._parentElement.querySelector(".nav__input").value = "";
  }
}
export default new searchView();
