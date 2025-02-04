var carts = document.querySelectorAll(".add-cart");
const cartIcon = document.querySelector(".cart span");

var authors = [
  {
    name: "Emily Brontë",
    about: `Emily Jane Brontë was an English novelist and poet who is best known for her only novel, Wuthering Heights, now considered a classic of English literature. She also published a book of poetry with her sisters Charlotte and Anne titled Poems by Currer, Ellis and Acton Bell with her own poems finding regard as poetic genius. Emily was the second-youngest of the four surviving Brontë siblings, between the youngest Anne and her brother Branwell. She published under the pen name Ellis Bell. `,
    born: new Date("1818-07-30"),
    died: new Date("1848-12-19"),
  },
  {
    name: "Jane Austen",
    about:
      "Jane Austen was an English novelist known for her six major novels, including Pride and Prejudice, Sense and Sensibility, and Emma. Her works critique the British landed gentry at the end of the 18th century and emphasize themes of love, marriage, and social status. Austen’s keen wit and social observations have made her one of the most widely read and beloved authors in English literature.",
    born: new Date("1775-12-16"),
    died: new Date("1817-07-18"),
  },
  {
    name: "George Orwell",
    about:
      "George Orwell, born Eric Arthur Blair, was an English novelist, essayist, journalist, and critic. Best known for his dystopian novels 1984 and Animal Farm, Orwell was a keen observer of political and social issues, warning against totalitarianism and government overreach. His works remain highly influential in discussions on freedom, surveillance, and truth.",
    born: new Date("1903-06-25"),
    died: new Date("1950-01-21"),
  },
  {
    name: "Harper Lee",
    about:
      "Harper Lee was an American novelist best known for her Pulitzer Prize-winning novel To Kill a Mockingbird, which became a classic of modern American literature. The novel deals with serious themes such as racial injustice and moral growth, inspired by her own experiences growing up in the South. She later published Go Set a Watchman, which was originally a draft of Mockingbird.",
    born: new Date("1926-04-28"),
    died: new Date("2016-02-19"),
  },
  {
    name: "F. Scott Fitzgerald",
    about:
      "F. Scott Fitzgerald was an American novelist and short story writer best known for The Great Gatsby, a critique of the American Dream during the Roaring Twenties. His works explore themes of wealth, love, ambition, and social change. Though underappreciated during his lifetime, Fitzgerald is now considered one of the greatest American writers of the 20th century.",
    born: new Date("1896-09-24"),
    died: new Date("1940-12-21"),
  },
  {
    name: "Mary Shelley",
    about:
      "Mary Shelley was an English writer best known for her novel Frankenstein, one of the earliest examples of science fiction. The daughter of political philosopher William Godwin and feminist Mary Wollstonecraft, Shelley wrote Frankenstein as part of a challenge with friends, including Lord Byron and Percy Bysshe Shelley, whom she later married.",
    born: new Date("1797-08-30"),
    died: new Date("1851-02-01"),
  },
  {
    name: "Aldous Huxley",
    about:
      "Aldous Huxley was an English writer and philosopher best known for his dystopian novel Brave New World. His works explore themes of technology, control, and human nature. A member of the famous Huxley family, he was deeply interested in philosophy, mysticism, and social criticism, which are reflected in his writings.",
    born: new Date("1894-07-26"),
    died: new Date("1963-11-22"),
  },
  {
    name: "Herman Melville",
    about:
      "Herman Melville was an American novelist, short story writer, and poet best known for Moby-Dick, a complex work exploring themes of obsession, revenge, and fate. Though largely unrecognized during his lifetime, Melville is now considered one of the greatest American writers of the 19th century.",
    born: new Date("1819-08-01"),
    died: new Date("1891-09-28"),
  },
];

