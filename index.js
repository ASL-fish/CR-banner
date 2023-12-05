let prevScrollpos = window.pageYOffset;
console.log("prevScrollpos", prevScrollpos);
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  console.log("currentScrollPos", currentScrollPos);
  let banner = document.querySelector(".banner");
  let bannerHeight = banner.offsetHeight;
  console.log("bannerHeight", bannerHeight);

  if (currentScrollPos < 1200) {
    document.querySelector(".fourDiv1").style.top = "50%";
  } else {
    document.querySelector(".fourDiv1").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
};