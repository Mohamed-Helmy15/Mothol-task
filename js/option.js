let heading = document.querySelector(".heading");
let cookie;
if (document.cookie.split(";")[0].includes("myCookie=")) {
  cookie = JSON.parse(document.cookie.split(";")[0].split("=")[1]);
} else {
  cookie = JSON.parse(document.cookie.split(";")[1].split("=")[1]);
}
heading.innerHTML = `Hello ${cookie.userName}!,  <br>
  Welcome To Our Suit Website
  `;
