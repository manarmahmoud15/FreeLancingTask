import products from '/products.js';
import cart from './cart_1.js';

let listProduct = document.getElementById('listProduct');
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

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
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => value.id == productId)[0];
    if(!thisProduct){
        window.location.href = "/";
    }

    let detail = document.querySelector('.detail');
    detail.querySelector('.image #img_1').src = thisProduct.image;
    detail.querySelector('.image #img_2').src = thisProduct.img_1;
    detail.querySelector('.image #img_3').src = thisProduct.img_2;
    detail.querySelector('.image #img_4').src = thisProduct.img_3;

    detail.querySelector('#buuut_1').src = thisProduct.image;
    detail.querySelector('#buuut_2').src = thisProduct.img_1;
    detail.querySelector('#buuut_3').src = thisProduct.img_2;
    detail.querySelector('#buuut_4').src = thisProduct.img_3;

    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.price').innerText = '₪' + thisProduct.price;

    detail.querySelector('.discount_price_offer').innerText = '₪' + thisProduct.discount;

    detail.querySelector('.description').innerText = thisProduct.description;
    detail.querySelector('.addCart').dataset.id = thisProduct.id;
    detail.querySelector('.colors').innerHTML = `${thisProduct.colors.map(color => `
    <a href="${color.src}" class="color_link">
     <span class="color" style="background-color: ${color.code}" title="${color.name}"></span>
     </a>`).join('')} <span  class="color_span">: الألوان المتوفرة    </span>
    `;

    detail.querySelector('.discrop').innerHTML =  document.querySelector('.discrop').innerHTML = `<span  class="color_span" id="wolfshiop">: الأنواع المتوفرة</span>` + `${thisProduct.dis.map(dis => `
    <a href="${dis.link}" class="color_link">
        <span class="name_links" id="hover_propro">${dis.name_1}</span>
    </a>
     `).join('')}
    `;
    


    let listProductHTML = document.querySelector('.listProduct');
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.id = `semller_${product.id}`; 
        newProduct.innerHTML = 
        `
            <div id="takeaway"> 
                <a href="/detail.html?id=${product.id}">
                <img src="${product.image}">
                </a>
                <h2>${product.name}</h2>
                <div class="price">₪${product.price}</div>
                <button 
                    class="addCart" 
                    data-id='${product.id}'>
                        Add To Cart
                </button>
            </div>
            
        `;
        listProductHTML.appendChild(newProduct);
    });

}











