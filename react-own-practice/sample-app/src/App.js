import React , {Component} from 'react';
import './App.css';
import {Details} from './components/detail-page/detail';
import {Fee} from './components/fee-page/fee';
class App extends Component{
  constructor(){
    super();
    this.state={
      name:'Your name',
      duration:105,
      price:450
    };
  }

  render(){
    const {name,duration,price} = this.state;
    return(
      <div className="Course">
        <h1>{'name is: ' + name}</h1>
        <Details  name={name} duration={duration}/>
        <Fee price={price}/>
      </div>
    )
  }
  
}

export default App;
