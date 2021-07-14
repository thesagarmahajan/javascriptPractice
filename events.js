// Vanila JS Event Listeners
// https://developer.mozilla.org/en-US/docs/Web/Events

// Mouse Events
mydiv.addEventListener('click', (e) => {
    console.log("Clicked");
});

// Mouse Button Identification
mydiv.addEventListener('mousedown', (e) => {
    switch(e.button){
        case 0:
            console.log("Left Click");
            break;
        case 1:
            console.log("Scroll Click");
            break;
        case 2:
            console.log("Right Click");
            break;
    }
});

// Scroll Events
// Uncomment h3 tag having content 'scroll' to see the result of scroll event
window.addEventListener('scroll', (e) => {
    
    console.log(window.scrollY);

});