$(".animated").on({
  mouseenter() {
    $(this).addClass("animated");
  },
  animationend() {
    $(this).removeClass("animated");
  },
});
