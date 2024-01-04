let heading = document.querySelector(".heading");
let submitBtn = document.querySelector(".submit");
let returnBtn = document.querySelector(".return");
let cookie;
if (document.cookie.split(";")[0].includes("myCookie=")) {
  cookie = JSON.parse(document.cookie.split(";")[0].split("=")[1]);
} else {
  cookie = JSON.parse(document.cookie.split(";")[1].split("=")[1]);
}

heading.innerHTML = `Hello ${cookie.userName}!,  <br>
Welcome To Our Suit Website Please carefully enter your measurement in centimeters
`;

returnBtn.addEventListener("click", () => {
  swal({
    title: "Are you sure?",
    text: "Once returned, You will lose the data!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willReturn) => {
    if (willReturn) {
      window.location.href = "option.html";
    }
  });
});
submitBtn.addEventListener("click", () => {
  swal({
    title: "Are you sure?",
    text: "You are about to submit your measurement!",
    icon: "info",
    buttons: true,
  }).then((willSumbit) => {
    if (willSumbit) {
      swal("Your submission has been saved", {
        icon: "success",
      }).then(() => {
        window.location.href = "option.html";
      });
    } else {
      swal("Your measurement has not been saved!");
    }
  });
  let neck = document.querySelector("#neck").value;
  let shoulder = document.querySelector("#shoulder").value;
  let arm = document.querySelector("#arm").value;
  let hand = document.querySelector("#hand").value;
  let knee = document.querySelector("#knee").value;
  let leg = document.querySelector("#leg").value;
  let elbow = document.querySelector("#elbow").value;
  let scarf = document.querySelector("#scarf").value;
  document.cookie = `measureCookies=${JSON.stringify({
    neck,
    shoulder,
    arm,
    hand,
    knee,
    leg,
    elbow,
    scarf,
  })}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
});
