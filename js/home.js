/*
document.getElementById('form-busca').onsubmit = function() {
     if (document.getElementById('q').value == '') {
           document.getElementById('q').style.background = '#f26869';
           return false;
     }
};
*/

var banners = ["../img/light.png", "../img/misa.png"];
var bannerAtual = 0;

function trocaBanner() {
       bannerAtual = (bannerAtual + 1) % 2;
       document.querySelector('.banner img').src = banners[bannerAtual];
}
   setInterval(trocaBanner, 4000);