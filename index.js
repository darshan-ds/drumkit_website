
//Body


// Assigning event listener to the buttons with class name 'drum'
var allButtons = document.querySelectorAll('.drum');
// What to do when mouse is clicked
for(i=0;i<allButtons.length;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', onClick);
}

// What to do when keyboard key is pressed
document.addEventListener('keydown', (event)=>{
    var clickedkey = event.key;
    
    makeSound(clickedkey)
});



// Functions

// Function to make sound
function makeSound(clicked){
    switch(clicked){
        case "w":
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
            break;
    }
}

// Function to get the key which is clicked by mouse
function onClick(){
    makeSound(this.innerHTML)
}