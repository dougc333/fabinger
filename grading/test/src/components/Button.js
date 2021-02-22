import React from 'react'
import './Button.css'

const buttonStyle = {
  margin: '10px 10px 10px 0',
  height: '100px',
};


class Button extends React.Component{
    constructor(){
      super()
    } 
    //onClick={this.props.handleClick}>{this.props.label}
              
    render(){
      return (
        <div className="wrapper">
        <button className="btn btn-default" style={buttonStyle} type="submit" >Submit</button>
        </div>
      );  
    }
}


export default Button