gsap.registerPlugin(ScrollTrigger);

const line = ".line",
  sky = ".sky",
  title = ".title",
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
  nine = "#nine",
  nineFooter = "#nine-footer";

let scrollLine = 0,
  levels = [zero, one, two, three, four, five, six, seven, eight, nine],
  transitionsLevels = [zeroOne, oneTwo, twoThree, threeFour, fourFive, fiveSix, sixSeven, sevenEight, eightNine, nineFooter],
  interactiveCircles = document.getElementsByClassName("interactive-circle");
  circlesText = document.getElementsByClassName("circle-text");
  innerCircles = document.getElementsByClassName("inner-circle");

for (let i = 0; i < interactiveCircles.length; i++) {
  interactiveCircles[i].addEventListener("mouseover", () => {
    let heightCircle = 20,
        widthCircle = (circlesText[i].innerHTML.length),
        maxWidth = 32;
        if (widthCircle > maxWidth) {
          heightCircle = widthCircle / maxWidth * 2;
          widthCircle = maxWidth;
      }
    circlesText[i].style.visibility = "visible";
    circlesText[i].style.opacity = "1";
    circlesText[i].style.transition = "color 0.3 ease-in-out 0.5s";
    circlesText[i].style.textWrap = "wrap";
    circlesText[i].style.color = "rgba(255, 255, 255, 0.65)";
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
    scrub: 0.4,
    pin: true,
    pinSpacing: true,
    },
});

gsap.to(title, {
  yPercent : -300,
  scrollTrigger: {
    trigger: title,
    start: "bottom 30%",
    end: "bottom top",
    scrub: 2,
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
        yPercent: (scrollLine = scrollLine - 21.5),
        duration : 0.5,
      });
      console.log(scrollLine);
    },
    onEnterBack: () => {
      gsap.to(line, {
        yPercent: (scrollLine = scrollLine + 21.5),
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
          yPercent: (scrollLine = scrollLine - 9.6),
          duration : 0.5,
        });
      },
      onEnterBack: () => {
        gsap.to(line, {
          yPercent: (scrollLine = scrollLine + 9.6),
          duration : 0.5,
        });
      },
    },
  });
}

gsap.to(transitionsLevels[9], {
  scrollTrigger: {
    trigger: transitionsLevels[9],
    start: "bottom 50%",
    end : "bottom 50%",
    onEnter: () => {
      gsap.to(line, {
        yPercent: (scrollLine = scrollLine + 2),
        duration : 0.5,
      });
      console.log(scrollLine);
    },
    onEnterBack: () => {
      gsap.to(line, {
        yPercent: (scrollLine = scrollLine - 2 ),
        duration : 0.5,
      });
    },
  },
});

const body = document.body;
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    body.classList.add('scrolled'); // Ajouter la classe scrolled
    }
  else {
    body.classList.remove('scrolled'); // Retirer la classe scrolled
  }
});

