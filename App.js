import './App.css';
import React, { Component } from 'react'
import BasicInfo from './components/BasicInfo';

export default class App extends Component {
  //EASY 
  //Medium here as well lines 26
  constructor(props){
    super();
   this.state = {
    Person:{
      Name: "Aida",
      Number:'980-987-0987',
      DoB:'09/07/1998'
    }}}

  render() {
    
    return (
      //Very Easy
      <div className='card'>
<BasicInfo info = {this.state}/>
        {/* <h1 className='name'> <BasicInfo info = {this.state}/></h1> */}
        {/* <p className='number'>980-987-0987</p>
        <p className='dob'>09/07/1998</p> */}
      </div>
    )
  }
}
