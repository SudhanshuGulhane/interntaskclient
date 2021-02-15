import './App.css';
import SignUp from './components/signup'
import Login from './components/login'
import Home from './components/home'
import {BrowserRouter as Router, Switch,Route, Redirect} from 'react-router-dom'
import Profile from './components/profile';
import Reset from './components/reset';

//main file used for defining routes to various urls

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/reset" exact component={Reset} />
    </Router>
  );
}

export default App;
