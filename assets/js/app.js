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
        document.getElementById('BagCounter').style.visibility = "visible";
        document.getElementById('BagCounter').innerText = localStorage.length;
        document.getElementById('BagCounter').style.visibility = "visible";
        document.getElementById('BagImage').src = "assets/icons/BagFull.svg";
    } else {
        document.getElementById('BagCounter').style.visibility = "hidden";
        document.getElementById('BagImage').src = "assets/icons/svgexport-51.svg";
    }
}