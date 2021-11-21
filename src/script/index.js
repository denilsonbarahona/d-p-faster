const $hambuerguer = document.querySelector(".hamburger");
const $menu = document.querySelector(".menu");

$hambuerguer.addEventListener("click", handleClickHamburguer);

function handleClickHamburguer(){
    $menu.classList.toggle("menu--isOpen");
    $hambuerguer.classList.toggle("hamburger--isOpen");

}
