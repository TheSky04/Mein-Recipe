import { AJAX } from "./helpers.js";
import { API_URL, RES_PER_PAGE, KEY } from "./config.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    resultsPerPage: RES_PER_PAGE,
    page: 1,
    results: [],
  },
  bookmarks: [],
};

export const loadRecipe = async function (url) {
  try {
    const data = await AJAX(`${url}?key=${KEY}`);
    let recipe = data.data.recipe;
    state.recipe = {
      imageUrl: recipe.image_url,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cooking_time,
      servings: recipe.servings,
      publisher: recipe.publisher,
      title: recipe.title,
      id: recipe.id,
      ingredients: recipe.ingredients,
    };
    if (state.bookmarks.some((bookmark) => bookmark.id === state.recipe.id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    const { recipes } = data.data;
    state.search.results = recipes;
    state.search.page = 1;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach((ing) => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

const persistBookmark = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);

  if (state.recipe.id === recipe.id) {
    state.recipe.bookmarked = true;
  }

  persistBookmark();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex((bookmark) => bookmark.id === id);

  state.bookmarks.splice(index, 1);

  state.recipe.bookmarked = false;

  persistBookmark();
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter((entry) => entry[0].startsWith("ingredient") && entry[1] !== "")
      .map((ing) => {
        const ingArr = ing[1].replaceAll(" ", "").split(",");
        if (ingArr.length !== 3) {
          throw new Error(
            "Wrong ingredient format! Please use the correct format."
          );
        }
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      image_url: newRecipe.imageUrl,
      source_url: newRecipe.sourceUrl,
      cooking_time: newRecipe.cookingTime,
      servings: newRecipe.servings,
      title: newRecipe.title,
      publisher: newRecipe.publisher,
      ingredients,
      key: KEY,
    };

    const ajaxRecipe = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    const sendedRecipe = ajaxRecipe.data.recipe;
    console.log(sendedRecipe);
    state.recipe = {
      imageUrl: sendedRecipe.image_url,
      sourceUrl: sendedRecipe.source_url,
      cookingTime: sendedRecipe.cooking_time,
      servings: sendedRecipe.servings,
      title: sendedRecipe.title,
      publisher: sendedRecipe.publisher,
      ingredients,
      key: sendedRecipe.key,
      createdAt: sendedRecipe.createdAt,
      id: sendedRecipe.id,
    };
    addBookmark(state.recipe);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();
