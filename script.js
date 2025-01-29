gsap.registerPlugin(ScrollTrigger);

const line = ".line",
  sky = ".sky",
  skyContent = ".sky-content",
  zero = "#zero",
  zeroOne = "#zero-one",
  one = "#one",
  oneTwo = "#one-two",
  two = "#two",
  twoThree = "#two-three",
  three = "#three",
  threeFour = "#three-four",
  four = "#four",
  fourFive = "#four-five",
  five = "#five",
  fiveSix = "#five-six",
  six = "#six",
  sixSeven = "#six-seven",
  seven = "#seven",
  sevenEight = "#seven-eight",
  eight = "#eight",
  eightNine = "#eight-nine",
  nine = "#nine";

let scrollLine = 0,
  levels = [zero, one, two, three, four, five, six, seven, eight, nine],
  transitionsLevels = [zeroOne, oneTwo, twoThree, threeFour, fourFive, fiveSix, sixSeven, sevenEight, eightNine],
  interactiveCircles = document.getElementsByClassName("interactive-circle");
  circlesText = document.getElementsByClassName("circle-text");
  innerCircles = document.getElementsByClassName("inner-circle");

for (let i = 0; i < interactiveCircles.length; i++) {
  interactiveCircles[i].addEventListener("mouseover", () => {
    let heightCircle = 20,
        widthCircle = (circlesText[i].innerHTML.length),
        maxWidth = 25;
        if (widthCircle > maxWidth) {
          heightCircle = widthCircle / maxWidth * 2;
          widthCircle = maxWidth;
          console.log(heightCircle, widthCircle, widthCircle / 25);
      }
    circlesText[i].style.visibility = "visible";
    circlesText[i].style.opacity = "1";
    circlesText[i].style.transition = "color 0.3 ease-in-out 0.5s";
    circlesText[i].style.textWrap = "wrap";
    circlesText[i].style.color = "rgba(255, 255, 255, 1)";
    interactiveCircles[i].style.animation = "none";
    interactiveCircles[i].style.width = widthCircle + "dvw";
    interactiveCircles[i].style.height = heightCircle + "dvh";
    interactiveCircles[i].style.backgroundColor = "rgba(255, 255, 255, 0.07)";
    innerCircles[i].style.display = "none";
  })
  interactiveCircles[i].addEventListener("mouseout", () => {
    circlesText[i].style.visibility = "hidden";
    circlesText[i].style.textWrap = "nowrap";
    circlesText[i].style.color = "rgba(255, 255, 255, 0)";
    interactiveCircles[i].style.animation = "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite";
    interactiveCircles[i].style.width = "10dvh";
    interactiveCircles[i].style.height = "10dvh";
    interactiveCircles[i].style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    innerCircles[i].style.display = "inline";
  })
}

gsap.to(sky, {
  scale : 1.5,
  transformOrigin : "bottom",
  ease : "none",
  scrollTrigger: {
    trigger: sky,
    start: "top",
    end: "50%",
    scrub: 1,
    pin: true,
    pinSpacing: true,
    },
});

gsap.to(sky, {
  scrollTrigger: {
    trigger: sky,
    start: "bottom 30%",
    end: "bottom 30%",
    scrub: 0.5,
    onEnter : () => {
      gsap.to(skyContent, {
        yPercent : -200,
      });
    },
    onEnterBack : () => {
      gsap.to(skyContent, {
        yPercent : 4,
      });
    },
  },
});

for (let i = 1; i < levels.length; i++) {
  gsap.to(levels[i], {
    xPercent: -50,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: levels[i],
      start: "top",
      pin: true,
      pinSpacing: true,
      scrub: 2.5,
    },
  });
}

gsap.to(transitionsLevels[0], {
  scrollTrigger: {
    trigger: transitionsLevels[0],
    start: "bottom 50%",
    end : "bottom 50%",
    onEnter: () => {
      gsap.to(line, {
        yPercent: (scrollLine = scrollLine - 24),
        duration : 0.5,
      });
    },
    onEnterBack: () => {
      gsap.to(line, {
        yPercent: (scrollLine = scrollLine + 24),
        duration : 0.5,
      });
    },
  },
});

for (let i = 1; i < transitionsLevels.length; i++) {
  gsap.to(transitionsLevels[i], {
    scrollTrigger: {
      trigger: transitionsLevels[i],
      start: "bottom 50%",
      end : "bottom 50%",
      scrub: 2,
      onEnter: () => {
        gsap.to(line, {
          yPercent: (scrollLine = scrollLine - 10.5),
          duration : 0.5,
        });
      },
      onEnterBack: () => {
        gsap.to(line, {
          yPercent: (scrollLine = scrollLine + 10.5),
          duration : 0.5,
        });
      },
    },
  });
}
