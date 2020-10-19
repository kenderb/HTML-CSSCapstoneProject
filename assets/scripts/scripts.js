
const listSearchTag = document.querySelectorAll(".search");

listSearchTag.forEach(element => {
  element.onclick = function () {
    location.href = "./search-result.html";
  };
});

const descriptionTag = document.querySelectorAll(".description-selector");

descriptionTag.forEach(element2 => {
  element2.onclick = function () {
    window.location="./search-result.html";
  };
});




