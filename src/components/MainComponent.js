import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import About from './AboutComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate, Redirect, withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
    }
}
class Main extends Component {

  
  constructor(props) {
    super(props);

  }



  render() {
    
    return(
     
      <div>
        <Header />
        <Routes>
              <Route path='/home' element={<Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
              />}
               />
              <Route path='/menu' element={<Menu dishes={this.props.dishes} />}/>
              <Route path='/aboutus' element={<About leaders={this.props.leaders}/>}/>
              <Route path='/contactus' element={<Contact/>}/>
              <Route path='/*' element={<Navigate to="/home" />}/>
        </Routes>
        <Footer />
      </div>
    
    );

  }
}


export default connect(mapStateToProps)(Main);

