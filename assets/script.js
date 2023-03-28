var header = document.querySelector("header");

function displayDate() {
    header.innerHTML = dayjs();
}
setInterval(displayDate, 1000);
displayDate();