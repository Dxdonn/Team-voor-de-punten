const genres = new Set();
products.forEach((pr) => pr.genres.forEach((gen) => genres.add(gen)));
const languages = new Set();
products.forEach((pr) => languages.add(pr.language));
let maxPrice = 0;
products.forEach((pr) => {
  maxPrice = Math.max(maxPrice, pr.price);
});

/**
 * @type {HTMLInputElement}
 */
const priceSlider = document.getElementById("price-slider");
priceSlider.max = maxPrice;
priceSlider.value = maxPrice;

const genreHtmlTemplate = (genreName) => `\
<input type="radio" id="genre-${genreName}" name="genre" value="${genreName}">
<label for="genre-${genreName}">${genreName}</label> <br/>
`;

const genreHtml = Array.from(genres)
  .map((gen) => genreHtmlTemplate(gen))
  .join("\n");

setContent("filter-genre", genreHtml, "innerHTML");

const languageHtmlTemplate = (language) => `\
<input type="radio" id="language-${language}" name="language" value="${language}">
<label for="language-${language}">${language}</label> <br/>
`;

const languageHtml = Array.from(languages)
  .map((lan) => languageHtmlTemplate(lan))
  .join("\n");

setContent("filter-language", languageHtml, "innerHTML");
