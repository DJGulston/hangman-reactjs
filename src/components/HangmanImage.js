import hangman1 from '../images/state1.GIF';
import hangman2 from '../images/state2.GIF';
import hangman3 from '../images/state3.GIF';
import hangman4 from '../images/state4.GIF';
import hangman5 from '../images/state5.GIF';
import hangman6 from '../images/state6.GIF';
import hangman7 from '../images/state7.GIF';
import hangman8 from '../images/state8.GIF';
import hangman9 from '../images/state9.GIF';
import hangman10 from '../images/state10.gif';
import hangman11 from '../images/state11.GIF';

/**
 * HangmanImage component that returns the corresponding Hangman image based on
 * the number of wrong answers the user has given.
 * @param {*} props 
 * @returns 
 */
export default function HangmanImage(props) {

    // If the user has 0 wrong answers, the first state of the hangman image is displayed.
    // If the user has 1 wrong answer, the second state of the hangman image is displayed.
    // And so on...

    if(props.wrongAnswers === 0) {
        return(
            <img class="hangman-img" src={hangman1} alt="Hangman State 1" />
        );
    }
    else if(props.wrongAnswers === 1) {
        return(
            <img class="hangman-img" src={hangman2} alt="Hangman State 2" />
        );
    }
    else if(props.wrongAnswers === 2) {
        return(
            <img class="hangman-img" src={hangman3} alt="Hangman State 3" />
        );
    }
    else if(props.wrongAnswers === 3) {
        return(
            <img class="hangman-img" src={hangman4} alt="Hangman State 4" />
        );
    }
    else if(props.wrongAnswers === 4) {
        return(
            <img class="hangman-img" src={hangman5} alt="Hangman State 5" />
        );
    }
    else if(props.wrongAnswers === 5) {
        return(
            <img class="hangman-img" src={hangman6} alt="Hangman State 6" />
        );
    }
    else if(props.wrongAnswers === 6) {
        return(
            <img class="hangman-img" src={hangman7} alt="Hangman State 7" />
        );
    }
    else if(props.wrongAnswers === 7) {
        return(
            <img class="hangman-img" src={hangman8} alt="Hangman State 8" />
        );
    }
    else if(props.wrongAnswers === 8) {
        return(
            <img class="hangman-img" src={hangman9} alt="Hangman State 9" />
        );
    }
    else if(props.wrongAnswers === 9) {
        return(
            <img class="hangman-img" src={hangman10} alt="Hangman State 10" />
        );
    }
    else if(props.wrongAnswers === 10) {
        return(
            <img class="hangman-img" src={hangman11} alt="Hangman State 11" />
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