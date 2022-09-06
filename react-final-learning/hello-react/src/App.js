import React from 'react';
import './App.css';
import SampleDemo from './SampleDemo';
import Nav from './Nav'
import Sample from './Sample'

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


//we need to first create a state for the app, in this case list of todos which
//will create the state that is available throughout the app ,when state changes 
//react rerender the entire component tree for us..Hooks are used for that

//first is list and second is function to update that list;



function App(){

  return(
          <Router>
              <Nav />
              <Routes>
                  <Route exact="true" path="/" element={<Sample />} />
                  <Route path="/hobbies" element={<SampleDemo/>} />
              </Routes>
          </Router>
  )
}



export default App;