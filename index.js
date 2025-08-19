document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".box").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,           // <= ¡sí existe!
          start: "top bottom",
          toggleActions: "play none none none"
        }
      });
    });

    // Si además quieres animar cada .project con stagger cuando aparece .projects:
    gsap.from(".project", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".projects",
        start: "top bottom"
      }
    });
  });