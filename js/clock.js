const clockText = document.querySelector("span#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes=String(date.getMinutes()).padStart(2, "0");
    const clockdate = `${hours}:${minutes}`;   
    clockText.innerText = clockdate;
}


getClock();
setInterval(getClock, 1000);