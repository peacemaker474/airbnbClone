const locationM = document.querySelector(".location");
const location_SM = document.querySelector(".location_search");

const people = document.querySelector(".people");
const addPeople = document.querySelector(".add_people");
const peoplebtn = people.querySelector("button");

const handleAddPeopleModal = () => {
    addPeople.classList.remove("add_modal");
    location_SM.classList.add("location_modal");
}

const handleSearchModal = () => {
    location_SM.classList.remove("location_modal");
    addPeople.classList.add("add_modal");
}

locationM.addEventListener("click", handleSearchModal);
people.addEventListener("click", handleAddPeopleModal);
peoplebtn.addEventListener("click", (event) => event.preventDefault());