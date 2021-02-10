// Your code goes here

//heading bar changes to blue when moused over and returns to white when mouse leaves
const navContainer = document.querySelector('.main-navigation');
navContainer.addEventListener('mouseover', function(event) {
    navContainer.style.backgroundColor = '#6EA6FB';
    event.stopPropagation();
});
navContainer.addEventListener('mouseleave', function() {
    navContainer.style.backgroundColor = 'white';
});

// Push l and find out ;)
const letsGo = document.querySelector('.text-content h2');
document.addEventListener('keydown', function(event){
    if (event.key === 'l') {
        letsGo.style.fontSize = '100px';
        event.stopPropagation();
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

// resizes text during scroll in
const paragraphs = document.querySelectorAll('p');

window.addEventListener('resize', function() {
    paragraphs.forEach(object => object.style.fontSize = '200px');
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

//changes background color on load (currently not working)
const body1 = document.querySelector('body');
window.addEventListener('load', function(){
    body1.style.backgroundColor = 'green';
})
//changes text in pick your destination upon selection
const destinationSelection = document.querySelector('.content-destination p');
console.log(destinationSelection);
destinationSelection.addEventListener('select', function (){
    destinationSelection.textContent = "Do not touch";
})

const navigation = document.querySelectorAll('a');
for (let i = 0; i < navigation.length; i++){
    navigation[i].addEventListener('click', function(event){
        event.preventDefault();
    })
}



//  Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
//  Stop the navigation items from refreshing the page by using preventDefault()
