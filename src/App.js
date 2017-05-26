import React, { Component } from 'react';
import Header from 'components/header/Header';
import Sidebar from 'components/sidebar/Sidebar';
import FrontendSection from 'components/sections/FrontendSection';
import BackendSection from 'components/sections/BackendSection';
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="app">
         <Header/>
         <Sidebar/>
         <FrontendSection/>
         <BackendSection/>

     </div>
    );
  }
}

export default App;
