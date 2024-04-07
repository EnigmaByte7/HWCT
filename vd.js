

document.addEventListener('DOMContentLoaded',function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#main-img',{
        filter: "blur(10px)",
        duration:2,
        ease:"power2.inout"
    });
    gsap.to(".main-nav , .center-text",{
        opacity:1,
        duration:2,
        delay:2,
        ease:"power2.inout"
    });
    gsap.from('.nav-items, .nav',{
        y:"-100%",    
        duration:1,
        delay:2,
        ease:"power2.out"
    });
    gsap.to('.mask-title',{
        display:"block",
        delay:0.5,
        ease:"power2.in",
        scrolltrigger:{
            trigger:".adopt-section"
        }
    })
    gsap.to('.adopt-description',{
        opacity:"1",
        duration:1.5,
        delay:0.5,
        ease:"power2.in",
        scrolltrigger:{
            trigger:".adopt-section"
        }
    })
    gsap.to(".adopt-btn",{
        filter:"drop-shadow(4px 5px 3px black)",
        duration:1,
        delay:0.5,
        ease:"power2.in",
        scrolltrigger:{
            trigger:".adopt-section"
        }
    })
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
            trigger:".adopt-section",
            start:"top center"
        },
        onComplete: function() {
            set.style.display = "none";
        }
    });
    gsap.to('.virtual-adoption-description',{
        opacity:"1",
        duration:1,
        delay:0.5,
        ease:"power2.in",
        scrolltrigger:{
            trigger:".virtual-adoption"
        }
    });
    gsap.to('.catg-item',{
        filter:"drop-shadow(5px 7px 9px black)",
        duration:1,
        delay:0.3,
        ease:"power2.in",

        scrolltrigger:{
            trigger:".categories"
        }
    });
    gsap.to('.sponsorship-description',{
        opacity:"1",
        duration:1,
        delay:0.5,
        ease:"powe2.in",
        scrolltrigger:{
            trigger:".sponsorship-section"
        }
    });
    gsap.to('.sponsorship-image',{
        borderRadius:"50%",
        duration:1.5,
        delay:0.5,
        ease:"power2.in",
        scrolltrigger:{
            trigger:".sponsorship-section"
        }
    });
    gsap.to('.faq-title',{
        textShadow:"0px 0px 20px #012cff",
        duration:1.5,
        delay:0.5,
        ease:"power2.in",
        scrolltrigger:{
            trigger:".faq-container"
        }
    })
    gsap.to('.sponsor-heading',{
        textDecoration:"underline",
        delay:0.5,
        duration:1,
        ease:"power2.in",
        scrolltrigger:{
            trigger:".sponsor-section"
        }
    })

})

function show_answer(that,img){
    let answer = document.getElementById(that);
    let image = document.getElementById(img);
    console.log();
     if (answer.style.display === 'none'){
        answer.style.display = 'block';
        image.classList.remove('reverse');
        image.classList.add('rotation');
    }
    else{
        answer.style.display = 'none';
        image.classList.remove('rotation');
        image.classList.add('reverse');
    }
}