var products = [
  {
    image: "wuth.jpg",
    title: "Wuthering Heights",
    author: "Emily Brontë",
    isbn: "0-486-29256-8",
    language: "English",
    genres: ["Gothic", "Tragedy"],
    revision: 3,
    publishCountry: "United Kingdom",
    publishDate: new Date("1847-11-24"),
    about: `\
Wuthering Heights is a wild, passionate story of the intense and almost demonic love between Catherine Earnshaw and Heathcliff, a foundling adopted by Catherine's father. After Mr Earnshaw's death, Heathcliff is bullied and humiliated by Catherine's brother Hindley and wrongly believing that his love for Catherine is not reciprocated, leaves Wuthering Heights, only to return years later as a wealthy and polished man. He proceeds to exact a terrible revenge for his former miseries.

The action of the story is chaotic and unremittingly violent, but the accomplished handling of a complex structure, the evocative descriptions of the lonely moorland setting and the poetic grandeur of vision combine to make this unique novel a masterpiece of English literature.`,
    info: `\
Wuthering Heights is the only novel by the English author Emily Brontë, initially published in 1847 under her pen name "Ellis Bell". It concerns two families of the landed gentry living on the West Yorkshire moors, the Earnshaws and the Lintons, and their turbulent relationships with the Earnshaws' foster son, Heathcliff. The novel, influenced by Romanticism and Gothic fiction, is considered a classic of English literature.

Wuthering Heights was accepted by publisher Thomas Newby along with Anne Brontë's Agnes Grey before the success of their sister Charlotte Brontë's novel Jane Eyre, but they were published later. After Emily's death, Charlotte edited a second edition of Wuthering Heights, which was published in 1850.

Wuthering Heights is now widely considered to be one of the greatest novels ever written in English, but contemporaneous reviews were polarised. It was controversial for its depictions of mental and physical cruelty, including domestic abuse, and for its challenges to Victorian morality, religion, and the class system. It has inspired an array of adaptations across several media, including English singer-songwriter Kate Bush's song of the same name.`,
    id: "1",
    price: 15,
    rating: 4,
    inCart: 0,
    reviews: [
      {
        username: "Jan",
        rating: 4.3,
        text: "Gorgeous cover. Look forward to reading. Have purchased many Wordsworth Classics.",
      },
      {
        username: "Fientje",
        rating: 5,
        text: "That’s an extraordinary book",
      },
      {
        username: "Klaas",
        rating: 2,
        text: "I don’t know who was in charge of creating the typeset to this but it’s awful.",
      },
    ],
    recommendations: ["2", "3", "4"],
  },
  {
    image: "pride.jpg",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "0-486-26431-X",
    language: "English",
    genres: ["Romance", "Satire"],
    revision: 2,
    publishCountry: "United Kingdom",
    publishDate: new Date("1813-01-28"),
    about: `\
Finally, you can have an edition of The Peacock Edition' of 'Pride and Prejudice' by Jane Austen, edition of 1894, with the original text, original illustrations, respecting the layout and the font. Even the book has the same number of pages, 476 plus 29 pages including preface. The binding has also been reproduced, based on original covers, scanned at the highest resolution, which are worn, just like the books that are on sale today, but with their price multiplied by thousands.

Great definition in the images, with a restoration treatment of the illustrations, including more than 70 large sizes and another 60 capital letters.

Set in England in the early 19th century, Pride and Prejudice tells the story of Mr and Mrs Bennet's five unmarried daughters after the rich and eligible Mr Bingley and his status-conscious friend, Mr Darcy, have moved into their neighbourhood.
`,
    info: "Jane Austen's beloved novel explores themes of love, reputation, and class. It is one of the most famous works in English literature and has been adapted multiple times for film and television.",
    id: "2",
    price: 12,
    rating: 4.5,
    inCart: 0,
    reviews: [
      { username: "Eliza", rating: 5, text: "A classic that never gets old." },
      {
        username: "Mark",
        rating: 3.5,
        text: "A bit slow at first, but worth the read.",
      },
    ],
    recommendations: ["1", "3", "5"],
  },
  {
    image: "1984.jpg",
    title: "1984",
    author: "George Orwell",
    isbn: "0-452-28423-6",
    language: "English",
    genres: ["Dystopian", "Political Fiction"],
    revision: 4,
    publishCountry: "United Kingdom",
    publishDate: new Date("1949-06-08"),
    about: `\
Orwell's classic in a special hardcover edition with silver foil embossing.

London, 1984: Winston Smith, a history falsifier at the Ministry of Truth, falls in love with the beautiful and mysterious Julia. Together they begin to question the totalitarian world in which they have functioned until now. George Orwell's vision of a totalitarian state, in which cyber surveillance, historical revisionism and the Thought Police determine the lives of transparent citizens, has only become more urgent to this day. `,
    info: "One of the most influential novels of the 20th century, 1984 warns about the dangers of totalitarianism. Orwell's vision remains relevant in discussions about privacy and government control.",
    id: "3",
    price: 14,
    rating: 4.8,
    inCart: 0,
    reviews: [
      {
        username: "Winston",
        rating: 5,
        text: "Terrifyingly relevant even today.",
      },
      {
        username: "Julia",
        rating: 4.5,
        text: "A must-read for anyone interested in politics.",
      },
    ],
    recommendations: ["2", "4", "6"],
  },
  {
    image: "mockingbird.jpg",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "0-06-112008-1",
    language: "English",
    genres: ["Southern Gothic", "Coming-of-Age"],
    revision: 3,
    publishCountry: "United States",
    publishDate: new Date("1960-07-11"),
    about: `\
Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred.

One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.
`,
    info: "Harper Lee's only novel for decades, To Kill a Mockingbird remains a powerful critique of racial injustice in America. It won the Pulitzer Prize in 1961.",
    id: "4",
    price: 16,
    rating: 4.7,
    inCart: 0,
    reviews: [
      {
        username: "Atticus",
        rating: 5,
        text: "A heart-wrenching, important book.",
      },
      {
        username: "Scout",
        rating: 4,
        text: "Beautifully written but tough subject matter.",
      },
    ],
    recommendations: ["3", "5", "7"],
  },
  {
    image: "gatsby.jpg",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "0-7432-7356-7",
    language: "English",
    genres: ["Tragedy", "Modernist"],
    revision: 4,
    publishCountry: "United States",
    publishDate: new Date("1925-04-10"),
    about: `\
A new edition of the original 1925 edition of F. Scott Fitzgerald's classic Great American novel, beautifully illustrated by award-winning artist Adam Simpson. Widely considered to be the greatest American novel of all time, The Great Gatsby is the story of the wealthy, quixotic Jay Gatsby and his obsessive love for debutante Daisy Buchanan. It is also a cautionary tale of the American Dream in all its exuberance, decadence, hedonism, and passion. First published in 1925 by Charles Scribner's Sons, The Great Gatsby sold modestly and received mixed reviews from literary critics of the time. Upon his death in 1940, Fitzgerald believed the book to be a failure, but a year later, as the U.S. was in the grips of the Second World War, an initiative known as Council on Books in Wartime was created to distribute paperbacks to soldiers abroad. The Great Gatsby became one of the most popular books provided to regiments, with more than 100,000 copies shipped to soldiers overseas. By 1960, the book was selling apace and being incorporated into classrooms across the nation. Today, it has sold over 25 million copies worldwide in 42 languages. This exquisitely rendered edition of the original 1925 printing reintroduces readers to Fitzgerald's iconic portrait of the Jazz Age, complete with specially commissioned illustrations by Adam Simpson that reflect the gilded splendor of the Roaring Twenties. `,
    info: "A critique of the American Dream, Fitzgerald’s masterpiece is widely considered one of the greatest American novels.",
    id: "5",
    price: 13,
    rating: 4.6,
    inCart: 0,
    reviews: [
      {
        username: "Nick",
        rating: 4.8,
        text: "A brilliant depiction of excess and disillusionment.",
      },
      {
        username: "Daisy",
        rating: 4,
        text: "Gatsby is such a tragic character.",
      },
    ],
    recommendations: ["4", "6", "8"],
  },
  {
    image: "frankenstein.jpg",
    title: "Frankenstein",
    author: "Mary Shelley",
    isbn: "0-486-28216-3",
    language: "English",
    genres: ["Gothic", "Science Fiction"],
    revision: 3,
    publishCountry: "United Kingdom",
    publishDate: new Date("1818-01-01"),
    about: `\
Frankenstein is the classic gothic horror novel which has thrilled and engrossed readers for two centuries. Written by Mary Shelley, it is a story which she intended would 'curdle the blood and quicken the beatings of the heart.' The tale is a superb blend of science fiction, mystery and thriller. Victor Frankenstein driven by the mad dream of creating his own creature, experiments with alchemy and science to build a monster stitched together from dead remains. Once the creature becomes a living breathing articulate entity, it turns on its maker and the novel darkens into tragedy. The reader is very quickly swept along by the force of the elegant prose, the grotesque, surreal imagery, and the multi-layered themes in the novel. Although first published in 1818, Shelley's masterpiece still maintains a strong grip on the imagination and has been the inspiration for numerous horror movies, television and stage adaptations.
`,
    info: "One of the earliest examples of science fiction, Mary Shelley's Frankenstein explores themes of ambition, responsibility, and humanity.",
    id: "6",
    price: 11,
    rating: 4.4,
    inCart: 0,
    reviews: [
      {
        username: "Victor",
        rating: 5,
        text: "A haunting and philosophical novel.",
      },
      {
        username: "Monster",
        rating: 3.5,
        text: "Not what I expected, but still powerful.",
      },
    ],
    recommendations: ["5", "7", "9"],
  },
  {
    image: "bravenew.jpg",
    title: "Brave New World",
    author: "Aldous Huxley",
    isbn: "0-06-085052-3",
    language: "English",
    genres: ["Dystopian", "Science Fiction"],
    revision: 4,
    publishCountry: "United Kingdom",
    publishDate: new Date("1932-08-18"),
    about: `\
Far in the future, the World Controllers have created the ideal society. Through clever use of genetic engineering, brainwashing and recreational sex and drugs all its members are happy consumers. Bernard Marx seems alone in feeling discontent. Harbouring an unnatural desire for solitude, and a perverse distaste for the pleasures of compulsory promiscuity, Bernard has an ill-defined longing to break free. A visit to one of the few remaining Savage Reservations where the old, imperfect life still continues, may be the cure for his distress-Huxley's ingenious fantasy of the future sheds a blazing light on the present and is considered to be his most enduring masterpiece. 
`,
    info: "Brave New World remains a thought-provoking dystopian novel that examines the dangers of technological and governmental control.",
    id: "7",
    price: 14,
    rating: 4.3,
    inCart: 0,
    reviews: [
      { username: "Lenina", rating: 4.5, text: "So chillingly prophetic." },
      {
        username: "Bernard",
        rating: 3.8,
        text: "Good but less engaging than 1984.",
      },
    ],
    recommendations: ["6", "8", "10"],
  },
  {
    image: "moby.jpg",
    title: "Moby-Dick",
    author: "Herman Melville",
    isbn: "0-486-45397-1",
    language: "English",
    genres: ["Adventure", "Philosophical"],
    revision: 3,
    publishCountry: "United States",
    publishDate: new Date("1851-11-14"),
    about: `\
Journey to the heart of the sea with this larger-than-life classic.

Regarded as the Great American Novel, Moby Dick is the ultimate tale of seeking vengeance.

Narrated by the crew member Ishmael, this epic whaling adventure follows the crew of the Pequod, as its captain, Ahab, descends deeper and deeper into madness on his quest to find and kill the white whale that maimed him. Beyond the surface--of ship life, whaling, and the hunt for the elusive Moby Dick--are allegorical references to life, and even the universe, in this masterpiece by Herman Melville. 
`,
    info: "Initially a commercial failure, Moby-Dick is now hailed as one of the greatest American novels.",
    id: "8",
    price: 17,
    rating: 4.2,
    inCart: 0,
    reviews: [
      { username: "Ishmael", rating: 4.5, text: "A dense but rewarding read." },
      {
        username: "Queequeg",
        rating: 3.8,
        text: "A lot of whale facts, but a masterpiece.",
      },
    ],
    recommendations: ["7", "9", "1"],
  },
];

