import {Card} from 'react-bootstrap';
import upload_example from '../images/upload_example.png';

/**
 * Help component that displays to the user the rules of hangman and how to upload a TXT file consistingcin order
 * to use the Hangman web application.
 * @param {*} props 
 * @returns 
 */
export default function Help(props) {
    return(
        <Card style={{
            border:'1px solid grey',
            borderRadius:'20px',
            width:'55%',
            display:'block',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:'30px',
            marginBottom:'30px',
            padding:'40px 30px'
            }}>

            <h1>Help</h1>
            <br/>

            {/* Explains the rules of Hangman. */}
            <h3>Hangman Rules:</h3>

            <p>
                To play Hangman, you must generate a word. Once that word is generated, you must try to guess 
                the word letter by letter. Click on any letter to guess the word. If you guess incorrectly too 
                many times, you will lose! Each time you guess incorrectly, the Hangman image will be drawn line by 
                line. If you managed to guess all the letters correctly before the Hangman image is completely drawn, 
                you win!
            </p>

            <br/>

            {/* Displays information about how to upload a TXT file consisting of a list of words. */}
            <h3>How to upload a word list:</h3>

            <p>
                In order to play this version of Hangman, you need to upload a .txt file containing a list of words. 
                Each word must be separated by a line break. The casing of the letters in your words does not matter. 
                In other words, "DOG", "dOg", "Dog", "DoG", "doG", "DOg" and "dOG" are all read the same way by the 
                web application for example.

                <br/><br/>
                So, your .txt file should look something like this:
            </p>

            <img class="upload-example" src={upload_example} alt="TXT file example" />
        </Card>
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