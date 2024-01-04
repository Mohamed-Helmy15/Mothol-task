// const imgArray = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg"];
// let counter = 0;
// let page = document.querySelector(".page");
let info = document.querySelector(".info");
let textContainer = document.querySelector(".text-container");
let form = document.querySelector("form");
setInterval(() => {
  //   if (counter > 3) {
  //     counter = 0;
  //   }
  //   page.style.backgroundImage = `url(../images/${imgArray[counter]})`;
  //   counter++;
  info.classList.remove("aos-animate");
  textContainer.classList.remove("aos-animate");
  setTimeout(() => {
    info.classList.add("aos-animate");
    textContainer.classList.add("aos-animate");
  }, 1000);
}, 3000);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = document.querySelector("#userName").value;
  let phoneNumber = document.querySelector("#phoneNumber").value;
  document.cookie = `myCookie=${JSON.stringify({
    userName,
    phoneNumber,
  })}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
  window.location.href = "option.html";
});
