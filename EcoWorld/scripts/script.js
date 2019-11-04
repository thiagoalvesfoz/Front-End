const $navBar = document.querySelectorAll('.nav-bar')[0];
const $logo = document.querySelectorAll('.logo')[0];

window.addEventListener('scroll', toggleNavBar, false);

function toggleNavBar(){
    
    if(window.pageYOffset >= $logo.offsetHeight && $navBar.classList.contains('abs-pos')) {
        console.log("Posição Absolute");
        $navBar.classList.remove('abs-pos');
        $navBar.classList.add('fix-pos');
    }
    else if(window.pageYOffset <= $logo.offsetHeight && $navBar.classList.contains('fix-pos')) {
        console.log("Posição Fixed");
        $navBar.classList.remove('fix-pos');
        $navBar.classList.add('abs-pos');
    }
} //https://www.blogger.com/about/?r=2

const $extLink = document.querySelectorAll('.ext-link')[0];
$extLink.addEventListener('click', openLink, false);

function openLink(){
    window.open('https://www.blogger.com/about/?r=2', '_black',);
}
const $intLink = document.querySelectorAll('.int-link')[2];
const $transparencia = document.querySelector('#transparencia');

$intLink.addEventListener('click', scroll, false);

function scroll(){
    window.scrollTo({
        top: $transparencia.offsetTop - $navBar.offsetHeight,
        left: 0,
        behavior: 'smooth'
    });
}