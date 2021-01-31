import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const name = "Emily"
  var nameComponent = (name== "Emily") ?
  <p>hi my name is {name}</p> : <p>my  name is not Emily</p>;
  const buttonFunction = () => {
    console.log("the button was clicked");
  }
 

  return(
    
    <div className='App'>

    <header className="App-header">
        <div>{nameComponent}</div>
       <button onClick={buttonFunction}>I am a button</button>
     </header>
   </div>
      </header>

    <body>
      <h1 className = "white-text">Hi, My Name is Emily! :)</h1>
      <h2 className = "white-text">Dartmouth '24</h2>
      <p></p>
      <hr></hr>
      <img src="download.jpg"/>
      <img src="download-1.jpg"/>
      <img src="download-2.jpg"/>
      <a href="google.com">link text</a>
      <div>
      <h2 className = "white-text">Here are some of my favorite things: </h2>
      <ol>
      <li className = "white-text" id = "blue background"> Hiking </li>
      <li className = "white-text"> Smiley Face Emojis :) </li>
      <li className = "white-text"> Coffee!</li>
      <li className = "white-text"> Sunny Days</li>
      <li className = "white-text"> Mac n Cheese</li>
      </ol>
      </div>
    </body>

  </div>


  );



export default App;
