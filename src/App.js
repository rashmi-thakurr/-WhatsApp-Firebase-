
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState} from 'react';
function App() {
  const [user,setUser] = useState(null);
  return (
    <div className="App">
      {!user? (
        <Login/>
      ):(
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
      
      )}
    </div>  
  );
}

export default App;
