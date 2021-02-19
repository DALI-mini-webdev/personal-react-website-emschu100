import axios from 'axios';
import React, { Component } from 'react';

class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {color: "calico"};
    }

    changeState = () => {
        this.setState(color, "tabby");
    }

    fetchData = () =>{
        axios.get("https://poetrydb.org/random")
        .then((response) => {
            console.log(response);
            this.setState({
                data: response.data[0]
            })
        }).catch((error) => {
            console.log(error);
        })
        }

    renderPoem = () =>{
        if(this.state.data){
            return(
               <div>
                   <div>Title: {this.state.data.title}</div>
                   <div>Author: {this.state.data.author}</div>

                <div>{
                    
                    this.state.data.lines.map((line) => {return(<div>{line}</div>)
                    })


                    }

               </div>
            )
        }
        else{
            <div>no poem</div>
        }

    }
    

    render()

    {
        console.log(this.state.data);
        var editBoxOrEditButton = null;
        if(this.state.editing){
            editBoxOrEditButton = (
                <div>
                    <input value = {this.state.newTitle} onChange ={this.changeNewTitle}/>
                    <button> submit </button>
                </div>
            )
       
        }
        else{
            editBoxOrEditButton = <button onClick ={this.editTitle}> Edit Title </button>
        }

        

        return(
            <div>

            <p>{this.props.name}, {this.props.breed}</p>
            <img src = {this.props.catURL} width={100} height={100}/>
            <button onLClick={this.deletePosting}>Delete</button>
            {editBoxOrEditButton}

            <p>I am the cat component</p>
            <p>the cat's color is {this.state.color} </p>
            <p> the cat's name is {this.props.name}</p>
            <button onClick = {this.changeState}> Click me </button>
            <button onClick={this.fetchData}>click me for poem</button>
            
            </div>
        );
        }
  
    }     
    

export default Cat;