// import logo from './logo.svg';
// import './App.css';
import {Component} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Hangman from './components/Hangman.js';
import Help from './components/Help.js';
import UploadWordList from './components/UploadWordList.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      wordList : props.wordList,
      word : props.word,
      uploadedFileName : props.uploadedFileName,
      letters : props.letters,
      guessedLetters : props.guessedLetters,
      answeredWord : props.answeredWord,
      userWins : props.userWins,
      wrongAnswers : props.wrongAnswers
    };

    this.generateWord = this.generateWord.bind(this);
    this.uploadWords = this.uploadWords.bind(this);
    this.clickLetter = this.clickLetter.bind(this);
    this.charIsLetter = this.charIsLetter.bind(this);
    this.removeBlankWords = this.removeBlankWords.bind(this);
  }

  /**
   * Function that checks if a character is a letter, i.e. determines that a
   * character is not a special character or a number.
   * @param {*} char 
   * @returns 
   */
  charIsLetter(char) {
    let letters = this.state.letters;

    let isLetter = false;

    for(let i = 0; i < letters.length; i++) {
      if(char === letters[i]) {
        isLetter = true;
      }
    }

    return isLetter;
  }

  /**
   * The generateWord function allows the user to generate a new word for them to guess.
   * The word is generated using the content of the uploaded .txt file.
   */
  generateWord() {
    const wordListArr = this.state.wordList;

    let wordListSize = wordListArr.length;

    let generatedWord = "";

    // If the word list array is empty, then display a message to the user to upload a .txt file of a word list.
    if(wordListSize <= 0) {
      alert("No word could be generated. Please ensure you have uploaded a .txt file that contains a list of words.");
    }
    else {

      // Obtains a random index within the range of the total number of words in the word list.
      let randomIndex = Math.floor(Math.random() * wordListSize);

      // Random word obtain from the word list array using the random index.
      generatedWord = wordListArr[randomIndex];

      // Sets the state of the newly generated word.
      this.setState({
        word : generatedWord
      });
    }

    // This variable represents the user's answer that will be shown in the word display component.
    let newAnsweredWord = "";

    for(let i = 0; i < generatedWord.length; i++) {

      // Obtain a character from the generated word.
      let ch = generatedWord.charAt(i);

      // If the character obtained is not a letter, then append that character to the answer word string as it is
      // since the user will be unable to guess that character.
      if(!this.charIsLetter(ch)) {
        newAnsweredWord += ch;
      }
      else {

        // If the character obtained is a letter, then append an underscore to the answer word string since the
        // user will be able to guess that character. The user can only guess letters, not numbers or symbols.
        newAnsweredWord += "_";
      }
      
    }

    // When a new word is generated, we need to the ensure that the guessed letters, userWins status and wrongAnswers
    // is set back to their default values, because the user is starting a new game.
    // We also set the answeredWord variable to a string of underscores (and also maybe symbols and/or numbers if the
    // generated word is not only made up of letters).
    this.setState({
      guessedLetters : [],
      answeredWord : newAnsweredWord,
      userWins : false,
      wrongAnswers : 0
    });
  }

  /**
   * Function that returns an array of words with all blank words removed.
   * @param {*} wordList 
   * @returns 
   */
  removeBlankWords(wordList) {

    // New array of words that we will return.
    let newWordList = [];

    for(let i = 0; i < wordList.length; i++) {

      // Obtain a word from the word list.
      let word = wordList[i];

      // If the word obtained is not a blank string, then we add that word to the new array of words.
      if(word !== "") {
        newWordList.push(word);
      }
    }

    return newWordList;
  }

  /**
   * Function that uploads the .txt to the web application. The contents of the .txt file are read
   * and saved within the state of the App component.
   * @param {*} e 
   */
  uploadWords(e) {

    // Obtains the name of the file that was uploaded.
    let fileName = e.target.files[0].name;

    // If the name of the uploaded file is not a .txt file, the file is not read and
    // a message is displayed to the user, notifying them that they must upload a
    // .txt file only.
    if(fileName.substring(fileName.length - 4) !== ".txt") {
      alert("Incorrect file type. Please upload a .txt file only.");
    }
    else {

      // If the uploaded file is a .txt file, we proceed to read the file contents.

      // Array that will contain the list of words from the .txt file.
      let wordListArr = [];

      e.preventDefault();

      const reader = new FileReader();

      // Contents of the file are read asynchronously.
      reader.onload = async (e) => {

        // Contents of the file obtained as one large string result.
        const text = e.target.result;

        // The large string result is split up into multiple strings and saved as an
        // array with the delimiters \r, \n, \r\n and \n\r. We use 4 different delimiters
        // since the user might have a .txt file with a different type of end of line
        // character compared to someone else.
        wordListArr = text.toUpperCase().split(/\r\n|\r|\n|\n\r/);

        // Any blank words that the .txt file may have had are removed.
        wordListArr = this.removeBlankWords(wordListArr);

        // If the word list array does not have any elements, the user is notified of this
        // and that they must double check the values in their .txt file.
        if(wordListArr.length < 1) {
          alert("No words were uploaded. Please ensure that your .txt file is not empty.");
        }

        // State of the word list is set, and thus the word list is uploaded.
        this.setState({
          wordList : wordListArr
        });
      };

      reader.readAsText(e.target.files[0]);

      // When a new file is uploaded, the state of the hangman game is set back to
      // default and the uploaded file name is saved. The user's previous guessed
      // letters is set back to nothing, the previous answered word is set back to
      // blank, the userWins status is set back to false, the wrong answers is set
      // back to 0 and the word is set back to nothing since we have not generated
      // a word yet.
      this.setState({
        uploadedFileName : fileName,
        guessedLetters : [],
        answeredWord : "",
        userWins : false,
        wrongAnswers : 0,
        word : ""
      });
    }

    
  }

  /**
   * Function that updates the user's answer whenever they click a letter. If the
   * user clicks a letter that exists in the word, the answer is updated. If the
   * user clicks a letter that does not exist in the word, the user's number of
   * wrong answers increments by 1. The guessed letters gets updated for every
   * letter they click. The user is unable to click a letter more than once.
   * @param {*} e 
   */
  clickLetter(e) {

    let wrongAnswers = this.state.wrongAnswers;
    let userWins = this.state.userWins;
    let word = this.state.word;

    // If the user has less than 10 wrong answers, their userWins status is false
    // and the generated word is not blank, then that means there is an ongoing
    // game and we are allowed to click a letter.
    if(wrongAnswers < 10 && !userWins && word !== "") {
      
      // Gets the text value of the button that was clicked.
      let guessedLetter = e.target.innerText;
  
      // Boolean value that determines if we have already guessed a letter.
      let alreadyGuessed = false;
  
      let guessedLetters = this.state.guessedLetters;
  
      // Checks through all previously guessed letters. If the letter the user
      // clicked already exists in the guessed letters array, we set alreadyGuessed
      // to true.
      for(let i = 0; i < guessedLetters.length; i++) {
        if(guessedLetter === guessedLetters[i]) {
          alreadyGuessed = true;
        }
      }
  
      // If the user already guessed the letter they clicked on, the user is notified
      // and is told to click on a different letter.
      if(alreadyGuessed) {
        alert("You already guessed " + guessedLetter + ". Guess another letter.");
      }
      else {

        // If the clicked letter was not already guessed before, we add that letter to
        // the guessed letters array.
        guessedLetters.push(guessedLetter);
  
        // We obtain the user's current answer that they have guessed so far.
        let oldAnsweredWord = this.state.answeredWord;
  
        // This will be our updated answer that the user has guessed so far.
        let newAnsweredWord = "";
  
        // Boolean that determines whether a user has guessed a correct letter.
        let correctGuess = false;
  
        // Iterates through each character of the generated word to see if the user
        // has guessed a correct letter.
        for(let i = 0; i < word.length; i++) {
          
          let ch = word.charAt(i);
  
          // If the clicked letter is the same as the character of the generated
          // word at index i, then we add that character to the new answer and set
          // the correctGuess variable to true.
          if(guessedLetter === ch) {
            newAnsweredWord += ch;
            correctGuess = true;
          }
          else {
            // If the clicked letter is NOT the same as the character of the generated
            // word at index i, then we just add the character of the old answer at
            // index i to the new answer.
            newAnsweredWord += oldAnsweredWord.charAt(i);
          }
        }
  
        // Update the user's answer and the guessed letters.
        this.setState({
          answeredWord : newAnsweredWord,
          guessedLetters : guessedLetters
        });
  
        // If the user's answer is the same as the generated word, i.e. all the characters
        // in the user's answer match up with all the characters in the generated word,
        // then we update the userWin status to true.
        if(newAnsweredWord === word) {
          this.setState({
            userWins : true
          });
        }
  
        // If the clicked letter was not a correct answer, we increment the user's number
        // of wrong answers.
        if(!correctGuess) {
          
          wrongAnswers++;
  
          this.setState({
            wrongAnswers : wrongAnswers
          });

        }
      }
    }

  }

  render() {
    
    return (
      <div>
        {/* Header for the Hangman game. */}
        <div id="outer-div">
          <div id="page-header">
            <h1 id="main-heading">Welcome to Hangman!</h1>
          </div>
        </div>
        
        {/* Navigation menu that allows the user to go to the Play, Help and Upload pages. */}
        <nav>
          <Link class="nav-menu-item" to="/">Play</Link>
          <Link class="nav-menu-item" to="/help">Help</Link>
          <Link class="nav-menu-item" to="/upload">Upload</Link>
        </nav>
        
        {/* Displays the appropriate component based on which navigation link the user clicked on. */}
        <Routes>
          <Route exact path="/" element={<Hangman letters={this.state.letters} word={this.state.word} wordList={this.state.wordList}
                      wrongAnswers={this.state.wrongAnswers} answeredWord={this.state.answeredWord} guessedLetters={this.state.guessedLetters}
                      userWins={this.state.userWins} generateWord={this.generateWord} clickLetter={this.clickLetter} />} />
          <Route exact path="/help" element={<Help />} />
          <Route exact path="/upload" element={<UploadWordList uploadWords={this.uploadWords} uploadedFileName={this.state.uploadedFileName} />} />
        </Routes>
      </div>
    );
  }

  
}

export default App;

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