import React, { Component } from 'react';
import Header from './header';

class Button extends Component {
 
    state = { count: 0 } ;
    onClick = () => {
      this.setState({count:this.state.count + 1});
  };
    render() { 
        return (<>
            <button onClick= {this.onClick}>
            Pet the cat : {this.state.count} </button>
     </> 
        );
    }
}
 
export default Button;