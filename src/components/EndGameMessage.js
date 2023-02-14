
/**
 * EndGameMessage component that returns either a winning message or a losing
 * message depending on the user's outcome of the round of Hangman.
 * @param {*} props 
 * @returns 
 */
export default function EndGameMessage(props) {
    
    const userWins = props.userWins;
    const wrongAnswers = props.wrongAnswers;
    
    if(userWins) {

        // If the userWins value is true, then return a victory message. Note that if the
        // userWins value is false, it doesn't necessarily mean the user has lost the game.
        // It just means the user hasn't won the game yet.
        return(
            <div class="endGameMessage">
                <h3>Congratulations! You win!</h3>
            </div>
        );
    }
    else if(wrongAnswers >= 10) {

        // If the number of wrong answers is at least 10, then the user has lost the game
        // and a defeat message is displayed.
        return(
            <div class="endGameMessage">
                <h3>Tough luck! You lose!</h3>
            </div>
        );
    }
}

/*

References:

How to read random line from txt file using JavaScript:
- https://stackoverflow.com/questions/13392059/grabbing-a-random-line-from-file

How to read from txt file using JavaScript:
- https://www.geeksforgeeks.org/how-to-read-a-local-text-file-using-javascript/

How to use a callback function:
- https://www.w3schools.com/js/js_callback.asp

How to get text from inside button using event target in JavaScript:
- https://stackoverflow.com/questions/61995954/how-do-i-target-the-text-value-of-my-button-using-event

How to center an element vertically and/or horizontally with CSS:
- https://www.w3schools.com/howto/howto_css_center-vertical.asp

How to use the React Bootstrap grid layout:
- https://react-bootstrap.github.io/layout/grid/

How to get a character in a string in JavaScript:
- https://www.w3schools.com/jsref/jsref_charat.asp

How to get the name of an HTML input file:
- https://stackoverflow.com/questions/857618/javascript-how-to-extract-filename-from-a-file-input-control

How to read a text file in React JS:
- https://stackoverflow.com/questions/55830414/how-to-read-text-file-in-react

How to use regular expressions in JavaScript:
- https://www.w3schools.com/js/js_regexp.asp
- https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285

*/