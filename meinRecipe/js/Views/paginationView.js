import View from "./View.js";

class paginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerPagination(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".pagination__btn");
      if (!btn) return;
      const goPage = +btn.dataset.goPage;
      handler(goPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    // page 1 and there are others
    if (currentPage === 1 && numPages > 1) {
      return `
      <button class="pagination__btn pagination__btn--prev hidden--prev">
          <p class="pagination__text">
          &larr; Page <span class="pagination__number">${currentPage - 1}</span>
          </p>
      </button>
        <button data-go-page="${
          currentPage + 1
        }" class="pagination__btn pagination__btn--next">
            <p class="pagination__text">
            Page <span class="pagination__number">${
              currentPage + 1
            }</span> &rarr;
            </p>
        </button>
      `;
    } else if (currentPage > 1 && numPages > currentPage) {
      return `
        <button data-go-page="${
          currentPage - 1
        }" class="pagination__btn pagination__btn--prev ">
            <p class="pagination__text">
            &larr; Page <span class="pagination__number">${
              currentPage - 1
            }</span>
            </p>
        </button>
        <button data-go-page="${
          currentPage + 1
        }" class="pagination__btn pagination__btn--next">
            <p class="pagination__text">
            Page <span class="pagination__number">${
              currentPage + 1
            }</span> &rarr;
            </p>
        </button>
      `;
    } else if (currentPage > 1 && numPages === currentPage) {
      return `
        <button data-go-page="${
          currentPage - 1
        }" class="pagination__btn pagination__btn--prev">
            <p class="pagination__text">
            &larr; Page <span class="pagination__number">${
              currentPage - 1
            }</span>
            </p>
        </button>
      `;
    } else {
      return ``;
    }
  }
}

export default new paginationView();
