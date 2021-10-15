
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="app_body">
      <Router>
          <Switch>
            <Route exact path="/">
              <Sidebar/>
            </Route>
            <Route path="/rooms/:roomId" component={Chat}>
              <Sidebar/>
              <Chat/>
            </Route>  
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
