const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products.find((pr) => pr.id === productId);
const author = authors.find((at) => at.name === product.author);

setContent("product-image", `images/${product.image}`, "src");
setContent("product-author", product.author);
setContents("product-title", product.title);
setContent("product-language", product.language);
setContent("product-genres", product.genres.join(", "));
setContent("product-publish-date", product.publishDate.getFullYear());
setContent("product-isbn", product.isbn);
setContent("product-about", product.about);
setContent("product-price", displayPrice(product.price));
setContent("author-about", author.about);
setContent("product-info", product.info);

const cartButton = document.getElementById("cart-button");
cartButton.onclick = () => {
  addToCart(product);
};

setContent(
  "product-rating-stars",
  ratingStarsTemplate(product.rating),
  "innerHTML"
);

const reviewHtmlTemplate = (id, username, ratingStars, text) => /*HTML*/ `\
<div id="review-${id}" class="mb-10">
  <b class="review-username">${username}</b>
  <div class="review-rating-stars mb-5">${ratingStarsTemplate(
    ratingStars
  )}</div>
  <p class="review-text">${text}</p>
</div>
`;

const reviewHtml = product.reviews
  .map((rev, index) =>
    reviewHtmlTemplate(index, rev.username, rev.rating, rev.text)
  )
  .join("\n");

setContent("product-reviews", reviewHtml, "innerHTML");

const recommendations = product.recommendations.map((id) =>
  products.find((pr) => pr.id === id)
);

const recommendationHtml = recommendations
  .map((rec) =>
    recommendationHtmlTemplate(
      rec.id,
      rec.image,
      rec.title,
      rec.author,
      rec.rating,
      rec.price
    )
  )
  .join("\n");

setContent("recommendations", recommendationHtml, "innerHTML");

recommendations.forEach((rec) => {
  /**
   * @type {HTMLButtonElement}
   */
  const cartButton = document.querySelector(
    `#recommendation-${rec.id} .recommendation-cart-button`
  );
  cartButton.onclick = () => {
    addToCart(rec);
  };
});
