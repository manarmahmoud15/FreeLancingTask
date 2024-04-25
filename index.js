import products from './products.js';
import cart from './cart.js';

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// load layout file
const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}
loadTemplate();
const initApp = () => {
     // load list product
     let listProductHTML = document.querySelector('.listProduct');
     listProductHTML.innerHTML = null;
     
     products.forEach(product => {
         let newProduct = document.createElement('div');
         newProduct.classList.add('item');
         newProduct.id = `pro_${product.id}`; 
         newProduct.innerHTML = 
         `
         <div id="hello${product.id}">
            <a href="/detail.html?id=${product.id}" style="display: inline-flex;">
            <div class="product-badges" style="position: absolute;">
                        <span class="badge bg-danger" style="display: block;">${product.Ratio}%</span>
                        <span class="badge ${product.badge}">${product.badge_text}</span>
                    </div>
                    <img 
                    src='${product.image}' 
                    onmouseover="setTimeout(function(){document.getElementById('wolf7la_${product.id}').src='${product.image_hover}';}, 150);" 
                    onmouseout="setTimeout(function(){document.getElementById('wolf7la_${product.id}').src='${product.image}';}, 150);" 
                    id="wolf7la_${product.id}"
                />
            </a>
            <h3 class="product-title flex-grow-1">
                <a href="#" class="product-title">${product.name}</a>
            </h3>
            <span class="star-rating ${product.rating}"></span>
            <div class="product-price">
                <span class="text-danger fs-5 product-price">₪${product.price}.00  <del class="text-body-secondary ms-1"><small>₪${product.discount}</small></del></span>
            </div>
            <button class="addCart" data-id='${product.id}'>
                <i class="fas fa-cart-plus" style="margin-right: 5px;"></i> Add To Cart
            </button>
         </div>
             `;
         listProductHTML.appendChild(newProduct);
    });
}

