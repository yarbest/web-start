const buyersBtnOpen = document.querySelector(".buyers__btn-open");
// const buyersBtnClose = document.querySelector(".buyers__btn-close");
const buyersList = document.querySelector(".buyers__container");

const buyersOpenList = () => {
    buyersList.classList.toggle("hidden");

    if (buyersBtnOpen.textContent === "Открыть список") {
        buyersBtnOpen.textContent = "Закрыть список";
    } else {
        buyersBtnOpen.textContent = "Открыть список";
    }
};

// const buyersCloseList = () => {
//     buyersList.classList.add("hidden");
// };

buyersBtnOpen.addEventListener("click", buyersOpenList);
// buyersBtnClose.addEventListener("click", buyersCloseList);
