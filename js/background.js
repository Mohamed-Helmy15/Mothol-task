const imgArray = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg"];
let page = document.querySelector(".page");
let counter = 0;
setInterval(() => {
  if (counter > 3) {
    counter = 0;
  }
  page.style.backgroundImage = `url(../images/${imgArray[counter]})`;
  counter++;
}, 3000);
