//MEDIUM CHALLENGE part2 
//HARD Challenge lines 7-29
import React, { Component } from 'react'
import '../App.css';
export default class BasicInfo extends Component {

    constructor(props){
        super();
        // hard challenge
        this.state = {Person: [
          {id:1, Name: "Aida Arias", Number: "980-833-2309", DoB: "09/07/1998"},
          {id:2, Name: "Hector Arias", Number: "980-388-2209", DoB: "10/17/1994"},
          {id:3, Name: "Mochi Flores", Number: "980-203-4920", DoB: "08/20/2010"},
          {id:4, Name: "Natalia Lozano", Number: "980-598-2209", DoB: "01/09/1997"},
          {id:5, Name: "Steven Lozano", Number: "704-598-2209", DoB: "03/03/2010"},
        ]   
    }
  }
  render() {
    return (
      <div>
        {/* medium challenge */}
        <h2> Name: {this.props.info.Person.Name} </h2>
        <h2> Number: {this.props.info.Person.Number}</h2>
        <h2> DoB: {this.props.info.Person.DoB}</h2>

{/* hard challenge */}
        <div className='Array'>
          <ul>
          {this.state.Person.map(d => (<li key={d.id}> Name: {d.Name} <br></br> Number: {d.Number} <br></br> DoB: {d.DoB} </li>))}
          </ul>
        </div>
      </div>

      
    )
  }
}