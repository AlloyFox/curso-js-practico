const menuNavEmail = document.querySelector('.navbar-email');
const desktopEmail = document.querySelector('.desktop-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const burgerMenuIcon = document.querySelector('.burgerMenu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuNavEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toogleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    desktopEmail.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive');
}

function toogleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleCartAside() {
    shoppingCartContainer.classList.toggle('inactive')   
    mobileMenu.classList.add('inactive')
    desktopEmail.classList.add('inactive')
    productDetailContainer.classList.add('inactive');

}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopEmail.classList.add('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Alexa Echo Dot',
    price: '120',
    
    image: 'https://http2.mlstatic.com/D_NQ_NP_853382-MLA48040462796_102021-O.jpg'
});
productList.push({
    name: 'Plush Fox',
    price: '40',
    image: 'https://i5.walmartimages.com/asr/c5abbfac-1b02-4946-b41c-ab79b3bb67e2_1.f1346a9480e51e75454068152622ca50.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productName, productPrice);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);



// <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div>