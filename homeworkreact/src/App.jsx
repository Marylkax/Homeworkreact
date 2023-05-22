import React, { Component } from 'react';
import Cat from './components/cat';
import Header from './components/header';
import Button from './components/button';

class App extends Component {

  render() { 
   
    return( <>
      <Header />
      <Button />
      <Cat name={"Garfield"}/>
     </>
     )
   
  
  }
}
export default App;
