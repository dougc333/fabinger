import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch,Redirect
} from 'react-router-dom';
import {
  Grid, Paper
} from '@material-ui/core';
import './styles/main.css';
import fetchModel from './lib/fetchModelData'
import TopBar from './components/topBar/TopBar';
import UserDetail from './components/userDetail/UserDetail';
import UserList from './components/userList/UserList';
import UserPhotos from './components/userPhotos/UserPhotos';
import SinglePhoto from './components/userPhotos/SinglePhoto'
import axios from 'axios'
import CausalInference from './components/causalInference/CausalInference';
import Week1 from './components/causalInference/Week1'
import Week1Quiz1 from './components/causalInference/Week1Quiz1'
import Week1Quiz2 from './components/causalInference/Week1Quiz2'
import Week1Quiz3 from './components/causalInference/Week1Quiz3'
import Week2 from './components/causalInference/Week2'
import Week3 from './components/causalInference/Week3'
import Week4 from './components/causalInference/Week4'
import Week5 from './components/causalInference/Week5'

class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userId:'',
      current_userId:'',
      current_userName:'',
      fetchData:'',
      prevProps:props,
      photoInfo:'',
      engage:'',
      admin:'',
    }
  }

//passed to topbar
  setEngage=(c)=>{
    console.log("setEngage:",c)
    this.setState({engage:c})
  }
  setAdmin=(ad)=>{
    console.log("setAdmin:",ad)
    this.setState({admin:ad})
  }
  //passed to userphotos
  photosMount=(setPhotos)=>{
    //console.log("******photosMount:",setPhotos)
    this.setState({photoInfo:setPhotos})
  }
  //passed to Userlist, click on UserList element executes and returns newUserId 
  set_CurrentUserID = (newUserId) => {
    //console.log("******photoShare set_currentUserID newUserId:",newUserId)
    this.setState({current_userId:newUserId, current_userName:this.getName(newUserId)},function(){
      //console.log("photoshare verify state:",this.state)
    }); 
  }

  //input: userid 
  //output: returns name for given userid 
  getName(uid){
    //console.log("photoShare getName uid:",uid)
    //console.log("****getName entries:",Object.entries(this.state.fetchData))
    for (let i =0;i<Object.entries(this.state.fetchData).length;i++ ){
      //console.log("x:",Object.entries(this.state.fetchData)[i][1]['_id'])
      if(Object.entries(this.state.fetchData)[i][1]['_id']===uid){
        return Object.entries(this.state.fetchData)[i][1]['first_name']+" "+Object.entries(this.state.fetchData)[i][1]['last_name']
      }
    } 
  }

  componentDidMount(){
    //console.log("photoshare ComponentDidMount prevProps:",this.state.prevProps)
    axios.get('http://localhost:3000/user/list')
    .then((response)=>{
      //console.log("then data",response.data); 
      this.setState({fetchData:response.data}
      //,function(){
      //console.log("Photoshare compnentDidMount setState:",this.state.fetchData)
      //}
      )
    })
    .catch(error=>console.log(error))
  }
  
  componentDidUpdate(){
    this.redirectMe()
    //should reset the state and let react rerender. 
  }

  redirectMe(){
    if( this.state.current_userId.length>1) {
      return <div><Redirect to = {`/users/${this.state.current_userId}`} /></div>
    } 
  }

  add(){
    if (this.state.fetchData.length>1){
      //console.log("ADD**** this.state.fetchData:",this.state.fetchData)
      return (
        <div>
      <UserList userIdArr={this.state.fetchData} onNewUserID={this.set_CurrentUserID } isEngage={this.state.engage} isAdmin={this.state.admin}/>
      </div>
      )
    }
  }

  appendPhotos(){
    if(!this.state.engage){
      return (<Route path="/photos/:userId"
      render ={ props => <UserPhotos didMount={this.photosMount} {...props} /> }
      />)
    }else{
      return (<Route path="/photos/:userId/"
        render ={ props => <SinglePhoto didMount={this.photosMount} {...props} /> }
      />)
    }
  }

  render() {
    return (
      <HashRouter>
      <div>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <TopBar usrid={this.state.current_userName} photoInfo={this.state.photoInfo} onCheckBox={this.setEngage} onAdmin = {this.setAdmin}/>
        </Grid>
        <div className="main-topbar-buffer"/>
        <Grid item sm={3}>
          <Paper  className="main-grid-item">
            {this.add()}
            {this.redirectMe()}
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper className="main-grid-item">
            <Switch>
              <Route path="/users/:userId"
                render={ props => <UserDetail  {...props} /> }
              />
              {this.appendPhotos()}
              <Route path="/users" component={UserList}  />
              <Route path="/causal" component={CausalInference}  />
              <Route path="/week1" component={Week1}  />
              <Route path="/week2" component={Week2}  />
              <Route path="/week3" component={Week3}  />
              <Route path="/week4" component={Week4}  />
              <Route path="/week5" component={Week5}  />
              
              <Route path="/week1_quiz1" component={Week1Quiz1}  />
              <Route path="/week1_quiz2" component={Week1Quiz2}  />
              <Route path="/week1_quiz3" component={Week1Quiz3}  />
            </Switch>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </HashRouter>
    );
  }
}


ReactDOM.render(
  <PhotoShare />,
  document.getElementById('classshareapp'),
);
