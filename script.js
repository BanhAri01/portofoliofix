const tl = gsap.timeline({
    scrollTrigger: {
       trigger: '.card-section',
       scroller: 'body',
       start: 'top 100%',
       end: 'top -200%',
 
       scrub: true,
    }
 })
 
 tl
    .to('body', { backgroundColor: '#000000' })
    .to('.card', { rotation: (d) => ((d - 2) * 10) + (d * 4), duration: 0.2 })
    .to('.card', { rotationY: (d) => d * 10, duration: 0.2 }, '<')
    .to('.card', { margin: 0 }, '-=0.1')
    .to('.back', { rotationY: -180, stagger: 0.1, ease: 'back.inOut' }, '-=0.2')
    .to('.front', { rotationY: 0, stagger: 0.1, ease: 'back.inOut' }, '<')
    .to('.card', { rotation: 0, rotationY: 0, stagger: 0.1 }, '<')
 
 ScrollTrigger.create({
    scroller: 'body',
    start: 'top top',
    end: 'top -200%',
    pin: '.card-section'
 })
 
 
 
 
 
 smoothScroll();
 function smoothScroll() {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
 
    gsap.ticker.add((time) => {
       lenis.raf(time * 1000)
    })
 
    gsap.ticker.lagSmoothing(0)
 }

gsap.to('.background', {
    duration: 2,
    height: '100%', 
    ease: 'power2.inOut'
});

gsap.fromTo('#loop h1', 
{ opacity: 0, y: 50 }, 
{ 
    opacity: 1, 
    y: 0, 
    duration: 1, 
    delay: 2,
    stagger: 0.5, 
    ease: 'power4.out'
});

gsap.from(".skill-item", {
    scrollTrigger: {
      trigger: "#skill",
      start: "top 70%",
      end: "bottom 10%",
      toggleActions: "play reverse play reverse",
    
    },
    opacity: 0,
    scale: 0.3,
    rotate: gsap.utils.wrap([-15, 15]),
    y: 80,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: {
      each: 0.1,
      from: "center"
    }
  });

  gsap.to('#projek', {
    backgroundColor: '#000000',
    color: '#ffffff',
    scrollTrigger: {
      trigger: '#projek',
      scroller: 'body',
      start: 'top 80%',
      end: 'bottom 100%',
      scrub: true,
    },
    ease: 'none'
  });
