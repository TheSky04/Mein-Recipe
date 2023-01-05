import View from "./View.js";

class bookmarkView extends View {
  _parentElement = document.querySelector(".bookmarks__list");

  _generateMarkup() {
    const id = window.location.hash.slice(1);

    return `${this._data
      .map((result) => {
        return `
        <a href="#${result.id}" class="recipe__item ${
          result.id === id ? "recipe__item--active" : ""
        }">
            <img
            class="recipe__image"
            src="${result.imageUrl}"
            alt="${result.title}"
            />
            <div class="recipe__item--detail">
            <p class="recipe__item--title">${result.title}</p>
            <p class="recipe__item--publisher">${result.publisher}</p>
            </div>
        </a>
        `;
      })
      .join("")}`;
  }
}

export default new bookmarkView();
