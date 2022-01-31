const img = document.getElementById("no-mobile");

function mobileRandom () {
    const mobileImg = ['1', '2', '3'];
    let randomNum = Math.floor(Math.random() * mobileImg.length) + 1;
    console.log(randomNum);
    img.style.backgroundImage = `url(./img/${randomNum}.jpg)`;
    loginRandom(randomNum);
}
mobileRandom();

function loginRandom (randomNum) {
    const loginColor = ['#A06747', '#FDFCF4', '#FEFCF5'];
    document.body.style.backgroundColor = `${loginColor[randomNum]}`;
}