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

let maxPrice = 0;
products.forEach((pr) => {
  maxPrice = Math.max(maxPrice, pr.price);
});

/**
 * @type {HTMLSelectElement}
 */
const sortDropdown = document.getElementById("sort-dropdown");
sortDropdown.value = query.get("sorting") ?? "rating";

/**
 * @type {HTMLInputElement}
 */
const priceSlider = document.getElementById("price-slider");
priceSlider.max = maxPrice;
priceSlider.value = query.get("max-price") ?? maxPrice;

/**
 * @type {HTMLInputElement}
 */
const ratingSlider = document.getElementById("rating-slider");
ratingSlider.value = query.get("min-rating") ?? 0;

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
  const search = query.get("search");
  const params = search ? new URLSearchParams({ search }) : "";
  window.location.href = `${window.location.pathname}?${params}`;
};
