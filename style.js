
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });


tl.from("#nav h1", {
    opacity: 0,
    duration: 1,
    y: -60,
   
});
tl.from("#part2 a, #part2 button",{
    y:-20,
    duration:0.5,
    delay:0.2,
    opacity:0,
    stagger:0.2

})


tl.from("#img1", {
    opacity: 0,
    duration: 1,
    y: 60,
    
});


tl.from("#img2", {
    opacity: 0,
    duration: 1,
    x: 60,
    
});


tl.from("#img3", {
    opacity: 0,
    duration: 1,
    y: -60,
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "section",
        scroller: "body",
        start: "top 60%",
        end: "top 20",
        scrub:5,
        ease:"power2.out"
        
    }
});

tl2.from("#part1", {
    opacity: 0,
    duration: 1,
    delay: 1
});


tl2.from("#i",{
    
    opacity: 0,
    duration: 1,
  x:-70
    
    
},"anime")
tl2.from("#about",{
    opacity:0,
    delay:0.2
},"anime")

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section2",
        scroller: "body",
        start: "top 60%",
        end: "top 0",
        scrub:5,
        ease:"power2.out"
        
    }
});
tl3.from(".card-item",{
    opacity:0,
    delay:0.3
    
})
tl3.from(".card-text",{
    y:-50,
    opacity:0
})

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#last",
        scroller: "body",
        start: "top 80%",
        end: "top 0",
        scrub:5,
        ease:"power2.out"
        
    }
});




