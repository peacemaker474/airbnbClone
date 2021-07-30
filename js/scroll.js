const topNav = document.querySelector(".nav_underbar");
const etcMenu = document.querySelector(".etc_menu");
const logo = document.querySelector(".logobox");
const searchM = document.querySelector(".search_modal");

const handleScrollModal = (event) => {
    const scrollTop = event.target.documentElement.scrollTop;
    if (scrollTop > 60) {
        topNav.style.backgroundColor = "white";
        topNav.style.position = "fixed";
        etcMenu.classList.add("etc_modal");
        logo.style.color = "rgb(255, 56, 92)";
        searchM.classList.remove("scroll_search");
    } else {
        topNav.style.backgroundColor = "transparent";
        etcMenu.classList.remove("etc_modal");
        topNav.style.position = "relative";
        logo.style.color = "rgb(255, 255, 255)";
        searchM.classList.add("scroll_search");
    }

}

window.addEventListener("scroll", handleScrollModal);