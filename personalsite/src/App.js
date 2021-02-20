import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Cat from './Pages/Cat';
import download1 from'./Photos/download1.jpg';
import download from'./Photos/download.jpg';
import download2 from'./Photos/download2.jpg';
import Firebase from './firebase/index';
/*import CatBoard from './components/CatBoard';*/
import ToDoBoard from './components/ToDoBoard';


function App(){ 

  const name = "Emily"
  var nameComponent = (name== "Emily") ?
  <p>hi my name is {name}</p> : <p>my name is not Emily</p>;
  const buttonFunction = () => {
    console.log("the button was clicked");
  }

  console.log(firebase);
    console.log(firebase.db);


  return (

    <div className="App">
    <CatBoard />
    <ToDoBoard />

<header className="App-header">
  <Cat name = "Midnight"/>
        <div>{nameComponent}</div>
        {/* <button onClick={this.submit}> submit </button> */}
     </header>
   
      <h1 className = "white-text">Hi, My Name is Emily! :)</h1>
      <h2 className = "white-text">Dartmouth '24</h2>
      <p></p>
      <hr></hr>
      <img src={download.jpg}/>
      <img src={download1.jpg}/>
      <img src={download2.jpg}/>
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
    

   

      <Navbar/>
    </div>



  );



  } 

  export default App; 
