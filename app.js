gsap.registerPlugin(MotionPathPlugin);

const tween = gsap.timeline();
tween.to(".corona", {
  duration: 5,
  ease: "power1.inOut",
  motionPath: {
    path: [{x: 100, y: -20}, 
         {x: 300, y: 10},
         {x: 500, y: 100}, 
         {x: 750, y: -100}, 
         {x: 300, y: -50}, 
         {x: 600, y: 100}, 
         {x: 800, y: 0},
         {x: window.innerWidth, y: -250}
        ], 
    curviness: 1.25,
    autoRotate: true
  }
});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 5000,
    triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller);