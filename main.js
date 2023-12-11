let menuEmail = document.getElementsByClassName("navbar-email")[0];
let menuHamIcon = document.querySelector(".menu");
let DesktopMenu = document.querySelector(".desktop-menu");
let mobileMenu = document.querySelector(".mobile-menu");

let toggleDesktopMenu= () =>{

  /** 
  if(DesktopMenu.classList.contains("inactive")){
    DesktopMenu.classList.remove("inactive");
  }else{
    DesktopMenu.classList.add("inactive");
  }*/

  DesktopMenu.classList.toggle("inactive");

}

menuEmail.addEventListener("click", toggleDesktopMenu);

let toggleMobileMenu = () =>{
  mobileMenu.classList.toggle("inactive");
} 

menuHamIcon.addEventListener("click", toggleMobileMenu);

let actMobileMenu=window.matchMedia("(max-width: 640px)");
let actDesktopMenu = window.matchMedia("(min-width: 640px)");

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

actMobileMenu.addListener(checkeo);
actDesktopMenu.addListener(checkeo2);

