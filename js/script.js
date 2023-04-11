const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if (!!isReduced) {
    // If the user has reduced motion, just show the text without the animation
    document.getElementById('typed_animation').innerHTML = "I am a senior in computer science engineering and a lifelong fan of cool drinks and fun sports! I hope you enjoy this website!";
} else {
    // If the user has not reduced motion, show the animation
    var typed = new Typed('#typed_animation', {
        strings: ["I am a senior in computer science engineering and a lifelong fan of cool drinks and fun sports!", "I hope you enjoy this website!"],
        typeSpeed: 50,
        loop: true,
        backSpeed: 25,
        backDelay: 1000,
        showCursor: false,
        startDelay: 750,
        shuffle: false
    });
}