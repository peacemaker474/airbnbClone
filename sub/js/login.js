// 로그인 모달
const userLogin = document.querySelector(".user_login");
const controlModal = document.querySelector(".login_modal");
// 언어 및 통화 모달
const language = document.querySelector(".language_overray");
const cancle = document.querySelector(".cancle_btn");
const choice = document.querySelector(".choice_language");
const a = choice.querySelector("a");


const handlePrevent = (event) => {
    event.preventDefault();
}

const handleLanguageModal = () => {
    language.classList.toggle("modal_language");
}

const handleCloseLogin = () => {
    controlModal.classList.add("show_login");
}

const handleLoginModal = (event) => {
    event.stopPropagation();
    controlModal.classList.toggle("show_login");
}

function init() {
    userLogin.addEventListener("click", handleLoginModal);
    choice.addEventListener("click", handleLanguageModal);
    cancle.addEventListener("click", handleLanguageModal);
    document.body.addEventListener("click", handleCloseLogin);
    a.addEventListener("click", handlePrevent);
}

init();