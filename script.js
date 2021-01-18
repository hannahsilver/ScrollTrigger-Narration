gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});


gsap.utils.toArray(".slide").forEach((slide, i) => {
    ScrollTrigger.create({
        trigger: slide,
        start: "top top",
        // markers: true,
        // scrub: true,
        pin: true,
        pinSpacing: false,
        // anticipatePin: 1
      });

      
const tl = gsap.timeline( { 
   
    scrollTrigger: {
      trigger: slide,
      start: "top top",
    //   markers: true,
      scrub: true,
      toggleActions: "play reverse play reverse",
    }
    
  });
  
  tl
    .to(slide, { opacity: 1, duration: 0.2 })
    .to(slide, { opacity: 0, duration: 0.2 },
        0.5)

});
