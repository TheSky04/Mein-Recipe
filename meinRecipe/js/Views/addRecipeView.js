import View from "./View.js";

class addRecipeView extends View {
  _addRecipeButton = document.querySelector(".nav__details-addRecipe");
  _overlay = document.querySelector(".overlay");
  _modal = document.querySelector(".modal");
  _modalTimesButton = document.querySelector(".modal__times");
  _recipeRight = document.querySelector(".recipe__right");
  _parentElement = document.querySelector(".modal__form");

  _successMessage = "Your recipe has been successfully loaded :)";

  constructor() {
    super();
    this._addRecipeButton.addEventListener("click", this.showForm.bind(this));
    this._modalTimesButton.addEventListener("click", this.closeForm.bind(this));
    this._overlay.addEventListener("click", this.closeForm.bind(this));
  }

  addHandlerForm(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = [...new FormData(this)];
      const recipe = Object.fromEntries(data);

      handler(recipe);
    });
  }

  showForm() {
    this._overlay.classList.remove("hidden");
    this._modal.classList.remove("hidden");
  }

  closeForm() {
    this._overlay.classList.add("hidden");
    this._modal.classList.add("hidden");
  }
}

export default new addRecipeView();
