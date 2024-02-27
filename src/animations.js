anime({
  targets: "#title",
  translateY: 10,
  direction: "alternate",
  loop: true,
  easing: "easeInOutQuad",
  transformOrigin: "50px 50px 0px",
  rotate: ["1deg", "-1deg"],
  duration: 1500,
});

anime({
  targets: "#scooter1",
  translateY: "100vh",
  direction: "alternate",
  loop: false,
  easing: "easeInOutQuad",
  rotate: "15deg",
  duration: 1000,
});

anime({
  targets: "#lamp",
  direction: "alternate",
  easing: "easeInOutQuad",
  loop: true,
  update: function (anim) {
    if (anim.progress > 0) {
      document.querySelector("#lamp").style.display = "block";
    }
    if (anim.progress > 10) {
      document.querySelector("#lamp").style.display = "none";
    }
    if (anim.progress > 30) {
      document.querySelector("#lamp").style.display = "block";
    }
    if (anim.progress > 60) {
      document.querySelector("#lamp").style.display = "none";
    }
  },
});

anime({
  targets: "#scooter2",
  translateY: "100vh",
  loop: false,
  easing: "easeInOutQuad",
  rotate: "5deg",
  delay: 200,
  duration: 1200,
});

anime({
  targets: "#scooter3",
  translateY: "100vh",
  loop: false,
  easing: "easeInOutQuad",
  rotate: "-10deg",
  delay: 70,
  duration: 1000,
});
