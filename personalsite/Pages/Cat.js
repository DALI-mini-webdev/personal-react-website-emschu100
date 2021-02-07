import React, { Component } from 'react';

class Cat extends Component {
    constructor(props) {
        super(props);
        this.state = {color: "calico"};
    }

    changeState = () =>{
        this.setState(color, "tabby");
    }

    render(){

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
            </div>
        )
  
    }
}

export default Cat;