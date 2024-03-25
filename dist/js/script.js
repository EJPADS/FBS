
const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burger.addEventListener("click", () =>{
    burger.classList.toggle("open");
    headerA.classList.toggle("open");
})

var slider = tns({
  container: '.client__slider',
  items: 1,
  controls: false,
  autoplayButtonOutput: false,
  slideBy: 'page',
  autoplay: true
    });