const locationM = document.querySelector(".location");
const location_SM = document.querySelector(".location_search");

const people = document.querySelector(".people");
const addPeople = document.querySelector(".add_people");
const peoplebtn = people.querySelector("button");

const minusBtn = document.querySelectorAll(".minus");
const plusBtn = document.querySelectorAll(".plus");

const adultsC = document.querySelector(".adults_c");
const childC = document.querySelector(".child_c");
const kidsC = document.querySelector(".kids_c");

const guest = document.querySelector(".c_guest");

let childCount = 0; // 유아 확인
let kidsCount = 0; // 어린이 확인
let totalCount = 0 // 게스트 확인

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
        guest.textContent = `게스트 ${totalCount + kidsCount}명 유아 ${childCount}명`;
        adultsC.textContent = totalCount;
    } else {
        guest.textContent = `게스트 ${totalCount + kidsCount}명`;
        adultsC.textContent = totalCount;
    }
}

// 인원 증가 영역

const handlePlusPeople = (event) => {
    event.preventDefault();
    const searchParent = event.path.filter(item => item.className === "plus_minus");
    const checkType = searchParent[0].previousElementSibling.className;
    const searchSpan = Array.from(searchParent[0].children).filter(item => item.classList[0] === "count");
    if (checkType === "child") {
        if (parseInt(adultsC.textContent) === 0) {
            searchSpan[0].textContent = parseInt(searchSpan[0].textContent) + 1;
            adultsC.previousElementSibling.style.opacity = "1"
            adultsC.previousElementSibling.style.cursor = "pointer";
            childCount += 1;
            totalCount += 1;
            changeButton(searchSpan);
            handleCalculateGuest();
        } else {
            searchSpan[0].textContent = parseInt(searchSpan[0].textContent) + 1;
            childCount += 1;
            changeButton(searchSpan);
            handleCalculateGuest();
        }
    } else if (checkType === "kids") {
        if (parseInt(adultsC.textContent) === 0) {
            searchSpan[0].textContent = parseInt(searchSpan[0].textContent) + 1;
            adultsC.previousElementSibling.style.opacity = "1"
            adultsC.previousElementSibling.style.cursor = "pointer";
            kidsCount += 1;
            totalCount = 0 + kidsCount;
            changeButton(searchSpan);
            handleCalculateGuest();
        } else {
            searchSpan[0].textContent = parseInt(searchSpan[0].textContent) + 1;
            kidsCount += 1;
            changeButton(searchSpan);
            handleCalculateGuest();
        }
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
    const searchParent = event.path.filter(item => item.className === "plus_minus"); // 클릭한 버튼에서 부모를 가지고 온다.
    const checkType = searchParent[0].previousElementSibling.className; // adults, kids, child를 가지고 오기 위해
    const searchSpan = Array.from(searchParent[0].children).filter(item => item.classList[0] === "count"); // 카운트를 하기 위해 span 태그를 가지고 옴
    if (checkType === "child") { // 아이가 한 명일 경우와 두 명일 경우로 분리해야한다.
        if (parseInt(searchSpan[0].textContent) > 0) {
            searchSpan[0].textContent -= 1;
            childCount -= 1;
            changeButton(searchSpan);
            handleCalculateGuest();
        }
    } else if (checkType === "kids") {
        if (parseInt(searchSpan[0].textContent) > 0) {
            searchSpan[0].textContent -= 1;
            kidsCount -= 1;
            changeButton(searchSpan);
            handleCalculateGuest();
        }
    } else {
        if (parseInt(searchSpan[0].textContent) > 0) {
            if (parseInt(childC.textContent) >= 1 && parseInt(adultsC.textContent) === 1) {
                return false;
            } else if (parseInt(kidsC.textContent) >= 1 && parseInt(adultsC.textContent) === 1) {
                return false;
            } else {
                searchSpan[0].textContent -= 1;
                totalCount -= 1;
                changeButton(searchSpan);
                handleCalculateGuest();
            }
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