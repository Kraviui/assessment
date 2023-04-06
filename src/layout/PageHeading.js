import React, { Component } from 'react'
import './App.css';

export default class PageHeading extends Component{
  state={
    name:"Explore",
    subtext:"From one-guest rooms to penthouses with pools and gardens",
  }
  render(){
    return(
    
   <section className='section-heading'>
            <h2>{this.state.name}</h2>
            <p>{this.state.subtext}</p>
        </section>

      
    )
  }
}
