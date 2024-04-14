import products from "./products.js";

const cart = () => {
    let listCartHTML = document.querySelector('.listCart');
    let welcomeDiv = document.querySelector('#item');
    let iconCart = document.querySelector('#hideme');
    let shoppwolf = document.querySelector('#shoppwolf');

    let iconCartSpan = iconCart.querySelector('span');
    let iconCartSpan11 = shoppwolf.querySelector('#quantity_11');

    let body = document.querySelector('body');
    let closeCart = document.querySelector('.close');
    let cart = [];
    let messageTextarea = document.querySelector('textarea[name="message"]');
    const selectCity = document.getElementById('shippeng');
    const checkoutButton = document.getElementById('carttotal');
    const totalPriceWithShipping = document.getElementById('totalPriceValue');
    const totalQuantityDisplay = document.querySelector('.totalQuantity'); // Selecting the element to display total quantity

    // open and close tab
    iconCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    });
    shoppwolf.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    });
    closeCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    });

    const setProductInCart = (idProduct, value) => {
        let positionThisProductInCart = cart.findIndex((value) => value.product_id == idProduct);
        if(value <= 0){
            cart.splice(positionThisProductInCart, 1);
        }else if(positionThisProductInCart < 0){
            cart.push({
                product_id: idProduct,
                quantity: 1
            });
        }else{
            cart[positionThisProductInCart].quantity = value;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        addCartToHTML();
        updateMessageTextarea();
    }

    const addCartToHTML = () => {
        listCartHTML.innerHTML = ''; // Clear listCart content
        welcomeDiv.innerHTML = ''; // Clear welcome_1 content
        let totalQuantity = 0;
        let totalPrice = 0; // Initialize total price variable
        if (cart.length > 0) {
            cart.forEach(item => {
                totalQuantity += item.quantity;
                let positionProduct = products.findIndex((value) => value.id == item.product_id);
                let info = products[positionProduct];
                totalPrice += info.price * item.quantity; // Calculate total price
                // Create newItem1 and append it to listCart
                let newItem1 = document.createElement('div');
                newItem1.classList.add('item');
                newItem1.dataset.id = item.product_id;
                newItem1.id = `ElonMusk_${info.id}`; 
                listCartHTML.appendChild(newItem1);
                newItem1.innerHTML = `
                    <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="name">
                        ${info.name}
                    </div>
                    <div class="totalPrice">₪${info.price * item.quantity}</div>
                    <div class="quantity">
                        <span class="minus" data-id="${info.id}"><</span>
                        <span>${item.quantity}</span>
                        <span class="plus" data-id="${info.id}">></span>
                    </div>
                `;
                // Create newItem2 and append it to welcome_1
                let newItem2 = document.createElement('div');
                newItem2.classList.add('item');
                newItem2.dataset.id = item.product_id;
                newItem2.innerHTML = `
                    <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="info">
                        <div class="name">${info.name}</div>
                        <div class="price">₪${info.price}/1 product</div>
                    </div>
                    <div class="quantity">x${item.quantity}</div>
                    <div class="returnPrice">₪${info.price * item.quantity}</div>
                `;
                welcomeDiv.appendChild(newItem2);
            });
        }
        iconCartSpan.innerText = totalQuantity;
        iconCartSpan11.innerText = totalQuantity;
        // Update total price element without shipping
        checkoutButton.innerText = `₪${totalPrice}`;

        // Update total quantity display
        totalQuantityDisplay.innerText = totalQuantity; // Update total quantity display
    }

    const updateMessageTextarea = () => {
        let message = '';
        let totalCost = 0;
        cart.forEach(item => {
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            let itemPrice = info.price * item.quantity;
            totalCost += itemPrice;
            message += `
            Product Name: ${info.name} 
            Quantity: ${item.quantity} 
            Price: ₪${itemPrice}
            ...........................................................................
`;
        });

        // Add shipping cost to the total cost
        const selectedOption = selectCity.value;
        let shippingCost = 0;
        if (selectedOption === 'ship_first') {
            shippingCost = 50;
        } else if (selectedOption === 'ship_secound') {
            shippingCost = 70;
        }
        totalCost += shippingCost;

        // Append the total cost including shipping to the message
        message += `Total Cost (including shipping): ₪${totalCost}\n`;

        messageTextarea.value = message;

        // Update total price element with shipping
        totalPriceWithShipping.innerText = `₪${totalCost}`;



var correctPassword = ['mx7per10', 'jg3per10', 'kp9per10', 'td5per10', 'qc2per10', 'lw8per10', 'nz1per10', 'hb6per10', 'xr4per10', 'uo0per10', 'em5per10', 'fg8per10', 'wx3per10', 'pv7per10', 'rh2per10']; // كلمة المرور الصحيحة
var correctPassword_1 = ['msx15', 'jgd15', 'kgp15', 'tsd15', 'qhc15', 'lcw15', 'nxz15', 'hab15', 'xhr15', 'ujo15', 'elm15', 'fug15', 'wyx15', 'pyv15', 'rth15'];
var correctPassword_2 = ['mx7', 'jg7', 'kp7', 'td7', 'qc7', 'lw7', 'nz7', 'hb7', 'xr7', 'uo7', 'em7', 'fg7', 'wx7', 'pv7', 'rh7'];
var correctPassword_3 = ['msx100', 'jdg100', 'kfp100', 'tgd100', 'qhc100', 'lkw100', 'nlz100', 'hkb100', 'xfr100', 'uwo100', 'eem100', 'fgr100', 'wtx100', 'pvy100', 'rhu100'];
var correctPassword_4 = ['abcxyzfr', 'defghifr', 'jklmnofr', 'pqrstuvfr', 'wxyzafr', 'bcdefgfr', 'hijklmfr', 'nopqrsfr', 'tuvwxyfr', 'zabcdfr', 'efghijfr', 'klmnopfr', 'qrstuvfr', 'wxyzabfr', 'cdefghfr'];

var discountPercentage = 10; // النسبة المئوية المراد خصمها
var discount_1 = totalCost * (discountPercentage / 100);

var discountPercentage_1 = 15; // النسبة المئوية المراد خصمها
var discount_2 = totalCost * (discountPercentage_1 / 100);

var discountPercentage_2 = 7; // النسبة المئوية المراد خصمها
var discount_3 = totalCost * (discountPercentage_2 / 100);

var discount_4 = 100;
var discount_5 = 10;

var totalPriceValue = totalCost - discount_1;
var totalPriceValue_1 = totalCost - discount_2;
var totalPriceValue_2 = totalCost - discount_3;
var totalPriceValue_3 = totalCost - discount_4;
var totalPriceValue_4 = totalCost - discount_5;


var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    var enteredPassword = document.getElementById('password').value;

    if (correctPassword.includes(enteredPassword)) {
        document.getElementById("totalPriceValue").innerHTML = `₪${totalPriceValue.toFixed(2)}`;
        message += `Total Cost (including shipping & discount): ₪${totalPriceValue.toFixed(2)}`;
        messageTextarea.value = message;
        
        document.getElementById("wolfbestteam").style.right = "0";
        document.getElementById("wolfbestteam").innerHTML = `الكوبون صحيح &#10004;`;
        setTimeout(function() {
            document.getElementById("wolfbestteam").style.right = "-100%";
        }, 3000);

    } else if (correctPassword_1.includes(enteredPassword)) {
        document.getElementById("totalPriceValue").innerHTML = `₪${totalPriceValue_1.toFixed(2)}`;
        message += `Total Cost (including shipping & discount): ₪${totalPriceValue_1.toFixed(2)}`;
        messageTextarea.value = message;
        
        document.getElementById("wolfbestteam").style.right = "0";
        document.getElementById("wolfbestteam").innerHTML = `الكوبون صحيح &#10004;`;
        setTimeout(function() {
            document.getElementById("wolfbestteam").style.right = "-100%";
        }, 3000);

    } else if (correctPassword_2.includes(enteredPassword)) {
        document.getElementById("totalPriceValue").innerHTML = `₪${totalPriceValue_2.toFixed(2)}`;
        message += `Total Cost (including shipping & discount): ₪${totalPriceValue_2.toFixed(2)}`;
        messageTextarea.value = message;
        
        document.getElementById("wolfbestteam").style.right = "0";
        document.getElementById("wolfbestteam").innerHTML = `الكوبون صحيح &#10004;`;
        setTimeout(function() {
            document.getElementById("wolfbestteam").style.right = "-100%";
        }, 3000);

    } else if (correctPassword_3.includes(enteredPassword)) {
        if(totalCost >= 550){
            document.getElementById("totalPriceValue").innerHTML = `₪${totalPriceValue_3.toFixed(2)}`;
            message += `Total Cost (including shipping & discount): ₪${totalPriceValue_3.toFixed(2)}`;
            messageTextarea.value = message;

            document.getElementById("wolfbestteam").style.right = "0";
            document.getElementById("wolfbestteam").innerHTML = `الكوبون صحيح &#10004;`;
            setTimeout(function() {
                document.getElementById("wolfbestteam").style.right = "-100%";
            }, 3000);

        }else if (totalCost < 550){
            document.getElementById("wolfbestteam").style.right = "0";
            document.getElementById("wolfbestteam").innerHTML = ` ₪الكوبون يسري على الطلبات التي قيمتها اكثر من 550 &#10060;`;
            setTimeout(function() {
                document.getElementById("wolfbestteam").style.right = "-100%";
            }, 3000);
        }
    } else if (correctPassword_4.includes(enteredPassword)) {
        document.getElementById("totalPriceValue").innerHTML = `₪${totalPriceValue_4.toFixed(2)}`;
        message += `Total Cost (including shipping & discount): ₪${totalPriceValue_4.toFixed(2)}`;
        messageTextarea.value = message;
        
        document.getElementById("wolfbestteam").style.right = "0";
        document.getElementById("wolfbestteam").innerHTML = `الكوبون صحيح &#10004;`;
        setTimeout(function() {
            document.getElementById("wolfbestteam").style.right = "-100%";
        }, 3000);

    } else {
        document.getElementById("wolfbestteam").style.right = "0";
        document.getElementById("wolfbestteam").innerHTML = ` الكوبون غير صحيح &#10060;`;
        setTimeout(function() {
            document.getElementById("wolfbestteam").style.right = "-100%";
        }, 3000);
    }
});




    }

    document.addEventListener('click', (event) => {
        let buttonClick = event.target;
        let idProduct = buttonClick.dataset.id;
        let quantity = null;
        let positionProductInCart = cart.findIndex((value) => value.product_id == idProduct);
        switch (true) {
            case (buttonClick.classList.contains('addCart')):
                quantity = (positionProductInCart < 0) ? 1 : cart[positionProductInCart].quantity+1;
                setProductInCart(idProduct, quantity);
                break;
            case (buttonClick.classList.contains('minus')):
                quantity = cart[positionProductInCart].quantity-1;
                setProductInCart(idProduct, quantity);
                break;
            case (buttonClick.classList.contains('plus')):
                quantity = cart[positionProductInCart].quantity+1;
                setProductInCart(idProduct, quantity);
                break;
            default:
                break;
        }
    })

    // Update total price when the shipping option changes
    selectCity.addEventListener('change', () => {
        addCartToHTML();
        updateMessageTextarea();
    });

    const initApp = () => {
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
            updateMessageTextarea(); // Update textarea content on page load
        }
    }
    
    initApp();
}

export default cart;

const scriptURL = 'https://script.google.com/macros/s/AKfycbw814BmVQUKiZthF2XGxE-itnEVm9Cq6Cn9fwxNA7QySrbbsezv9h7I_usv1GwKa6qg_w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("لقد تم استلام طلبك في نجاح" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})





