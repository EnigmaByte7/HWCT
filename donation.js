gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded',function() {
   gsap.from(".nav-items", {
        y: "-100%", 
        opacity: 0, 
        duration: 1.5, 
        ease: "power2.out", 
        delay:1
        });

    gsap.from(".nav-heading", {
        y: "-100%", 
        opacity: 0, 
        duration: 1.5, 
        ease: "power2.out", 
        delay:1
        });
    gsap.to(".center-text",{
        opacity:1,
        duration:2,
        delay:2,
        ease:"power2.inout"
    });
    gsap.from('.header , .img-section',{
        filter:"blur(10px)",
        duration:1.5,
        delay:0.1,
        ease:"power2.in"
    })
    gsap.from('.head-first, .desc-first, .donate-btn-first',{
        transform:"translate(-100%,0)",
        duration:1.5,
        delay:0.1,
        ease:"power2.in",
        stagger:0.5,
        scrollTrigger:{
            trigger:"#first",
        }
    })
    gsap.from('.head-third, .desc-third, .donate-btn-third',{
        transform:"translate(-100%,0)",
        duration:1.5,
        delay:0.1,
        stagger:0.5,
        ease:"power2.in",
        scrollTrigger:{
            trigger:"#third",
        }
    })
    gsap.from('.head-second, .desc-second, .donate-btn-second',{
        transform:"translate(100%,0)",
        duration:1.5,
        delay:0.1,
        ease:"power2.in",
        stagger:0.5,
        scrollTrigger:{
            trigger:"#second",
        }
    })
    gsap.from('.img-section-first',{
        filter:"blur(10px)",
        duration:1,
        delay:0.1,
        ease:"power2.in",
        scrollTrigger:{
            trigger:"#first"
        }
    })
    gsap.from('.img-section-second',{
        filter:"blur(10px)",
        duration:1,
        delay:0.1,
        ease:"power2.in",
        scrollTrigger:{
            trigger:"#second"
        }
    })
    gsap.from('.img-section-third',{
        filter:"blur(10px)",
        duration:1,
        delay:0.1,
        ease:"power2.in",
        scrollTrigger:{
            trigger:"#third"
        }
    })
})