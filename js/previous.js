let firstCookie;
if (document.cookie.split(";")[0].includes("myCookie=")) {
  firstCookie = JSON.parse(document.cookie.split(";")[0].split("=")[1]);
} else {
  firstCookie = JSON.parse(document.cookie.split(";")[1].split("=")[1]);
}
document.querySelector(".contact h3:first-child").innerHTML +=
  firstCookie.userName;
document.querySelector(".contact h3:last-child").innerHTML +=
  firstCookie.phoneNumber;
if (document.cookie.replace(/measureCookies=/g, "")) {
  let cookie;
  if (document.cookie.split(";")[0].includes("measureCookies=")) {
    cookie = JSON.parse(document.cookie.split(";")[0].split("=")[1]);
  } else {
    cookie = JSON.parse(document.cookie.split(";")[1].split("=")[1]);
  }
  document.querySelector(".neck").innerHTML = cookie.neck
    ? `${cookie.neck} cm`
    : "Unavilable";
  document.querySelector(".shoulder").innerHTML = cookie.shoulder
    ? `${cookie.shoulder} cm`
    : "Unavilable";
  document.querySelector(".arm").innerHTML = cookie.arm
    ? `${cookie.arm} cm`
    : "Unavilable";
  document.querySelector(".hand").innerHTML = cookie.hand
    ? `${cookie.hand} cm`
    : "Unavilable";
  document.querySelector(".knee").innerHTML = cookie.knee
    ? `${cookie.knee} cm`
    : "Unavilable";
  document.querySelector(".leg").innerHTML = cookie.leg
    ? `${cookie.leg} cm`
    : "Unavilable";
  document.querySelector(".elbow").innerHTML = cookie.elbow
    ? `${cookie.elbow} cm`
    : "Unavilable";
  document.querySelector(".scarf").innerHTML = cookie.scarf
    ? `${cookie.scarf} cm`
    : "Unavilable";
}
