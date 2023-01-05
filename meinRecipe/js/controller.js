"strict mode";

import { API_URL, KEY } from "./config.js";

import * as model from "./model.js";
import recipeView from "./Views/recipeView.js";

import searchView from "./Views/searchView.js";
import resultsView from "./Views/resultsView.js";
import paginationView from "./Views/paginationView.js";
import bookmarkView from "./Views/bookmarkView.js";
import addRecipeView from "./Views/addRecipeView.js";

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    resultsView.render(model.getSearchResultsPage());
    bookmarkView.render(model.state.bookmarks);
    await model.loadRecipe(`${API_URL}${id}`);
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    await model.getSearchResults(query);
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.renderError(
      "The recipe you have been searched is not found. Please try another one."
    );
  }
};

const controlPagination = function (goPage) {
  resultsView.render(model.getSearchResultsPage(goPage));
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  if (newServings < 1) return;
  model.updateServings(newServings);
  recipeView.render(model.state.recipe);
};

const controlBookmark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  recipeView.render(model.state.recipe);
  bookmarkView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    addRecipeView.renderMessage();
    window.history.pushState(null, "", `#${model.state.recipe.id}`);
    recipeView.render(model.state.recipe);
    bookmarkView.render(model.state.bookmarks);
    setTimeout(() => addRecipeView.closeForm(), 2500);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRecipe(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerPagination(controlPagination);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmark);
  addRecipeView.addHandlerForm(controlAddRecipe);
};
init();
