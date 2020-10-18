
const listSearchTag = document.querySelectorAll(".search");

listSearchTag.forEach(element => {
  element.onclick = function () {
    location.href = "./search-result.html";
  };
});

function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
