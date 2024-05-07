var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    autoplay: { delay: 5000 },
    spaceBetween: 20,
    grabCursor:true,
    slidetoClickedSlide:true,
    centeredSlides:true,
    initialSlide:1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
    
      },
      768: {
        slidesPerView: 2,
        
      },
      991: {
        slidesPerView: 3,
        
      },
    },
  });

  function LogoClick(){
    window.location.replace("index.html")
  }


function Box(){alert("E-Mail erfolgreich versendet");}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Weiterlesen"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = ""; 
    btnText.display="none";
    moreText.style.display = "inline";
  }
}


var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.display = "none";
})
