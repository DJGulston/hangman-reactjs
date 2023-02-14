
/**
 * WordDisplay component that displays the current answer of the word
 * that the user is trying to guess, and the all the letters that they
 * have guessed so far.
 * @param {*} props 
 * @returns 
 */
export default function WordDisplay(props) {

    let strGuessedLetters = "";

    // Retrieves the array of letters that the user has guessed so far.
    let guessedLetters = props.guessedLetters;

    // Puts the array of letters that the user has guessed so far in
    // a string format.
    for(let i = 0; i < guessedLetters.length; i++) {
        strGuessedLetters += guessedLetters[i] + " ";
    }

    // Removes the the extra space at the end from the string of guessed letters.
    strGuessedLetters = strGuessedLetters.trim();

    let strAnsweredWord = "";

    // If the user has at least 10 answers wrong, i.e. the user has lost the game,
    // then we set the value of strAnsweredWord as the actual final answer.
    if(props.wrongAnswers >= 10) {

        // Retrieves the actual final answer that the user was supposed to guess.
        let word = props.word;

        for(let i = 0; i < word.length; i++) {
            strAnsweredWord += word.charAt(i) + " ";
        }

    }
    else {
        
        // If the user has not lost the game yet, we simply update strAnsweredWord with
        // the user's current answer so far.

        let answeredWord = props.answeredWord;

        for(let i = 0; i < answeredWord.length; i++) {
            strAnsweredWord += answeredWord.charAt(i) + " ";
        }

    }

    // Removes the extra space from the strAnsweredWord string.
    strAnsweredWord = strAnsweredWord.trim();

    // If the word property is not blank, i.e. the user has successfully
    // generated a word, then we display the current answer that the user
    // has guessed so far, as well as all the letters that the user has
    // guessed.
    if(props.word !== "") {
        return(
            <div>
                <h3>{strAnsweredWord}</h3>
                <h4>Guessed Letters:</h4>
                <p>{strGuessedLetters}</p>
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