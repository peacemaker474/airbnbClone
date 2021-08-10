const mainNav = document.querySelector(".filter_container");

const handleMenuScroll = (event) => {
    const scrollTop = event.target.documentElement.scrollTop;
    if (scrollTop > 1070) {
        mainNav.style.position = "sticky";
        mainNav.style.top = "0%";
        mainNav.style.zIndex = "9999";
    } else {
        mainNav.style.position = "relative";
        mainNav.style.zIndex = "0";
    }
}

window.addEventListener("scroll", handleMenuScroll);