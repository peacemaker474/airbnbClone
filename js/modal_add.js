const locationM = document.querySelector(".location");
const location_SM = document.querySelector(".location_search");

const people = document.querySelector(".people");
const addPeople = document.querySelector(".add_people");
const peoplebtn = people.querySelector("button");

const minusBtn = document.querySelectorAll(".minus");
const plusBtn = document.querySelectorAll(".plus");

const adultsC = document.querySelector(".adults_c");
console.log(adultsC);
const guest = document.querySelector(".c_guest");

let totalCount = 0; // 게스트 확인
let childCount = 0; // 유아 확인

// 버튼 변경

const changeButton = (span) => {
    const checkCount = span[0].textContent;
    const changeBtn = span[0].previousElementSibling;

    if (checkCount !== "0") {
        changeBtn.style.cursor = "pointer";
        changeBtn.style.opacity = "1";
    } else {
        changeBtn.style.cursor = "not-allowed"
        changeBtn.style.opacity = "0.3";
    }
}

// 게스트 인원

const handleCalculateGuest = () => {
    if (childCount > 0 && totalCount > 0) {
        guest.textContent = `게스트 ${totalCount}명 유아 ${childCount}명`;
    } else {
        guest.textContent = `게스트 ${totalCount}명`;
    }
}

// 인원 증가 영역

const handlePlusPeople = (event) => {
    event.preventDefault();
    const searchParent = event.path.filter(item => item.className === "plus_minus");
    const checkChild = searchParent[0].previousElementSibling.className;
    const searchSpan = Array.from(searchParent[0].children).filter(item => item.classList[0] === "count");
    if (checkChild === "child") {
        searchSpan[0].textContent = parseInt(searchSpan[0].textContent) + 1;
        totalCount += 1;
        childCount += 1;
        changeButton(searchSpan);
        handleCalculateGuest();
    } else if (checkChild === "kids") {
        searchSpan[0].textContent = parseInt(searchSpan[0].textContent) + 1;
        totalCount += 1;
        changeButton(searchSpan);
        handleCalculateGuest();
    } else {
        searchSpan[0].textContent = parseInt(searchSpan[0].textContent) + 1;
        totalCount += 1;
        changeButton(searchSpan);
        handleCalculateGuest();
    }
}

// 인원 감소 영역

const handleMinusPeople = (event) => {
    event.preventDefault();
    const searchParent = event.path.filter(item => item.className === "plus_minus");
    const checkChild = searchParent[0].previousElementSibling.className;
    const searchSpan = Array.from(searchParent[0].children).filter(item => item.classList[0] === "count");
    if (checkChild === "child") {
        if (parseInt(searchSpan[0].textContent) > 0) {
            searchSpan[0].textContent -= 1;
            totalCount -= 1;
            childCount -= 1;
            changeButton(searchSpan);
            handleCalculateGuest();
        }
    } else {
        if (parseInt(searchSpan[0].textContent) > 0) {
            searchSpan[0].textContent -= 1;
            totalCount -= 1;
            changeButton(searchSpan);
            handleCalculateGuest();
        }
    }
}

// 인원 추가 모달창

const handleAddPeopleModal = () => {
    addPeople.classList.remove("add_modal");
    location_SM.classList.add("location_modal");
}

// 위치 정보 모달창

const handleSearchModal = () => {
    location_SM.classList.remove("location_modal");
    addPeople.classList.add("add_modal");
}

function handleModal() {
    locationM.addEventListener("click", handleSearchModal);
    people.addEventListener("click", handleAddPeopleModal);
    peoplebtn.addEventListener("click", event => event.preventDefault());
}

function handleAddPeople() {
    Array.from(minusBtn).forEach(btn => {
        btn.addEventListener("click", handleMinusPeople);
    });
    Array.from(plusBtn).forEach(btn => {
        btn.addEventListener("click", handlePlusPeople);
    });
}

handleModal();
handleAddPeople();