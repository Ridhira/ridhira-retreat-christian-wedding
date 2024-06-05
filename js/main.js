(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);

// Show More Text in about us section
const knowMoreBtn = document.querySelector(".show-more");
const extraText = document.querySelector(".more-text");

const showMoreText = () => {
  if (extraText.style.display === "none") {
    extraText.style.display = "block";
  } else {
    extraText.style.display = "none";
  }
};

knowMoreBtn.addEventListener("click", showMoreText);

// OUR OFFER IMAGE LOGIC

// Global variable to store the selected gender
let selectedOffer = "";

const arrOfOffers = [
  {
    id: 1,
    title: "Wedding Decoration",
    src: "../img/decoration-image-1.PNG",
    paragraph:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.",
  },
  {
    id: 2,
    title: "catering & Wedding Cake",
    src: "../img/decoration-image-2.PNG",
    paragraph:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was.",
  },
  {
    id: 3,
    title: "Photography & Video",
    src: "../img/decoration-image-3.PNG",
    paragraph:
      "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could se",
  },
  {
    id: 4,
    title: "Makeup & Hairstyle",
    src: "../img/decoration-image-1.PNG",
    paragraph:
      "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph",
  },
];

function handleRadioChange() {
  const radios = document.getElementsByName("basic_carousel");
  const image = document.getElementById("offer_img");
  const paragraph = document.getElementById("offer_para");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedOffer = radios[i].value;
      image.src = arrOfOffers[i].src;
      paragraph.textContent = arrOfOffers[i].paragraph;
      break;
    }
  }
}
