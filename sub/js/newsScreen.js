const newsLeftBtn = document.getElementById("newsLeftBtn");
const newsRightBtn = document.getElementById("newsRightBtn");
const news = document.querySelector(".news_lists");
const newsList = document.querySelectorAll(".news");


const handleMoveLeft = (event) => {
    event.preventDefault();
    if (parseInt(news.style.left) === 0) {
        newsRightBtn.style.opacity = "1";
        newsRightBtn.style.cursor = "pointer";

        newsLeftBtn.style.opacity = "0.2";
        newsLeftBtn.style.cursor = "not-allowed";
    } else {
        news.style.left = `${parseInt(news.style.left) + 30}%`;
    }
}

const handleMoveRight = (event) => {
    event.preventDefault();
    if (parseInt(news.style.left) > -120) {
        news.style.left = `${parseInt(news.style.left) - 30}%`;
        newsLeftBtn.style.opacity = "1";
        newsLeftBtn.style.cursor = "pointer";
    } else {
        newsRightBtn.style.opacity = "0.2";
        newsRightBtn.style.cursor = "not-allowed";
        return news.style.left;
    }
}


function moveNewsScreen() {
    newsLeftBtn.addEventListener("click", handleMoveLeft);
    newsRightBtn.addEventListener("click", handleMoveRight);
    news.style.left = "0%";
}

moveNewsScreen();