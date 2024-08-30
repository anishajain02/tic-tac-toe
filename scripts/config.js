function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // + becoz it will convert "1" string as a number
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    //handling form submissions by js is easy by creating object in a different way by using
    //the new keyword and then later instantiating it using build-in function called FormData
    //FormData is a build-in blueprint which extracts the entered value automatically by user
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playerName').trim(); //get method allows us to get the value of one of our inputs
    //same text to be entered in the bracket of get fun as classname which acts like an identifier

    //checking for validation if text is entered by the user
    if (enteredPlayerName === '') {
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    if (editedPlayer == 1) {
        players[0].name = enteredPlayerName;
    }
    else {
        players[1].name = enteredPlayerName;
    }
    //better way instead of if-else
    //players[editedPlayer-1].name = enteredPlayerName;

    //for closing the edit-name server after clicking on confirm
    closePlayerConfig();

}