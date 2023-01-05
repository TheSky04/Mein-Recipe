import View from "./View.js";

class resultsView extends View {
  _parentElement = document.querySelector(".recipe__list");

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `${this._data
      .map((result) => {
        return `
        <li>
        <a href="#${result.id}" class="recipe__item ${
          result.id === id ? "recipe__item--active" : ""
        }">
            <img
            class="recipe__image"
            src="${result.image_url}"
            alt="${result.title}"
            />
            <div class="recipe__item--detail">
            <p class="recipe__item--title">${result.title}</p>
            <p class="recipe__item--publisher">${result.publisher}</p>
            </div>
        </a>
        </li>
        `;
      })
      .join("")}`;
  }
}

export default new resultsView();
