import React from 'react'

const data = require('./data.json')

class AllPages extends React.Component{
  constructor(){
    super()
    this.state={
       user:"",
       week:1

    }
  }
  //each week is a new href. 
  //template page? and you create a new file for each week? 
  parseData(){
    let arr=[]
    for (let x of Object.keys(data)){
      //console.log(x)
      console.log(data[x])
      arr.push(<div>
        <h4>{x}</h4>
        </div>)
    console.log("data[x]:",data[x])
    console.log("data[x].length",data[x].length)
    for (let y of Object.keys(data[x])){
      console.log("y:",y)
      console.log("data[x][y]:",data[x][y])
      console.log("Object.keys(data[x][y])",Object.keys(data[x][y]))
      for (let z of Object.keys(data[x][y])){
        console.log("z:",z)
        arr.push(<div>
          {data[x][y][z]}
        </div>)
        console.log(data[x][y][z])
      }
    }

    }
    return arr
  }

  render(){
    return(
      <div>
      {this.parseData()}
      </div>
    );
  }
}

export default AllPages