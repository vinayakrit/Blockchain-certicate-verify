import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Main from './maincodes/main/Main';
import Fetch from './maincodes/fetch/Fetch';
import Verify from './maincodes/verify/Verify';
import Me from './maincodes/me/Me';
import Del from './maincodes/del/del';
function App() {
  return (
    <div className="App">
      <Router>
     
           
<Switch>
          <Route path='/main' component={Main} />
          <Route path='/fetch' component={Fetch} />
          <Route path='/verify' component={Verify} />
          <Route path='/me' component={Me} />
          <Route path="/del" component={Del} />
          <Redirect to='/main' from='*' />
        </Switch>

      </Router>
    </div>
        
  );
}

export default App;


