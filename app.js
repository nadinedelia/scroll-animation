gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to(".paper-plane", {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: 100, y: -20}], 
    curviness: 2,
    autoRotate: true
  }
});