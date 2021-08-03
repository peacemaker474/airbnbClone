// 위치 모달창 DOM
const locationM = document.querySelector(".location");
const location_SM = document.querySelector(".location_search");
// 인원 모달창 DOM
const people = document.querySelector(".people");
const addPeople = document.querySelector(".add_people");
const peoplebtn = people.querySelector("button");
// 인원 증가 감소 DOM
const minusBtn = document.querySelectorAll(".minus");
const plusBtn = document.querySelectorAll(".plus");
// 인원 증가 감소를 위한 span 확인용 DOM
const adultsC = document.querySelector(".adults_c");
const childC = document.querySelector(".child_c");
const kidsC = document.querySelector(".kids_c");
// 총 인원 파악하기 위한 DOM
const guest = document.querySelector(".c_guest");

let childCount = 0; // 유아 확인
let kidsCount = 0; // 어린이 확인
let totalCount = 0 // 게스트 확인

// 성인, 어린이, 유아 숫자에 따라 Minus 버튼 스타일 변경.
const changeStyleButton = (span) => {
    const checkCount = span[0].textContent;
    const changeActiveBtn = span[0].previousElementSibling;

    if (checkCount !== "0") {
        changeActiveBtn.style.cursor = "pointer";
        changeActiveBtn.style.opacity = "1";
    } else {
        changeActiveBtn.style.cursor = "not-allowed"
        changeActiveBtn.style.opacity = "0.3";
    }
}

// 게스트가 몇 명인지 인원을 계산하여 보여줌
const paintCalculateGuest = () => {
    if (childCount > 0 && totalCount > 0) {
        guest.textContent = `게스트 ${totalCount + kidsCount}명 유아 ${childCount}명`;
        adultsC.textContent = totalCount;
    } else {
        guest.textContent = `게스트 ${totalCount + kidsCount}명`;
        adultsC.textContent = totalCount;
    }
}

// 성인, 어린이, 유아 PLUS 버튼을 눌렀을 시 증가
const handlePlusPeople = (event) => {
    event.preventDefault();
    const searchParent = event.path.filter(item => item.className === "plus_minus");
    const checkType = searchParent[0].previousElementSibling.className;
    const findCountAge = Array.from(searchParent[0].children).filter(item => item.classList[0] === "count");
    const increseNumber = parseInt(findCountAge[0].textContent);

    if (checkType === "child") {
        if (adultsC.textContent === "0") {
            findCountAge[0].textContent = increseNumber + 1;
            adultsC.previousElementSibling.style.opacity = "1"
            adultsC.previousElementSibling.style.cursor = "pointer";
            childCount += 1;
            totalCount += 1;
            changeStyleButton(findCountAge);
            paintCalculateGuest();
        } else {
            findCountAge[0].textContent = increseNumber + 1;
            childCount += 1;
            changeStyleButton(findCountAge);
            paintCalculateGuest();
        }
    } else if (checkType === "kids") {
        if (adultsC.textContent === "0") {
            findCountAge[0].textContent = increseNumber + 1;
            adultsC.previousElementSibling.style.opacity = "1"
            adultsC.previousElementSibling.style.cursor = "pointer";
            kidsCount += 1;
            totalCount = 0 + kidsCount;
            changeStyleButton(findCountAge);
            paintCalculateGuest();
        } else {
            findCountAge[0].textContent = increseNumber + 1;
            kidsCount += 1;
            changeStyleButton(findCountAge);
            paintCalculateGuest();
        }
    } else {
        findCountAge[0].textContent = increseNumber + 1;
        totalCount += 1;
        changeStyleButton(findCountAge);
        paintCalculateGuest();
    }
}

// 성인, 어린이, 유아 MINUS 버튼을 눌렀을 시 감소
const handleMinusPeople = (event) => {
    event.preventDefault();
    const searchParent = event.path.filter(item => item.className === "plus_minus"); // 클릭한 버튼에서 부모를 가지고 온다.
    const checkType = searchParent[0].previousElementSibling.className; // adults, kids, child를 가지고 오기 위해
    const findCountAge = Array.from(searchParent[0].children).filter(item => item.classList[0] === "count"); // 카운트를 하기 위해 span 태그를 가지고 옴
    const checkNumber = parseInt(findCountAge[0].textContent);

    if (checkType === "child") { // 아이가 한 명일 경우와 두 명일 경우로 분리해야한다.
        if (checkNumber > 0) {
            findCountAge[0].textContent -= 1;
            childCount -= 1;
            changeStyleButton(findCountAge);
            paintCalculateGuest();
        }
    } else if (checkType === "kids") {
        if (checkNumber > 0) {
            findCountAge[0].textContent -= 1;
            kidsCount -= 1;
            changeStyleButton(findCountAge);
            paintCalculateGuest();
        }
    } else {
        if (checkNumber > 0) {
            if (parseInt(childC.textContent) >= 1 && parseInt(adultsC.textContent) === 1) {
                return false;
            } else if (parseInt(kidsC.textContent) >= 1 && parseInt(adultsC.textContent) === 1) {
                return false;
            } else {
                findCountAge[0].textContent -= 1;
                totalCount -= 1;
                changeStyleButton(findCountAge);
                paintCalculateGuest();
            }
        }
    }
}

// 인원 누를 시 모달창 ON/OFF
const handleAddPeopleModal = () => {
    addPeople.classList.remove("add_modal");
    location_SM.classList.add("location_modal");
}

// 위치 정보 누를 시 모달창 ON/OFF
const handleSearchModal = () => {
    location_SM.classList.remove("location_modal");
    addPeople.classList.add("add_modal");
}

// 모달창 이벤트 영역
function handleModal() {
    locationM.addEventListener("click", handleSearchModal);
    people.addEventListener("click", handleAddPeopleModal);
    peoplebtn.addEventListener("click", event => event.preventDefault());
}

// 인원 증감소 이벤트 영역
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