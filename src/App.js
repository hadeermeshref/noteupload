
import './App.css';
import { Fragment } from 'react';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import { Route, Switch,Redirect } from 'react-router';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';



function App() {
  return (
<Fragment>
  <Navbar/>
  
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <ProtectedRoutes  path="/home" component={Home}/>
    {/* <Route path="/home" component={Home}/> */}
    <Redirect exact from="/" to="/login"/>
    <Route path="*" component={Login}/>
  </Switch>
  
</Fragment>
  );
}

export default App;
