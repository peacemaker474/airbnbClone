// 올림픽 분위기 DOM
const moodLeftBtn = document.getElementById("moodLeftBtn");
const moodRightBtn = document.getElementById("moodRightBtn");
const mood = document.querySelector(".mood_nations");
const nationWidth = document.querySelector(".nation");

let count = 0;

// 신규 등록 체험 DOM
const enrollLeftBtn = document.getElementById("enrollLeftBtn");
const enrollRightBtn = document.getElementById("enrollRightBtn");
const collection = document.querySelector(".collection_lists");

// 신규 등록 체험 스크린 요소 값 구하기

const moveNewsLeft = (event) => {
    event.preventDefault();
    if (parseInt(collection.style.left) === 0) {
        enrollRightBtn.style.opacity = "1";
        enrollRightBtn.style.cursor = "pointer";

        enrollLeftBtn.style.opacity = "0.2";
        enrollLeftBtn.style.cursor = "not-allowed";
    } else {
        collection.style.left = `${parseInt(collection.style.left) + 42}rem`;
    }
}

const moveNewsRight = (event) => {
    event.preventDefault();
    if (parseInt(collection.style.left) > -140) {
        collection.style.left = `${parseInt(collection.style.left) - 42}rem`;
        enrollLeftBtn.style.opacity = "1";
        enrollLeftBtn.style.cursor = "pointer";
    } else {
        enrollRightBtn.style.opacity = "0.2";
        enrollRightBtn.style.cursor = "not-allowed";
        return collection.style.left;
    }
}

// 올림픽 분위기 스크린 요소 값 구하기

const handleMoveScreen = (event) => {
    event.preventDefault();
    if (count === 0) {
        mood.style.left = `-${mood.offsetWidth}px`;
        count--;
    } else {
        mood.style.left = `0px`;
        count++;
    }
}

// 스크린 제어 영역

function moveFromToScreen() {
    // 올림픽 분위기 제어
    moodLeftBtn.addEventListener("click", handleMoveScreen);
    moodRightBtn.addEventListener("click", handleMoveScreen);
    // 신규 등록 체험 제어
    enrollLeftBtn.addEventListener("click", moveNewsLeft);
    enrollRightBtn.addEventListener("click", moveNewsRight);
    collection.style.left = "0%";

}

moveFromToScreen();