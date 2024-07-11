import { products } from "./db/products.js";

const productsContainer = document.getElementById('products')

for (let product of products) {
    const cardContainer = document.createElement("div")
    cardContainer.classList.add(
        'card',
        'card-vertical',
        'd-flex',
        'direction-column',
        'relative',
         'shadow'
    );
    // cardContainer.innerText = 'maheep soni'
// image container
    const imageContainer = document.createElement("div")
    imageContainer.classList.add('card-image-container')

    const image = document.createElement("img");
    image.classList.add('card-image');
    image.setAttribute("src",product.img);
    image.setAttribute("alt",product.name);

    imageContainer.appendChild(image);

    // card deatails container

    const cardDetailsContainer = document.createElement("div")
    cardDetailsContainer.classList.add('card-details')
    const brandContainer = document.createElement("div")
    brandContainer.classList.add("card-title")
    brandContainer.innerText = product.brand
    cardDetailsContainer.appendChild(brandContainer)
    
// card description container

const descriptionContainer = document.createElement("div")
descriptionContainer.classList.add("card-descripton")

// product name

const name = document.createElement("p")
name.classList.add('card-des')
name.innerText = product.name
descriptionContainer.appendChild(name)


// product price
const price = document.createElement("p")
price.classList.add('card-price' ,"d-flex","align-end")
price.innerText = `Rs. ${product.newPrice}`

const oldPrice = document.createElement("span")
oldPrice.classList.add('price-strikr-through')
oldPrice.innerText = `Rs. ${product.oldPrice}`
price.appendChild(oldPrice)

descriptionContainer.appendChild(price)


const discount = document.createElement("span")
discount.classList.add('discount')
discount.innerText = `(${product.discount} % OFF)`
price.appendChild(discount)

// rating container
const ratings = document.createElement("p")
ratings.classList.add('d-flex','align-center')

const rating = document.createElement("span")
rating.innerText= product.rating
ratings.appendChild(rating)

const star = document.createElement("span")
star.classList.add('material-icons-outlined',"star")
star.innerText= "star"
ratings.appendChild(star)
cardDetailsContainer.appendChild(descriptionContainer)
descriptionContainer.appendChild(ratings)



// cta button

const ctaButton = document.createElement("div");
ctaButton.classList.add("cta-btn");
const cartButton = document.createElement("button");
cartButton.classList.add(
"button",
"btn-primary",
"btn-icon",
"cart-btn",
"d-flex",
"align-center",
"justify-center",
"gap",
"cursor",
"btn-margin"
);
const cart = document.createElement("span");
 cart.classList.add("material-icons-outlined");
cart.innerText = "shopping_cart";
cartButton.appendChild(cart)
cartButton.innerText = 'add to cart'
ctaButton.appendChild(cartButton)
cardDetailsContainer.appendChild(ctaButton)


cardContainer.appendChild(imageContainer)
cardContainer.appendChild(cardDetailsContainer)
// cardContainer.appendChild(ctaButton)

    productsContainer.appendChild(cardContainer)
}