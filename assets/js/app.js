// Bag Counter 

document.body.setAttribute("onload", "init();");


function init() {
    var btns = document.getElementsByClassName('origin');
    for (const btn of btns) {

        btn.addEventListener("click", function() {
            let image = this.parentNode.parentNode.children[0].children[0].src;
            let title = this.parentNode.parentNode.children[1].children[2].innerHTML;
            let price = this.parentNode.parentNode.children[1].children[3].innerHTML;
            localStorage.setItem('Product' + (localStorage.length + 1), [image, title, price]);
            alert("تم إضافة المنتج إلى السلة");
            AddProduct();

        });
    }
    AddProduct();

    if (location.href.includes('shopBag')) {
        showCardProducts();
    }
    if (location.href.includes('index')) {
        allCounters();
    }

}

const AddProduct = () => {

        if (localStorage.length > 0) {
            document.getElementById('cart_icon').style.visibility = "visible";
            document.getElementById('cart_icon').innerText = localStorage.length;
            document.getElementById('cart_icon').style.visibility = "visible";
            document.getElementById('cart_image').src = "assets/icons/BagFull.svg";
        } else {
            document.getElementById('cart_icon').style.visibility = "hidden";
            document.getElementById('cart_image').src = "assets/icons/svgexport-51.svg";
        }
    }
    // ======== start >> By : Dhoha =========


//########################## Start addToCart Script ##########################
const cartCounter = document.getElementById('cart');
const carts = document.querySelectorAll('.js-cart');

let storeCart = localStorage.getItem('cart_counter');
let counter = 0;

const addToCart = () => {
    storeCart = storeCart === null ? 0 : storeCart;
    counter = storeCart;

    counter !== 0 ? cartCounter.style.display = "block" : cartCounter.style.display = "none";

    cartCounter.innerText = counter > 9 ? "9+" : counter;

    carts.forEach(element => {
        element.addEventListener('click', (e) => {
            counter !== 0 ? cartCounter.style.display = "block" : cartCounter.style.display = "none";
            counter++;
            cartCounter.innerText = counter > 9 ? "9+" : counter;
            localStorage.setItem('cart_counter', counter)
        })
    });
};

window.addEventListener("load", addToCart);

//########################## Start changeLanguage Script ##########################
const changeLang = document.querySelectorAll('.js-language');
const htmlElement = document.querySelector('html');
const headElement = document.querySelector('head');
const enLink = document.createElement('link');

let storeLang = localStorage.getItem('lang');

enLink.setAttribute('rel', "stylesheet");
enLink.setAttribute('href', "assets/css/en.css")

changeLang.forEach(element => {
    element.addEventListener('click', () => {
        // storeLang = storeLang === null ? "" : storeLang;

        if (htmlElement.dir === 'rtl') {
            htmlElement.dir = 'ltr';
            // storeLang.setItem('ltr');
            element.querySelector('span').innerHTML = "Arabic";
            headElement.append(enLink);
        } else {
            htmlElement.dir = 'rtl';
            // storeLang.setItem('rtl');
            element.querySelector('span').innerHTML = "English";
            headElement.removeChild(enLink)
        }
    });
});


// ======== End >> By : Dhoha =========