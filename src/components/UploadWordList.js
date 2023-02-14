import {Card} from 'react-bootstrap';

/**
 * UploadWordList component that allows the user to upload a .txt file
 * consisting of a list of words.
 * @param {*} props 
 * @returns 
 */
export default function UploadWordList(props) {
    
    // Retrieves the name of the uploaded file.
    const uploadedFileName = props.uploadedFileName;

    // If the uploaded file name is blank, we simply display the file input chooser
    // and ask the user to upload a .txt file containing a word list.
    if(uploadedFileName === "") {

        return(
            <Card style={{
                border:'1px solid grey',
                borderRadius:'20px',
                width:'30%',
                display:'block',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:'30px',
                marginBottom:'30px',
                padding:'40px 30px'
                }}>

                <h1>Upload</h1>
                <br/>

                <p>Please upload a .txt file containing a list of words separated by a line break:</p>
                
                {/* 
                    File input choosed that allows the user to upload a file. When the user chooses a
                    file, the uploadWords function from the App component is called.
                */}
                <input class="uploadFile" type="file" onChange={(e) => props.uploadWords(e)} />
                <br/><br/>

            </Card>
        );
    }
    else {

        // If the uploadedFileName is not blank, i.e. a file has been uploaded, then a message is displayed
        // to the user, notifying them that a file has been uploaded.
        return(
            <Card style={{
                border:'1px solid grey',
                borderRadius:'20px',
                width:'30%',
                display:'block',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:'30px',
                padding:'40px 30px'
                }}>

                <h1>Upload</h1>
                <br/>

                {/* Displays a message to user, notifying them that a file has been uploaded. */}
                <p>{uploadedFileName} has been uploaded.</p>
                
                {/* 
                    File input choosed that allows the user to upload a file. When the user chooses a
                    file, the uploadWords function from the App component is called.
                */}
                <input class="uploadFile" type="file" onChange={(e) => props.uploadWords(e)} />
                <br/><br/>
                
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