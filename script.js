
const accordioncontent = document.getElementsByClassName("accordion_content");
const plusbtn = document.getElementsByClassName("expand");
const minusbtn = document.getElementsByClassName("collapse");

for (let i = 0; i < accordioncontent.length; i++) {
  accordioncontent[i].addEventListener("click", function () {
    let result = accordioncontent[i].classList.toggle("active");

    if (result == true) {
      plusbtn[i].style.display = "none";
      minusbtn[i].style.display = "block";
    } else {
      plusbtn[i].style.display = "block";
      minusbtn[i].style.display = "none";
    }
  });
}
