import React from "react";
import { BrowserRouter as Router, Link, Redirect, Route, Switch, useHistory } from "react-router-dom";

// *Components
import { useUserState, verifyToken, useUserDispatch } from "./context/UserContext";
import Login from "./components/common/Login";
import HomePage from "./components/pages/Home.Page";
import IndexSwitch from "./Routes/Index.Switch";

function App(props) {

  localStorage.removeItem('verifyProcess');

  var userDispatch = useUserDispatch();
  let history = useHistory();
  const { email, token } = useUserState();

  const userIsLogged = email !== undefined;

  // console.log("Evaluando: \nIs The User Logged:", userIsLogged, email, token);
  console.log(`Evaluando: \nIs the user logged: ${userIsLogged},\nThe email is: ${email},\nThe auth Token is: ${token}`);
  console.log(`Verify process in Local Storage: ${localStorage.getItem('verifyProcess')}`);


  if (!userIsLogged) {
    if (token) {
      console.log("EVALUAR TOKEN!");
      const verifyProcess = localStorage.getItem('verifyProcess');
      if (!verifyProcess) {
        localStorage.setItem('verifyProcess', true);
        verifyToken(userDispatch, token, history);
      }

    }
  }

  return (
    <>
      <Router>
        <Switch>

          <Route path="/app/:path?">
            <>{
              userIsLogged ? (
                <IndexSwitch/>

              ) : (
                <Redirect
                  to={{ pathname: "/login" }}
                />
              )
            }</>
          </Route>

          <Route path='/register'>
            <h1>Register page</h1>
            <Link to='/'>{'<- Back To Homepage'}</Link>
          </Route>
          
          <Route path='/login'>
            <Login />
            <Link to='/'> {'<- Back To Homepage'} </Link>
          </Route>

          <Route path='/prices'>
            <h1>Price$$$ Page</h1>
            <Link to='/'>{'<- Back To Homepage'}</Link>
          </Route>

          <Route path='/solutions'>
            <h1>Solutions Page</h1>
            <Link to='/'>{'<- Back To Homepage'}</Link>
          </Route>

          <Route path='/features'>
            <h1>Features Page</h1>
            <Link to='/'>{'<- Back To Homepage'}</Link>
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
