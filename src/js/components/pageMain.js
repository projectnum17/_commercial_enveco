if (document.getElementById("page1Identifier")) {
  const swiper1 = new Swiper(".card-slider", {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },

      976: {
        slidesPerView: 2.5,
      },

      325: {
        slidesPerView: 1.2,
      },
    },
  });

  const swiper2 = new Swiper(".card-slider__activity", {
    loop: false,
    slidesPerView: 3.5,
    spaceBetween: 30,
    breakpoints: {
      1220: {
        slidesPerView: 4,
      },

      768: {
        slidesPerView: 2.5,
      },

      325: {
        slidesPerView: 1.2,
      },
    },
  });

  //  ==================== CHANGE ===================

  document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.getElementById("readMoreButton");
    const showTextSpan = document.querySelector(".show-text");
    const hideTextSpan = document.querySelector(".hide-text");
    const textToToggle = document.querySelector("#textBlock p");

    let isOpen = false;

    readMoreButton.addEventListener("click", function (event) {
      event.preventDefault();

      isOpen = !isOpen;
      textToToggle.classList.toggle("active", isOpen);

      if (isOpen) {
        const hiddenParagraphs = document.querySelectorAll(
          "#textBlock p:not(:first-child)"
        );
        hiddenParagraphs.forEach(function (paragraph) {
          paragraph.style.display = "block";
        });
        showTextSpan.style.display = "none";
        hideTextSpan.style.display = "inline";
      } else {
        const hiddenParagraphs = document.querySelectorAll(
          "#textBlock p:not(:first-child)"
        );
        hiddenParagraphs.forEach(function (paragraph) {
          paragraph.style.display = "none";
        });
        showTextSpan.style.display = "inline";
        hideTextSpan.style.display = "none";
      }
    });
  });
}
