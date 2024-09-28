var unorderList = document.getElementById('unorder');
var humberger = document.getElementById('bars');

function navIcon() {
    console.log("Button Works!");
    unorderList.classList.toggle('ul-active')
    humberger.classList.toggle('fa-xmark')
}