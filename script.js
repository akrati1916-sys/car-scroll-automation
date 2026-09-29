gsap.registerPlugin(ScrollTrigger);


const intro = gsap.timeline();

intro.from(".tag", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: "power3.out"
});

intro.from("h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power4.out"
}, "-=0.4");

intro.from(".description", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.5");

intro.from(".stat", {
  opacity: 0,
  y: 30,
  stagger: 0.15,
  duration: 0.7,
  ease: "power3.out"
}, "-=0.4");

intro.from(".car", {
  opacity: 0,
  x: 200,
  scale: 0.8,
  duration: 1.4,
  ease: "power3.out"
}, "-=1");


document.querySelectorAll(".number").forEach(number => {

  const target = Number(number.dataset.value);

  gsap.to(number, {
    innerText: target,
    duration: 1.5,
    delay: 0.7,
    snap: {
      innerText: 1
    },
    ease: "power2.out"
  });

});




const scrollTimeline = gsap.timeline({

  scrollTrigger: {

    trigger: ".hero",

    start: "top top",
    end: "bottom bottom",

    scrub: 1.5,

    

  }

});


scrollTimeline.to(".car-wrapper", {

  x: -window.innerWidth * 0.25,

  y: 120,

  rotate: -4,

  scale: 1.15,

  ease: "none"

}, 0);


scrollTimeline.to(".hero-content", {

  y: -180,

  opacity: 0.15,

  scale: 0.9,

  ease: "none"

}, 0);




scrollTimeline.to(".glow", {

  scale: 1.5,

  opacity: 0.25,

  ease: "none"

}, 0);


scrollTimeline.to(".scroll-text", {

  opacity: 0,

  y: 30,

  ease: "none"

}, 0);




gsap.to(".car", {

  y: -20,

  duration: 2,

  repeat: -1,

  yoyo: true,

  ease: "sine.inOut"

});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

  gsap.globalTimeline.timeScale(0);

}
