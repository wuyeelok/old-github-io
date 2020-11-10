// Responsive nav by Ash Neilson
$(function () {
  menu = $("nav ul");

  $("#openup").on("click", function (e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function () {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function (e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});

// Smooth Scrolling
$(".cf a, .internal-link").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      { scrollTop: $(hash).offset().top },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});

const skill_icons = document.getElementsByClassName("skill_icon");
if (skill_icons !== null) {
  const skill_icon_list = [...skill_icons];

  skill_icon_list.forEach((skill_icon_ele) => {
    skill_icon_ele.addEventListener("click", function () {
      if (this.classList.contains("fa-plus")) {
        this.classList.remove("fa-plus");
        this.classList.add("fa-minus");
        this.parentElement.parentElement.classList.remove("chosen");
      } else if (this.classList.contains("fa-minus")) {
        const plus_icons = document.getElementsByClassName("fa-plus");
        if (plus_icons !== null) {
          const plus_icon_list = [...plus_icons];
          plus_icon_list.forEach((plus_icon_ele) => {
            plus_icon_ele.classList.remove("fa-plus");
            plus_icon_ele.classList.add("fa-minus");
            plus_icon_ele.parentElement.parentElement.classList.remove(
              "chosen"
            );
          });
        }
        this.classList.remove("fa-minus");
        this.classList.add("fa-plus");
        this.parentElement.parentElement.classList.add("chosen");
      }
    });
  });
}
