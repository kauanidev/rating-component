const buttons = document.querySelectorAll('.buttons button');
const reviewSection = document.querySelector('.review');
const thanksSection = document.querySelector('.thanks');
let rating;

function clickButton() {
    const active = document.getElementsByClassName('active');
    if (active[0]) active[0].className = "";
    this.className = "active";
    rating = this.innerText;
}

function confirmRating() {
    reviewSection.style.display = "none";
    thanksSection.style.display = "flex";
    const ratingText = document.querySelector('.rating span');
    ratingText.innerText = rating;
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clickButton);
}