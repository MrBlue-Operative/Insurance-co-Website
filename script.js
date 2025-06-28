const navbar = document.querySelector('.navbar2');
const btn = document.getElementById('arma');
const btn2 = document.getElementById('arma2');
btn.onclick = function(){
    navbar.style.display = 'block';       
}
btn2.onclick = function(){
    navbar.style.display = 'none';
}

function displayButton(){
    const value = document.querySelector(".displayWindow");
    value.style.display = 'block';
}
function displayNone(){
    const value = document.querySelector(".displayWindow");
    value.style.display = 'none';
}