import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import Search from './Search';
import ContactUs from './ContactUs';
import Error from './Error';
import {Route,Switch, Redirect} from 'react-router-dom';

const App=()=>{

  
  const Home=(props)=>{
    return <h1>{props.name} page</h1>
  }
  const Name=()=>{
    return <h1>Name page</h1>
  }

  return (
    <>
   
    <Switch>
    <Route exact path='/' component={()=><Home name='My Home' />} />
    <Route  path='/aboutus' component={AboutUs} />
    <Route path='/search' component={Search} />
    <Route exact path='/contactus' component={ContactUs} />
    <Route path='/contactus/name' component={Name} />
    
    <Redirect to='/' />
    <Route component={Error} />
  </Switch>
    {/*<<AboutUs/>
    <ContactUs/>*/}
    </>
    );
}

export default App;