function addToCart(product) {
  cartNumbers(product);
  totalCost(product);
}

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    addToCart(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    if (cartIcon) cartIcon.textContent = productNumbers;
  }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (action) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    if (cartIcon) cartIcon.textContent = productNumbers - 1;
  } else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    if (cartIcon) cartIcon.textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    if (cartIcon) cartIcon.textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems !== null) {
    let currentProduct = product.id;

    if (!cartItems[currentProduct]) {
      cartItems[currentProduct] = product;
    }
    cartItems[currentProduct].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.id]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cart = localStorage.getItem("totalCost");

  if (action) {
    cart = parseInt(cart);

    localStorage.setItem("totalCost", cart - product.price);
  } else if (cart != null) {
    cart = parseInt(cart);
    localStorage.setItem("totalCost", cart + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);

  let productContainer = document.querySelector(".products");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML += /*html*/ `
<div class="product">
  <ion-icon name="close-circle" data-id="${item.id}"></ion-icon>
    <img src="./images/${item.image}" /><br /><br />
    <span class="sm-hide">${item.title}</span>
</div>
<div class="price sm-hide">&#8364; ${item.price},00</div>
  <div class="quantity">
    <ion-icon class="decrease" name="arrow-dropleft-circle" data-id="${
      item.id
    }"></ion-icon>
    <span>${item.inCart}</span>
    <ion-icon class="increase" name="arrow-dropright-circle" data-id="${
      item.id
    }"></ion-icon>
</div>
<div class="total">&#8364; ${item.inCart * item.price},00</div>`;
    });

    productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Totaal</h4>
                <h4 class="basketTotal">&#8364; ${cart},00</h4>
            </div>`;

    deleteButtons();
    manageQuantity();
  }
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll(".decrease");
  let increaseButtons = document.querySelectorAll(".increase");
  let currentQuantity = 0;
  let currentProduct = "";
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener("click", () => {
      currentQuantity =
        decreaseButtons[i].parentElement.querySelector("span").textContent;
      currentProduct = decreaseButtons[i].dataset.id;

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener("click", () => {
      currentQuantity =
        increaseButtons[i].parentElement.querySelector("span").textContent;
      currentProduct = increaseButtons[i].dataset.id;

      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));
      displayCart();
    });
  }
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll(".product ion-icon");
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productId;

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productId = deleteButtons[i].dataset.id;
      localStorage.setItem(
        "cartNumbers",
        productNumbers - cartItems[productId].inCart
      );
      localStorage.setItem(
        "totalCost",
        cartCost - cartItems[productId].price * cartItems[productId].inCart
      );

      delete cartItems[productId];
      localStorage.setItem("productsInCart", JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    });
  }
}

onLoadCartNumbers();
displayCart();

/**
 *
 * @param {string} id id of the html element
 * @param {string} content What to set the field or innerText to
 * @param {string} [field] The field to set. Defaults to innerText
 */
function setContent(id, content, field = "innerText") {
  const element = document.getElementById(id);
  element[field] = content;
}

/**
 *
 * @param {string} classname class of the html elements
 * @param {string} content What to set the field or innerText to
 * @param {string} [field] The field to set. Defaults to innerText
 */
function setContents(classname, content, field = "innerText") {
  const elements = document.getElementsByClassName(classname);
  for (const element of elements) element[field] = content;
}

const ratingStartHtml = /*HTML*/ `\
<i class="fa-solid fa-star product-rating-star-coloured"></i>
`;
const notRatingStarHtml = /*HTML*/ `\
<i class="fa-solid fa-star product-rating-star-gray"></i>
`;

/**
 * @param {number} rating
 * @returns {string}
 */
function ratingStarsTemplate(rating) {
  return (
    ratingStartHtml.repeat(Math.round(rating)) +
    notRatingStarHtml.repeat(5 - Math.round(rating))
  );
}

/**
 * @param {string} id
 * @param {string} image
 * @param {string} title
 * @param {string} author
 * @param {number} rating
 * @param {number} price
 * @returns
 */
function recommendationHtmlTemplate(id, image, title, author, rating, price) {
  return /*HTML*/ `\
<div id="recommendation-${id}">
  <img class="recommendation-image" src="images/${image}"/>
  <div class="recommendation-details">
    <a href="product.html?id=${id}">
      <b class="recommendation-title">${title}</b>
      <p class="recommendation-author">${author}</p>
    </a>
    <div class="recommendation-rating-stars mt-5">${ratingStarsTemplate(
      rating
    )}</div>
    <button class="recommendation-cart-button">
      <span class="recommendation-price">
        <i class="fa-solid fa-cart-shopping"></i>
        ${displayPrice(price)}
      </span>
    </button>
  </div>
</div>
`;
}

/**
 * @param {number} price
 * @returns {string}
 */
function displayPrice(price) {
  return price.toLocaleString("en-gb", {
    currency: "eur",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "currency",
  });
}

/**
 * @type {HTMLInputElement}
 */
const searchbar = document.getElementById("searchbar");
searchbar.onkeydown = (event) => {
  if (event.key === "Enter") {
    window.location.href = `/product-list.html?search=${searchbar.value}`;
  }
};
