gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded',function() {
    gsap.to(".head-text", {
        opacity: 1,
        duration: 1.5, 
        ease: "power2.out", 
        delay: 1, 
      });

    gsap.from(".sub-text", {
    y: "100%", 
    opacity: 0, 
    duration: 1, 
    ease: "power2.out", 
    delay:1
    });

    gsap.from(".description", {
        y: "100%", 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out", 
        delay:1,
        scrollTrigger:{
            trigger:".heading"
        }
        });

    gsap.from(".nav-items", {
        y: "-100%", 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out", 
        delay:1
        });

    gsap.from(".nav-heading", {
        y: "-100%", 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out", 
        delay:1
        });

    gsap.from(".donate", {
        width:"0%",
        height:"0%",
        opacity: 0, 
        duration: 1, 
        ease: "power3.out", 
        delay:1
        });

    gsap.to("#pop1",{
        filter:"drop-shadow(2px 4px 6px black)",
        delay:0.5,
        ease:"power2.in",
        scrollTrigger:{
            trigger:"#pop1",
        }
    });

    gsap.to("#pop2",{
        filter:"drop-shadow(2px 4px 6px black)",
        delay:0.5,
        ease:"power2.in",
        scrollTrigger:{
            trigger:"#pop2",
        }
    });
    
    gsap.to("#pop3",{
        filter:"drop-shadow(2px 4px 6px black)",
        delay:0.5,
        ease:"power2.in",
        scrollTrigger:{
            trigger:"#pop3",
        }
    });

    gsap.to(".heading-after",{
        display:"block",
        delay:0.5,
        ease:"power2.in",
        scrollTrigger:{
            trigger:".heading"
        }
    });
    gsap.to(".heading",{
        opacity:"1",
        delay:0.5,
        ease:"power2.in",
        scrollTrigger:{
            trigger:".heading"
        }
    });

    gsap.from("#head",{
        filter:"blur(10px)",
        duration:1.5,
        ease:"power2.out"  
    });

    gsap.from('.shelter-image',{
        imageRendering:"pixelated",
        delay:0.5,
        duration:2,
        ease:"power2.in",
        scrollTrigger:{
            trigger:".shelter-image"
        },
        onStart: function() {
            document.querySelector('.shelter-name').classList.add('swipe');
        }
    });

    const set = document.querySelector('.chunks');
    for (let i =0 ; i<=49 ; i++){
        const blocks = document.createElement('div');
        blocks.classList.add('chunky-block');
        set.appendChild(blocks);
    }
    gsap.to(".chunky-block",{
        transform:"scale(0)",
        borderRadius:"50%",
        duration:2,
        delay:0.5,
        stagger:0.01,
        ease:"power2.inout",
        scrollTrigger:{
            trigger:".shelter-image",
            start:"top center"
        },
        onComplete: function() {
            set.style.display = "none";
        }
    });

    gsap.from(".shelter-description",{
        opacity:0,
        delay:0.5,
        duration:1.5,
        ease:"powe2.inout",
        scrollTrigger:{
            trigger:".shelter-description",
            start:"top center"
        }
    });

    gsap.to('#women, #nutri, #digi, #dev',{
        filter:"drop-shadow(4px 5px 6px black)",
        duration:1,
        delay:0.5,
        ease:"power2.in",
        scrollTrigger:{
            trigger:".women-empowerment-section",
        },
        onStart: function() {
            var shelterNames = document.querySelectorAll('.shelter-name');
            shelterNames[1].classList.add('swipe');
        }
    });

    function counter(id, target){
        const elem = document.getElementById(id);
        let count = 0;
        function update(){ 
            count++;
            if (count <= target){
                elem.innerText = count;
                setTimeout(update,count >= target - 5 ? (count % 10)*100 : 0);  
            } 
      
        }
        update();
    }
     ScrollTrigger.create(
        {
            trigger:".statistics-container",
            onEnter: function() {
                counter('child',1665);
                counter('food',1156);
                counter('pwd',2065);
                counter('animal',1237);
            },
            once:true
        }
    );
    
    gsap.to('#one, #two, #three, #four',{
        filter:"drop-shadow(4px 5px 6px black)",
        duration:1,
        delay:0.5,
        ease:"power2.in",
        scrollTrigger:{
            trigger:".statistics-container"
        }
    });

    gsap.to('.image-wrapper',{
        filter:"drop-shadow(4px 5px 6px black)",
        duration:1,
        delay:0.5,
        ease:"power2.in",
        scrollTrigger:{
            trigger:".collaborate-section"
        }
    });
    gsap.to('.img-top',{
        filter:"drop-shadow(4px 5px 6px black)",
        duration:1,
        delay:0.5,
        ease:"power2.in",
        scrollTrigger:{
            trigger:".testimonial-sec"
        }
    });

    gsap.from('.text',{
        opacity:"0",
        duration:1,
        delay:0.5,
        ease:"power2.inout",
        scrollTrigger:{
            trigger:".testimonial-sec"
        }
    });
})
