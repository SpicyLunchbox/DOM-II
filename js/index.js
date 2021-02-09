// Your code goes here

//heading bar changes to blue when moused over and returns to white when mouse leaves
const navContainer = document.querySelector('.main-navigation');
navContainer.addEventListener('mouseover', function() {
    navContainer.style.backgroundColor = '#6EA6FB';
});
navContainer.addEventListener('mouseleave', function() {
    navContainer.style.backgroundColor = 'white';
});

// Push l and find out ;)
const letsGo = document.querySelector('.text-content h2');
document.addEventListener('keydown', function(event){
    if (event.key === 'l') {
        letsGo.style.fontSize = '100px';    
    }
})
document.addEventListener('keyup', function(){
    letsGo.style.fontSize = '3rem';

})

// Changes the bus image to something else
const busImage = document.querySelector('header img');

busImage.addEventListener('dblclick', function() {
    busImage.src = "https://i.pinimg.com/originals/73/c4/fc/73c4fc769e9df14d4d80240741dc795d.jpg";
})

// Not working, come back to later, also why does addEventListener need window as opposed to document?
window.addEventListener('resize', function() {
    p.style.fontSize = '200px';
})

//changes adventure awaits on scroll
const adventureAwaits = document.querySelector('section:nth-child(3) div.text-content h2')
window.addEventListener('scroll', function(){
    adventureAwaits.textContent = "Keep Scrolling";
})

//changes let's Go! on scroll
window.addEventListener('scroll', function(){
    letsGo.textContent = "wait don't leave";
})

//changes background color on load
busImage.addEventListener('load', function(){
    body.style.backgroundColor = 'green';
})


// Task 2: Create listeners for 10 types of events
//  Using your index.js file, create event listeners of at least 10 different types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
// mouseover
// keydown
// wheel
// load
// focus
// resize
// scroll
// select
// dblclick
// drag / drop
// Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

//  Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
//  Stop the navigation items from refreshing the page by using preventDefault()