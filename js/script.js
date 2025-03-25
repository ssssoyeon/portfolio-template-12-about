
const marquee = gsap.timeline()


marquee.addLabel('a')
    .from('.marquee1 .in-wrap', {
        xPercent: -90
    }, 'a')
    .to('.marquee2 .in-wrap', {
        xPercent: -50
    }, 'a')
    .from('.marquee3 .in-wrap', {
        xPercent: -70
    }, 'a')


ScrollTrigger.create({
    animation:marquee,
    trigger:'#s1',
    start:'top 80%',
    end:'150% 60%',
    scrub:true,
    pin:false
})