var goTo = document.getElementById("goTo");
console.log(window.screen.availheight);
var curH =document.documentElement.clientHeight||document.body.clientHeight;
function fn() {
    var curT =document.documentElement.scrollTop||document.body.scrollTop;
}
window.onscroll = fn;
goTo.onclick = function () {

    window.onscroll = null;
    var tarT = (document.documentElement.scrollTop||document.body.scrollTop) ;
    var step = (tarT / 500) * 10;//²½³¤
    var timer = window.setInterval(function () {
        document.documentElement.scrollTop -= step;
        document.body.scrollTop -= step;
        if ((document.documentElement.scrollTop||document.body.scrollTop) <= 0) {
            window.onscroll = fn;
            window.clearInterval(timer);
        }
    }, 10);
};
