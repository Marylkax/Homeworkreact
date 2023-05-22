import React, { Component } from 'react';

class Cat extends Component {
    state = {  } 
    render() { 
        console.log(this.props)
        return (
            <div className = 'animalicon'>🐈{this.props.name}</div>
        );
    }
}
 
export default Cat;