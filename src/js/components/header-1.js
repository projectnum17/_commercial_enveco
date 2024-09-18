if (document.getElementById("page1Identifier")) {
  //fixed header
  window.addEventListener("scroll", function () {
    var header = document.getElementById("header-main");
    var listItems = document.getElementsByClassName("main-list");
    var langMain = document.getElementById("lang-main");
    var mainBtn = document.getElementById("main-btn");
    var mainBtnText = document.getElementById("main-btn__text");
    var newBurger = document.getElementById("new-burger");
    var newBurgerText = document.getElementById("new-burger__text");
    var newBurgerThumb = document.getElementById("new-burger__thumb");

    var logoDefault = document.getElementById("logo-default");
    var logoAlt = document.getElementById("logo-alt");

    var arrowDefault = document.getElementById("default-arrow");
    var arrowHidden = document.getElementById("hidden-arrow");

    var burgerDefault = document.getElementById("default-burger");
    var burgerHidden = document.getElementById("hidden-burger");

    if (window.pageYOffset > 1) {
      header.classList.add("another-header");

      logoDefault.style.display = "none";
      logoAlt.style.display = "block";

      arrowDefault.style.display = "none";
      arrowHidden.style.display = "block";

      burgerDefault.style.display = "none";
      burgerHidden.style.display = "block";

      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "#191919";
      }
      langMain.style.color = "#191919";

      mainBtn.classList.add("hover-effect");
      newBurger.style.background = "#1d7e33";
      newBurgerText.style.color = "#fff";
    } else {
      header.classList.remove("another-header");

      logoDefault.style.display = "block";
      logoAlt.style.display = "none";

      arrowDefault.style.display = "block";
      arrowHidden.style.display = "none";

      burgerDefault.style.display = "block";
      burgerHidden.style.display = "none";

      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "#fff";
      }
      langMain.style.color = "#fff";

      mainBtn.classList.remove("hover-effect");
      newBurger.style.background = "#fff";
      newBurgerText.style.color = "#191919";
    }
  });

  //burger
  // Определяем функцию closeMobileMenu() в глобальной области видимости
  function closeMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.body;

    mobileMenu.style.transform = "translateY(-100%)";
    setTimeout(() => {
      mobileMenu.classList.remove("open");
      body.style.overflow = "auto";
    }, 300);
  }

  // Объявляем функцию toggleMobileMenu(), которая использует closeMobileMenu()
  function toggleMobileMenu() {
    const burgerButton = document.querySelector(".header__burger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeButton = document.querySelector(
      ".mobile-menu__content-header__close"
    );
    const body = document.body;

    burgerButton.addEventListener("click", () => {
      mobileMenu.classList.add("open");
      mobileMenu.style.transform = "translateY(0)";
      body.style.overflow = "hidden";
    });

    closeButton.addEventListener("click", () => {
      closeMobileMenu();
    });

    const links = mobileMenu.querySelectorAll("a");
    links.forEach((link) => {
      if (link.getAttribute("id") === "contact") {
        link.addEventListener("click", () => {
          closeMobileMenu();
        });
      }
    });
  }

  toggleMobileMenu();

  //dropdown menu
  $(function () {
    $(".accordionDrop").hide();
    $(".accordion").on("click", function () {
      $(this).next().slideToggle("slow");
    });
  });

  $(document).ready(function () {
    var selectText = $(".select-text");
    var selectOptions = $(".select-options li");

    selectText.click(function () {
      $(".select-options").slideToggle();
    });

    selectOptions.click(function () {
      var selectedOption = $(this).text();
      selectText.text(selectedOption);
      $(".select-options").slideUp();

      selectOptions.removeClass("selected");
      $(this).addClass("selected");
    });

    $(document).click(function (e) {
      var container = $(".custom-select");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".select-options").slideUp();
      }
    });
  });
}
//
