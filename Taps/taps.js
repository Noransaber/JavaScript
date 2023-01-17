// Get all tabs
let allTabs = document.querySelectorAll(".tabs li");
// console.log(allTabs);

// Make An Array
let tabArr = Array.from(allTabs);
// console.log(tabArr);

let allDivs = document.querySelectorAll(".content div");

// Make Arry
let divArry = Array.from(allDivs);

tabArr.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    tabArr.forEach((ele) => {
      ele.classList.remove("active");
    });
    //  Add class on target element
    e.currentTarget.classList.add("active");
    allDivs.forEach((div) => {
      div.style.display = "none";
    });
    console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "Block";
  });
});
