
const listSearchTag = document.querySelectorAll(".search");

listSearchTag.forEach(element => {
  element.onclick = function () {
    location.href = "./search-result.html";
  };
});



