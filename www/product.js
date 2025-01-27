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
setContent(
  "product-price",
  product.price.toLocaleString("en-gb", {
    currency: "eur",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "currency",
  })
);
setContent("author-about", author.about);
setContent("product-info", product.info);

const cartButton = document.getElementById("cart-button");
cartButton.onclick = () => {
  addToCart(product);
};

const ratingStartHtml = `\
<i class="fa-solid fa-star product-rating-star-coloured"></i>
`;
const notRatingStarHtml = `\
<i class="fa-solid fa-star product-rating-star-gray"></i>
`;

const ratingStarsTemplate = (rating) =>
  ratingStartHtml.repeat(Math.round(rating)) +
  notRatingStarHtml.repeat(5 - Math.round(rating));

setContent(
  "product-rating-stars",
  ratingStarsTemplate(product.rating),
  "innerHTML"
);

const reviewHtmlTemplate = (id, username, ratingStars, text) => `\
<div id="review-${id}" class="mb-10">
  <b class="review-username">${username}</b>
  <p class="review-rating-stars mb-5">${ratingStars}</p>
  <p class="review-text">${text}</p>
</div>
`;

const reviewHtml = product.reviews
  .map((rev, index) =>
    reviewHtmlTemplate(
      index,
      rev.username,
      ratingStarsTemplate(rev.rating),
      rev.text
    )
  )
  .join("\n");

setContent("product-reviews", reviewHtml, "innerHTML");
