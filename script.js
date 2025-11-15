const main = document.querySelector('main');
console.log(main);

const body = main.parentElement; 
console.log(body); 

const article = main.firstElementChild;
console.log(article); 

const h1 = article.firstElementChild;
console.log(h1); 

const sub = h1.nextElementSibling;
console.log(sub); 

const h2 = sub.firstElementChild;
console.log(h2); 

const list = h2.nextElementSibling;
console.log(list); 

const piattosProduct = list.firstElementChild;
console.log(piattosProduct); 

const novaProduct = list.lastElementChild;
console.log(novaProduct); 

const productListCheck = sub.lastElementChild;
console.log(productListCheck); 

const cart = sub.nextElementSibling;
console.log(cart);

const cartItemsContainer = cart.querySelector('#cart-items');

const productCard = list; 
console.log(productCard.children);

const productArray = Array.from(productCard.children);
console.log(productArray);

productArray.forEach((p) => {
    p.addEventListener('click', () => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('bg-orange-100','p-4', 'rounded','shadow-sm','mb-2');

        const h3 = document.createElement('h3');
        h3.innerText = p.firstElementChild
                        .firstElementChild
                        .innerText;
        cartItemDiv.appendChild(h3);
        cartItemsContainer.appendChild(cartItemDiv);
    });
});