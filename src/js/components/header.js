if (!document.getElementById("page1Identifier")) {
  //fixed header
  window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    if (window.pageYOffset > 1) {
      // Измените этот порог, если нужно
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  //burger

  function closeMobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const body = document.body;

    mobileMenu.style.transform = "translateY(-100%)";
    setTimeout(() => {
      mobileMenu.classList.remove("open");
      body.style.overflow = "auto";
    }, 300);
  }

  function toggleMobileMenu() {
    const burgerButton = document.querySelector(".header__burger-main");
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
