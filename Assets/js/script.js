AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// google sheet response script
const scriptURL = 'https://script.google.com/macros/s/AKfycbzxPKM0wTAGmJj0B8QDkgiiFU0m0B3HZZpRg8Y56-qaqw9Azy1x6TmRj88J2sqn73yj/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Response Submitted"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000);
        })
        .catch(error => console.error('Error!', error.message))
})

// footer

const footer = document.getElementById("footer")
const date = new Date()
footer.textContent = `©Soorya Narayanan, ${date.getFullYear()}`