const query = new URLSearchParams(window.location.search);

/**
 * @type {Set<string>}
 */
const genres = new Set();
products.forEach((pr) => pr.genres.forEach((gen) => genres.add(gen)));

/**
 * @type {Set<string>}
 */
const languages = new Set();
products.forEach((pr) => languages.add(pr.language));

let maxProductPrice = 0;
let minProductPrice = Number.POSITIVE_INFINITY;
products.forEach((pr) => {
  minProductPrice = Math.min(minProductPrice, pr.price);
  maxProductPrice = Math.max(maxProductPrice, pr.price);
});

const sorting = query.get("sorting") ?? "rating";
const maxPrice = query.get("max-price") ?? maxProductPrice;
const minRating = query.get("min-rating") ?? 0;
const genre = query.get("genre");
const language = query.get("language");
const search = query.get("search");

/**
 * @type {HTMLSelectElement}
 */
const sortDropdown = document.getElementById("sort-dropdown");
sortDropdown.value = sorting;

/**
 * @type {HTMLInputElement}
 */
const priceSlider = document.getElementById("price-slider");
priceSlider.min = minProductPrice;
priceSlider.max = maxProductPrice;
priceSlider.value = maxPrice;

/**
 * @type {HTMLInputElement}
 */
const ratingSlider = document.getElementById("rating-slider");
ratingSlider.value = minRating;

const getChecked = (name, queryParam) =>
  query.get(queryParam) === name ? "checked" : "";

const genreHtmlTemplate = (genreName) => /*HTML*/ `\
<input 
  type="radio" 
  id="genre-${genreName}" 
  name="genre" 
  value="${genreName}" 
  ${getChecked(genreName, "genre")}
>
<label for="genre-${genreName}">${genreName}</label> <br/>
`;

const genreHtml = Array.from(genres)
  .map((gen) => genreHtmlTemplate(gen))
  .join("\n");

setContent("filter-genre", genreHtml, "innerHTML");

const languageHtmlTemplate = (language) => /*HTML*/ `\
<input 
  type="radio" 
  id="language-${language}" 
  name="language" 
  value="${language}"
  ${getChecked(language, "language")}
>
<label for="language-${language}">${language}</label> <br/>
`;

const languageHtml = Array.from(languages)
  .map((lan) => languageHtmlTemplate(lan))
  .join("\n");

setContent("filter-language", languageHtml, "innerHTML");

/**
 * @type {HTMLButtonElement}
 */
const resetButton = document.getElementById("reset-button");
resetButton.onclick = () => {
  // when you click on reset, we want to reset all filters, except for the search filter
  const params = search ? new URLSearchParams({ search }) : "";
  window.location.href = `${window.location.pathname}?${params}`;
};

/**
 * @param {string} toMatch
 * @param {string} term
 * @param {string} ratio
 * @returns
 */
function fuzzy(toMatch, term, ratio) {
  const lowerCase = toMatch.toLowerCase();
  const compare = term.toLowerCase();
  let matches = 0;
  if (lowerCase.indexOf(compare) > -1) return true; // covers basic partial matches
  for (const letter of compare) {
    lowerCase.indexOf(letter) > -1 ? (matches += 1) : (matches -= 1);
  }
  return matches / this.length >= ratio || term == "";
}

const filteredResults = products.filter(
  (pr) =>
    ((genre && pr.genres.includes(genre)) || !genre) &&
    ((language && pr.language === language) || !language) &&
    ((search && fuzzy(pr.title, search, 0.6)) || !search) &&
    Math.round(pr.rating) >= Number(minRating) &&
    pr.price <= Number(maxPrice)
);

switch (sorting) {
  case "price-lh":
    filteredResults.sort((a, b) => a.price - b.price);
    break;
  case "price-hl":
    filteredResults.sort((a, b) => b.price - a.price);
    break;
  default:
    filteredResults.sort((a, b) => b.rating - a.rating);
}

const resultsHtml = filteredResults
  .map((pr) =>
    recommendationHtmlTemplate(
      pr.id,
      pr.image,
      pr.title,
      pr.author,
      pr.rating,
      pr.price
    )
  )
  .join("\n");

setContent("results", resultsHtml, "innerHTML");
