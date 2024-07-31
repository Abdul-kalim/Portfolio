// pointer on the screen
const trailer = document.getElementById("trailer");
window.onmousemove = e => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }
    trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    })
}


// text animation
let typeSplit = new SplitType('[animate]', {
    types: 'lines, words, chars',
    tagName: 'span'
})

gsap.from('[animate] .line', {
    y: '100%',
    opacity: 0.3,
    duration: 0.5,
    ease: 'power1.out',
    stagger: 0.1,

})


// image move 
function mouse3deffect() {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        document.querySelectorAll('.layer').forEach(Layer => {
            const speed = Layer.getAttribute('data-speed')
            const x = (window.innerWidth - e.pageX * speed) / 500
            const y = (window.innerWidth - e.pageY * speed) / 500
            Layer.style.transform = `translate(${x}px) translate(${y}px)`;
            Layer.style.zIndex = "999"
        });

    }
}
mouse3deffect()



//lenis 
const lenis = new Lenis()
lenis.on('scroll', (e) => {
    console.log(e)
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)



// gsap
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#Project',
        // markers: true,
        start: '0% 50%',
        end: '80% 50%',
        scrub: true,
    }
});

tl.to("#flashnet", {
    width: "500px",

})
    .to("#starbuks", {
        width: "500px",
    })
    .to("#swt", {
        width: "500px",
    })



let tll = gsap.timeline({
    scrollTrigger: {
        trigger: '#Contact',
        markers: true,
        start: '30% 50%',
        end: '90% 50%',
        scrub: true,
    }
});

tll.to("#contactt", {
    opacity: 16,
    delay: 1,
    stagger: 1
})

    .to("#details", {
        opacity: 16,
        delay: 1,
        stagger: 1
    })
    .to(".center", {
        top: "50px"
    })

let tlll = gsap.timeline({
    scrollTrigger: {
        trigger: '#About_us',
        markers: true,
        start: '0% 50%',
        end: '50% 50%',
        scrub: true,
    }
});

tlll.to("#about", {
    opacity: 1,
    delay: 1
})
// .from("#about",{
//     opacity: 0
// })