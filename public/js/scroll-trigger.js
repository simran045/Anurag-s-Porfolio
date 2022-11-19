gsap.registerPlugin(MotionPathPlugin);

var height = window.innerHeight;
var width = window.innerWidth;

const path = [
  { x: (Math.random(height) % 30) + 50, y: 10 },
  { x: 200, y: -800 },
  { x: 800, y: 0 },
  {
    x: window.innerWidth + 100,
    y: -400,
  },
];
const tl = gsap.timeline({
  repeat: -1,
});

tl.to(document.querySelector('.rocket'), {
  motionPath: {
    path: path,
    autoRotate: 90,
  },
  duration: 60,
  ease: 'none',
  immediateRender: true,
});
