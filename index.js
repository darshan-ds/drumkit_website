
// This function will execute once a key is clicked
function whenClicked(){
    var clickedButton = this.innerHTML;
    
}

// Assigning event listener to the buttons with class name 'drum'
const allButtons = document.querySelectorAll('.drum');
for(i=0;i<allButtons.length;i++){
    allButtons[i].addEventListener('click', whenClicked);
}

