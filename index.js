console.log("linked");

// let prevScrollpos = window.pageYOffset;
// console.log("prevScrollpos", prevScrollpos);
// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;
//   console.log("currentScrollPos", currentScrollPos);
//   let banner = document.querySelector(".banner");
//   let bannerHeight = banner.offsetHeight;
//   console.log("bannerHeight", bannerHeight);

//   if (currentScrollPos < 1800) {
//     document.querySelector(".fourDiv1").style.top = "50%";
//   } else {
//     document.querySelector(".fourDiv1").style.top = "50%";
//   }
//   prevScrollpos = currentScrollPos;
// };

const bannerImgDivs = document.querySelectorAll(".bannerImgDiv");
console.log("bannerImgDivs", bannerImgDivs);
const smallDiv = document.querySelectorAll(".smallDiv");
console.log("smallDiv", smallDiv);

let banner = document.querySelector(".banner");
let bannerHeight = banner.offsetHeight;
console.log("bannerHeight", bannerHeight);

window.addEventListener("scroll", function () {
  bannerImgDivs.forEach(function (bannerImgDiv) {
    const rect = bannerImgDiv.getBoundingClientRect();
    console.log("rect.top", rect.top);
    console.log("rect.bottom", rect.bottom);

    const scrollPosition = window.scrollY;
    console.log("scrollPosition", scrollPosition); // 打印当前滚动位置

    // if (rect.top > 1800 && rect.bottom < 1800) {
    if (rect.bottom > 1800) {
      smallDiv[0].style.height = "50px";
      smallDiv[1].style.height = "20px";
      smallDiv[2].style.height = "20px";
      smallDiv[3].style.height = "20px";
    } else if (rect.bottom > 1200) {
      smallDiv[0].style.height = "20px";
      smallDiv[1].style.height = "50px";
      smallDiv[2].style.height = "20px";
      smallDiv[3].style.height = "20px";
    } else if (rect.bottom > 600) {
      smallDiv[0].style.height = "20px";
      smallDiv[1].style.height = "20px";
      smallDiv[2].style.height = "50px";
      smallDiv[3].style.height = "20px";
    } else if (rect.bottom > 0) {
      smallDiv[0].style.height = "20px";
      smallDiv[1].style.height = "20px";
      smallDiv[2].style.height = "20px";
      smallDiv[3].style.height = "50px";
    }
  });
});
