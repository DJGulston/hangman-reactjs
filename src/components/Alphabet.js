
/**
 * Alphabet component that returns a group of buttons labelled from A to Z.
 * @param {*} props 
 * @returns 
 */
export default function Alphabet(props) {

    /**
     * Function that calls the clickLetter function letter from  the App component.
     * @param {*} e 
     */
    function clickLetter(e) {
        props.clickLetter(e);
    }

    const letters = props.letters;

    // Each letter in the letters array is mapped to a button element.
    // When any of the buttons are clicked, the clickLetter function from the App
    // component is called.
    const letterButtons = letters.map((letter) => 
        <button key={letter} class="letterButtons" onClick={clickLetter}>{letter}</button>
    );

    return(
        <div>
            {letterButtons}
        </div>
    );
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