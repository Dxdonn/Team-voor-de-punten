var carts = document.querySelectorAll(".add-cart");
const cartIcon = document.querySelector(".cart span");

var authors = [
  {
    name: "Emily Brontë",
    about: `Emily Jane Brontë was an English novelist and poet who is best known for her only novel, Wuthering Heights, now considered a classic of English literature. She also published a book of poetry with her sisters Charlotte and Anne titled Poems by Currer, Ellis and Acton Bell with her own poems finding regard as poetic genius. Emily was the second-youngest of the four surviving Brontë siblings, between the youngest Anne and her brother Branwell. She published under the pen name Ellis Bell. `,
    born: new Date("1818-07-30"),
    died: new Date("1848-12-19"),
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
    console.log("action running");
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
      productContainer.innerHTML += `<div class="product"><ion-icon name="close-circle"></ion-icon>
			
				<img src="./images/${item.image}" /><br><br>
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">&#8364; ${item.price},00</div>
            <div class="quantity">
                <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
                    <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>   
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
      console.log(cartItems);
      currentQuantity =
        decreaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      currentProduct = decreaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(currentProduct);

      if (cartItems[currentProduct].inCart > 1) {
        cartItems[currentProduct].inCart -= 1;
        cartNumbers(cartItems[currentProduct], "decrease");
        totalCost(cartItems[currentProduct], "decrease");
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        displayCart();
      }
    });

    increaseButtons[i].addEventListener("click", () => {
      console.log(cartItems);
      currentQuantity =
        increaseButtons[i].parentElement.querySelector("span").textContent;
      console.log(currentQuantity);
      currentProduct = increaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector("span")
        .textContent.toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();
      console.log(currentProduct);

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
  let productName;
  console.log(cartItems);

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      productName = deleteButtons[i].parentElement.textContent
        .toLocaleLowerCase()
        .replace(/ /g, "")
        .trim();

      localStorage.setItem(
        "cartNumbers",
        productNumbers - cartItems[productName].inCart
      );
      localStorage.setItem(
        "totalCost",
        cartCost - cartItems[productName].price * cartItems[productName].inCart
      );

      delete cartItems[productName];
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
  /**
   * @type {HTMLElement}
   */
  const element = document.getElementById(id);
  element[field] = content;
}
