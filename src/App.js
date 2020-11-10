import React from 'react';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Tshirt from './components/Tshirt/Tshirt';



function App() {
  return (
   <Router>
     <Switch>
      <Route exact path='/'>
      <Home></Home>
      </Route>
      <Route exact path='/tshirt'>
     <Tshirt></Tshirt>
      </Route>
     </Switch>
   </Router>
  );
}

export default App;
