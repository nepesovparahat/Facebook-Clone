import Sign_in from './Components/Sign_in';
import Sign_up from './Components/Sign_up';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { useState } from 'react';

function App() {
  const admin ={
    email: "admin@gmail.com",
    password: "admin1234"
  }
  const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);
  }
  const Logout = () =>{
    console.log("Logout");
  }
  return (
    <Router>
      <div className="body">
        <Switch>
          <Route exact path = '/'>{(user.email != "") ? (
        <div className="welcome"><h2>Welcome, <span>{user.email}</span></h2>
        <button>Logout</button></div>) : (<Sign_in Login={Login} error={error} />)}</Route>
          <Route path = '/Sign_in'>{(user.email != "") ? (
        <div className="welcome"><h2>Welcome, <span>{user.email}</span></h2>
        <button>Logout</button></div>) : (<Sign_in Login={Login} error={error} />)}</Route>
          <Route path = '/Sign_up'><Sign_up/></Route>
        </Switch> 
        </div>
    </Router>
  );
}

export default App;
