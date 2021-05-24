import './App.css';
import React , {useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import footer from "./footer";
function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    // run only once when app components loads 
    auth.onAuthStateChanged(authUser =>{
      console.log("USER_IS >>>" , authUser);
      if(authUser){
        //user just loggin in 
        dispatch({
          type:'SET_USER',
          user : authUser
        })
      }
      else {
        // user just logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, []);
  return (
    <Router>
<div className="app">
<Switch>
<Route path = "/login">
<Login />
  </Route>
<Route path = "/checkout">
<Header />
<Checkout />
  </Route>
  <Route path = "/">
  <Header />
    <Home />
  </Route>
</Switch>

<footer />
</div>
    </Router>
  );
}

export default App;
