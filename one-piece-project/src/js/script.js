/*
Objectives
1 - Click char button, mark the selected button
    1.1 - Took all buttons to verify when user click them
    1.2 - Add selected class in the clicked button
    1.3 - Verify if exist a selected button, if yes,
        remove it

2 - When click in char, show his info
    2.1 - Took all chars to show or hide them
    2.2 - Add selected class in the clicked char
    2.3 - Verify if exist a selected char, if yes,
        remove it
*/

//1.1
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        //1.3
        const selectedButton = document.querySelector(".button.selected");
        selectedButton.classList.remove("selected");

        //1.2
        button.classList.add("selected");
    });
});