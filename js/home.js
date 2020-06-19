var banners = ["img/promocao2.jpg", "img/promocao1.jpg"];
var bannerAtual = 0;

function trocarBanner() {
    bannerAtual = (bannerAtual + 1) % banners.length;
    document.querySelector(".banner-destaque img").src = banners[bannerAtual];
}
var variadorBanner = setInterval(trocarBanner, 3500);
$("#pause").click(function() {
    clearInterval(variadorBanner);
    $("#pause").css({ "display": "none" })
    $("#play").css({ "display": "block" })
})
$("#play").click(function() {
    variadorBanner = setInterval(trocarBanner, 4000);
    $("#pause").css({ "display": "block" })
    $("#play").css({ "display": "none" })
})