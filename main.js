$(function () {
  var titleTexts = [
    `テクノロジー×イノベーションで、<br>人々に感動を。`,
    `不動産の世界に<br>足りなかったものすべて。`,
    `会社の未来を<br>共につくりませんか？`
  ];

  $("#slides").vegas({
    slides: [
      {
        src: "./img/slide-01.jpg"
      },
      {
        src: "./img/slide-02.jpg"
      },
      {
        src: "./img/slide-03.jpg"
      },
    ],
    animation: "kenburns",
    walk: function (index) {
      var title = document.getElementById("title");
      title.innerHTML = titleTexts[index];
      anime({
        targets: "#title",
        translateY: [-150, "-50%"],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutCubic"
      });
    }
  });
});