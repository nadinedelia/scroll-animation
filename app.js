gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to(".paper-plane", {
  duration: 10,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: 100, y: -20}, {x: 300, y: 10}, {x: 500, y: -20}, {x: 700, y: 10}], 
    curviness: 1.25,
    autoRotate: true
  }
});