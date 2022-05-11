$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

var navbar = document.querySelector(".navbar");
var navbarMain = document.querySelector(".nav-bar");
window.addEventListener("scroll", function () {
  "use strict";
  if (window.pageYOffset > 0) {
    navbar.style.position = "fixed";
    navbar.classList.add("scroll");
  } else {
    navbar.style.position = "";
    navbar.classList.remove("scroll");
  }
});
var head = document.querySelector(".head"),
  Mission = document.querySelector(".Mission"),
  Vision = document.querySelector(".Vision"),
  about = document.querySelector(".about"),
  showContent = document.querySelector(".show-content"),
  p1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae pellentesque turpis. Donec in hendrerit dui, vel blandit massa. Ut vestibulum suscipit cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum. Phasellus et felis sed purus tristique dignissim. Morbi sit amet leo at purus accumsan pellentesque. Vivamus fermentum nisi vel dapibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  p2 =
    "Sed tincidunt, magna ut vehicula volutpat, turpis diam condimentum justo, posuere congue turpis massa in mi. Proin ornare at massa at fermentum. Nunc aliquet sed nisi iaculis ornare. Nam semper tortor eget est egestas, eu sagittis nunc sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent bibendum sapien sed purus molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  p3 =
    "Aliquam dolor odio, mollis sed feugiat sit amet, feugiat ut sapien. Nunc eu dignissim lorem. Suspendisse at hendrerit enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed condimentum semper turpis vel facilisis. Nunc vel faucibus orci. Mauris ut mauris rhoncus, efficitur nisi at, venenatis quam. Praesent egestas pretium enim sit amet finibus. Curabitur at erat molestie, tincidunt lorem eget, consequat ligula.";
document.body.onclick = function (e) {
  "use strict";
  if (e.target.classList.contains("Mission")) {
    if (Vision.classList.contains("now")) {
      Vision.classList.remove("now");
    } else {
      about.classList.remove("now");
    }
    Mission.classList.add("now");
    showContent.innerHTML = p2;
  } else if (e.target.classList.contains("Vision")) {
    if (Mission.classList.contains("now")) {
      Mission.classList.remove("now");
    } else {
      about.classList.remove("now");
    }
    Vision.classList.add("now");
    showContent.innerHTML = p1;
  } else {
    if (Vision.classList.contains("now")) {
      Vision.classList.remove("now");
    } else {
      Mission.classList.remove("now");
    }
    about.classList.add("now");
    showContent.innerHTML = p3;
  }
};
//Button to go up

// counter
var goup = document.querySelector(".goup"),
  one = document.querySelector(".one"),
  two = document.querySelector(".two"),
  three = document.querySelector(".three"),
  four = document.querySelector(".four");
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 700) {
    goup.style.display = "block";
  } else {
    goup.style.display = "none";
  }

  function counter(ele, num, str) {
    "use strict";
    var i = 1;
    if (window.pageYOffset >= 1600 && window.pageYOffset <= 1900) {
      var countInterval = setInterval(function () {
        if (ele.textContent < num) {
          ele.textContent = ++i;
          if (ele.textContent == num) {
            ele.textContent = i + str;
          }
        } else {
          clearInterval(countInterval);
        }
      }, 5 / num);
    }
  }
  counter(one, 300, "+");
  counter(two, 400, "+");
  counter(three, 1000, "$");
  counter(four, 1400, "$");
});
goup.onclick = function () {
  "use strict";
  window.scrollTo(0, 0);
};

// Add class Active To Btn

var btn = document.getElementsByClassName("btn");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    "use strict";
    var currentActive = document.getElementsByClassName("dolar");
    currentActive[0].className = currentActive[0].className.replace(
      "dolar",
      ""
    );
    this.className += " dolar";
  });
}

$(".testimonials-carousel").owlCarousel({
  center: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  dots: false,
  loop: true,
  nav: false,
  smartSpeed: 300,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    600: {
      items: 2,
      dots: false,
    },
    1000: {
      items: 3,
      dots: false,
    },
  },
});
