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
  transitionsLevels = [zeroOne, oneTwo, twoThree, threeFour, fourFive, fiveSix, sixSeven, sevenEight, eightNine];

gsap.to(sky, {
  scale : 1.5,
  transformOrigin : "bottom",
  ease : "none",
  scrollTrigger: {
    trigger: sky,
    start: "top",
    end: "50%",
    scrub: 0.5,
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
      scrub: 0.5,
    },
  });
}

gsap.to(transitionsLevels[0], {
  scrollTrigger: {
    trigger: transitionsLevels[0],
    start: "50%",
    end : "50%",
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
      start: "50%",
      end : "50%",
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

