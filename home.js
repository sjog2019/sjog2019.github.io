function alert_name() {
  //creste name variable
  var name = "Sneha";
  alert("My name is " + name);
  console.log("Test 123");
}
function change_image(){
  var image = document.getElementById('penguin_image');
  image.src = "img/grizzly.jpg";
  var image2 = document.getElementById('cat_image');
  image2.src = "img/twooxcat.jpg";
}
function bigImg(x) {
  x.style.height = "1064px";
  x.style.width = "1064px";
}

function normalImg(x) {
  x.style.height = "15px";
  x.style.width = "15px";
}
function changeImage() {
  var image = document.getElementById('penguin_image');
  if (image.src.match("img/penguin.jpg")) {
    image.src = "img/twoox2.jpg";
  }
  else if (image.src.match("img/twoox2.jpg")) {
    image.src = "img/grizzly.jpg";
  }
  else {
    image.src = "img/penguin.jpg";
  }
}
