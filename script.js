const intro = document.querySelector('.intro')
const video = intro.querySelector('video')
const text = intro.querySelector('h1')

const section = document.querySelector('section')
const end = section.querySelector('h1')

// SCROLL MAGIC
const controller = new ScrollMagic.Controller()

// SCENES
const scene = new ScrollMagic.Scene({
    duration: 4900,
    triggerElement: intro,
    triggerHook: 0
})
// .addIndicators()
.setPin(intro)
.addTo(controller)

// VIDEO ANIMATION
let accelAmount = 0.5
let scrollPos = 0
let delay = 0

scene.on('update', e => {
    scrollPos = e.scrollPos / 100
})

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount
    video.currentTime = delay
}, 100);