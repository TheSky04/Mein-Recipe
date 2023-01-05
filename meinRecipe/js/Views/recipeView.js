import View from "./View.js";

class recipeView extends View {
  _parentElement = document.querySelector(".recipe__right");
  _errorMessage =
    "The recipe you have been searched is not found. Please try another one!";

  addHandlerRecipe(handler) {
    window.addEventListener("load", handler);
    window.addEventListener("hashchange", handler);
  }

  addHandlerServings(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".details__icon");
      if (!btn) return;
      const updateServings = +btn.dataset.updateServings;
      handler(updateServings);
    });
  }

  addHandlerBookmark(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".details__bookmark");
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    return `
    <div class="details">
            <img
              class="details__img"
              src="${this._data.imageUrl}"
              alt="${this._data.title}
            "
            />
            <div class="details__detail">
              <p class="details__title">${this._data.title}</p>
              <div class="details__detail--box">
                <div class="details__container">
                  <i class="fa-regular fa-clock details__icon"></i>
                  <p class="details__time"><span>${
                    this._data.cookingTime
                  }</span> Minutes</p>
                </div>
                <div class="details__container details__servings">
                  <i class="fa-solid fa-person details__icon"></i>
                  <p class="details__time">
                    <span class="details__servings--number">${
                      this._data.servings
                    }</span> Servings
                  </p>
                  <i data-update-servings="${this._data.servings - 1}"
                    class="fa-sharp fa-solid fa-circle-minus details__icon details__icon--pointer"
                  ></i>
                  <i data-update-servings="${this._data.servings + 1}"
                    class="fa-sharp fa-solid fa-circle-plus details__icon details__icon--pointer"
                  ></i>
                  
                </div>
                <div class="details__container">
                  <i
                    class="fa-${
                      this._data.bookmarked ? "solid" : "regular"
                    } fa-bookmark details__bookmark ${
      this._data.bookmarked ? "" : "details__icon--pointer"
    }"
                  ></i>
                </div>
              </div>
            </div>
            <div class="details__ingredients">
              <p class="details__ingredients--title">Recipe Ingredients</p>
              <ul class="details__list">
                ${this._data.ingredients
                  .slice(0, 6)
                  .map((ing) => {
                    return `
                  <li class="details__item">
                    <i class="fa-solid fa-check details__icon"></i>
                    <span>${ing.quantity ? ing.quantity.toFixed(1) : ""} ${
                      ing.unit
                    } ${ing.description}</span>
                  </li>
                  `;
                  })
                  .join("")}
                
              </ul>
            </div>
            <div class="details__howtocook">
              <p class="details__howtocook--title">How to cook ?</p>
              <p class="details__howtocook--text">
                This recipe was carefully designed and tested by
                <span class="publisher">${
                  this._data.publisher
                }</span>. Please check out
                directions at their website.
              </p>
              <div class="text-center">
                <a href="${
                  this._data.sourceUrl
                }" target="_blank" class="details__howtocook--btn">
                  Go to their website &rarr;
                </a>
              </div>
            </div>
          </div>
    `;
  }
}

export default new recipeView();
