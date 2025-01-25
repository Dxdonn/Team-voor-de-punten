const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products.find((pr) => pr.id === productId);
const author = authors.find((at) => at.name === product.author);

setContent("product-image", `images/${product.image}`, "src");
setContent("product-author", product.author);
setContent("product-title", product.title);
setContent("product-language", product.language);
setContent("product-genres", product.genres.join(", "));
setContent("product-publish-date", product.publishDate.toLocaleDateString());
setContent("product-isbn", product.isbn);
setContent("product-about", product.about);
setContent("product-price", `€ ${product.price.toFixed(2)}`);
setContent("author-about", author.about);
setContent("product-info", product.info);

const cartButton = document.getElementById("cart-button");
cartButton.onclick = () => {
  addToCart(product);
};

const ratingStartHtml = `\
<i class="fa-solid fa-star product-rating-star-coloured" ></i>
`;
const notRatingStarHtml = `\
<i class="fa-solid fa-star product-rating-star-gray" ></i>
`;

const ratingStars =
  ratingStartHtml.repeat(Math.round(product.rating)) +
  notRatingStarHtml.repeat(5 - Math.round(product.rating));

setContent("product-rating-stars", ratingStars, "innerHTML");
