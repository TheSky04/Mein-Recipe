export default class View {
  _parentElement;
  _data;
  _successMessage;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    let html = `
    <div class="renderSpinner">
        <i class="fa-solid fa-spinner renderSpinner__icon"></i>
    </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  renderError(message = this._errorMessage) {
    let html = `
    <div class="error">
        <p class="error__text">
        <i class="fa-solid fa-triangle-exclamation error__icon"></i>
        ${message}
        </p>
    </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  renderMessage(message = this._successMessage) {
    let html = `
    <div class="message">
        <i class="fa-regular fa-face-smile message__icon"></i>
        <p class="message__text">
          ${message}
        </p>
    </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
