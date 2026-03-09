function firstTimeline() {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });

  tl.to(".box:nth-child(1)", { rotation: 180, x: 300 });
  tl.to(".box:nth-child(1)", { rotation: 0, x: 0 });

  return tl;
}

function secondTimeline() {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });

  tl.to(".box:nth-child(2)", { rotation: -180, x: 300 });
  tl.to(".box:nth-child(2)", { rotation: 0, x: 0 });

  return tl;
}

function thirdTimeline() {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });

  tl.to(".box:nth-child(3)", { rotation: 180, x: 300 });
  tl.to(".box:nth-child(3)", { rotation: 0, x: 0 });

  return tl;
}

const mainTimeline = gsap.timeline({
  paused: true,
  onComplete: () => {
    alert("Animation Done");
  },
  repeat: 2,
  repeatDelay: 1,
  yoyo: true,
});
mainTimeline
  .add(firstTimeline())
  .add(secondTimeline(), "+=2") // Gap of 2 seconds before animating
  .add(thirdTimeline(), "-=1"); // overlaped by 1 seconds early

mainTimeline.play();
