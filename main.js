let menuEmail = document.getElementsByClassName("navbar-email")[0];
let menuHamIcon = document.querySelector(".menu");
let DesktopMenu = document.querySelector(".desktop-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let menuShopingCar = document.querySelector(".navbar-shopping-cart");
let asideShopingCar = document.querySelector(".ShoppingCardContainer");
let actMobileMenu=window.matchMedia("(max-width: 640px)");
let actDesktopMenu = window.matchMedia("(min-width: 640px)");
let cardsContainer = document.querySelector(".cards-container");




let toggleDesktopMenu= () =>{
  let AsideClosed = asideShopingCar.classList.contains("inactive");
  if(!AsideClosed){
    asideShopingCar.classList.add("inactive");
  }
  DesktopMenu.classList.toggle("inactive");
}

let toggleMobileMenu = () =>{
  let AsideClosed = asideShopingCar.classList.contains("inactive");
  if(!AsideClosed){
    asideShopingCar.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
} 

const checkeo = () =>{
  if(actMobileMenu.matches && !DesktopMenu.classList.contains("inactive")){
    DesktopMenu.classList.add("inactive");
    mobileMenu.classList.remove("inactive");
  }

}

const checkeo2 = () =>{
  if(actDesktopMenu.matches && !mobileMenu.classList.contains("inactive")){
    mobileMenu.classList.add("inactive");
    DesktopMenu.classList.remove("inactive");
  }
}

let toggleShopingCar = () =>{

  let isMobileMenuClosed =mobileMenu.classList.contains("inactive");
  let DesktopMenuClosed = DesktopMenu.classList.contains("inactive");

  if(!isMobileMenuClosed){
    mobileMenu.classList.add("inactive");
  }

  if(!DesktopMenuClosed){
    DesktopMenu.classList.add("inactive");
  }

  asideShopingCar.classList.toggle("inactive");


}




actMobileMenu.addListener(checkeo);
actDesktopMenu.addListener(checkeo2);

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuShopingCar.addEventListener("click", toggleShopingCar);


const productList = [];
productList.push(
  {
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
);

productList.push(  
  {
    name: "pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
)

productList.push(
  {
    name: "laptop",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }

)
/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/
for(product of productList){
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg .setAttribute("src", product.image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");
  
  const productPrice = document.createElement("p");
  productPrice.innerText = " " + product.price;

  const productName = document.createElement("p");
  productName.innerText = " " + product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement("figure");
  
  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

  //ahora debemos meter por decirlo asi los elementos dentro de sus elementos padres asi como se ve en el html
  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

}