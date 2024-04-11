gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded',function() {
    gsap.from('.item',{
        filter:'blur(10px)',
        delay:0.1,
        duration:1,
        stagger:0.3
    })
});