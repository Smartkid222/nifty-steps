// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// PreLoader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    // delayed on purpose to see my awesome preloader :)
    setTimeout(()=>{preloader.classList.add('hide-preloader')}, 40000);
});
