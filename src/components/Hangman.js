import Alphabet from './Alphabet.js';
import WordDisplay from './WordDisplay.js';
import HangmanImage from './HangmanImage.js';
import EndGameMessage from './EndGameMessage.js';
import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * Hangman component that allows the user to play the Hangman game. The component
 * consists of letters that the user can click on to guess the word, 'Generate Word'
 * button to generate a new word to guess and an image of the Hangman.
 * @param {*} props 
 * @returns 
 */
export default function Hangman(props) {

    // Retrieves the generated word.
    const word = props.word;

    // Calls the generateWord function from the App component.
    function generateWord() {
        props.generateWord();
    }

    // Calls the clickLetter function from the App component.
    function clickLetter(e) {
        props.clickLetter(e);
    }

    // The generated word is still blank, we display a message to the user to generate a new word.
    if(word === "") {

        return(
            <Card style={{
                border:'1px solid grey',
                borderRadius:'20px',
                width:'51%',
                display:'block',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:'30px',
                marginBottom:'30px',
                padding:'40px 10px'
                }}>

                <h1 class="card-heading">Let's Play!</h1>
                
                <Container>
                    <Row>
                        
                        <Col md={6}>
                            {/* Message displayed to the user, notifying them to generate a word. */}
                            <p>No word has been generated yet. Click the button below to generate a word.</p>

                            {/* Generate Word button that allows the user to generate a new word to guess. */}
                            <button class="generateButton" onClick={generateWord}>Generate Word</button>

                            {/* Displays the user's current answer to the word they are guessing, as well as all the letters they have guessed so far. */}
                            <WordDisplay word={props.word} wrongAnswers={props.wrongAnswers} answeredWord={props.answeredWord} guessedLetters={props.guessedLetters} />
                        </Col>

                        <Col md={6}>

                            {/* Displays the letter buttons that the user can click to guess the word. */}
                            <Alphabet letters={props.letters} clickLetter={clickLetter} />
                        </Col>
                        
                    </Row>
                </Container>
                
            </Card>
        );
    }
    else {
        return(
            <Card style={{
                border:'1px solid grey',
                borderRadius:'20px',
                width:'75%',
                display:'block',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:'30px',
                marginBottom:'30px',
                padding:'40px 10px'
                }}>

                <h1 class="card-heading">Let's Play!</h1>

                <EndGameMessage wrongAnswers={props.wrongAnswers} userWins={props.userWins} />

                <Container>
                    <Row>
                        
                        <Col md={4}>
                            {/* Displays the corresponding Hangman image based on the number of wrong answers the user has given. */}
                            <HangmanImage wrongAnswers={props.wrongAnswers} />
                        </Col>

                        <Col md={4}>

                            {/* Generate Word button that allows the user to generate a new word to guess. */}
                            <button class="generateButton" onClick={generateWord}>Generate Word</button>
                            <br/><br/><br/>

                            {/* Displays the user's current answer to the word they are guessing, as well as all the letters they have guessed so far. */}
                            <WordDisplay word={props.word} wrongAnswers={props.wrongAnswers} answeredWord={props.answeredWord} guessedLetters={props.guessedLetters} />
                        </Col>

                        <Col md={4}>

                            {/* Displays the letter buttons that the user can click to guess the word. */}
                            <Alphabet letters={props.letters} clickLetter={clickLetter} />
                        </Col>
                        
                    </Row>
                </Container>
                
            </Card>
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