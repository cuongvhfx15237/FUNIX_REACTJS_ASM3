import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { STAFFS } from './shared/staffs.jsx';
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Main from './components/MainComponent';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Staffs:STAFFS,
      
    }
  }
  render(){
    return(
      <div>
        <Header/>
        <br></br>
        <Main />
        <br></br>
        <Footer/>
      </div>
    )
  } 
}


export default App;
