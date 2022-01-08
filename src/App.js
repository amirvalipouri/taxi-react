import React , { useState , useEffect , useContext } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route , Redirect } from "react-router-dom";
import  Login2 from './component/Login/Login2'
import  Register from './component/Login/Register'
import  ForgotPass from './component/Login/ForgotPass'
import { Home } from './component/Home';
import { Drivers } from './component/Drivers';
import ShowProfile from './component/ModalDriver/ShowProfile';
import AuthContext from './store/auth-context';
import RiderDetails from './component/RiderDetails/RiderDetails';
import ChangePass from './component/Changepass/ChangePass';
import TermsAndCondition from './component/termAndCondition/TermsAndCondition';




function App() {
  const [ driver , setDriver ] = useState([]);


 
  const authCtx = useContext(AuthContext);
    const fetchDriver = async ()=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const item = await data.json();
        setDriver(item);
    }

    useEffect(()=>{
      fetchDriver();
    }, []);
  return (
    <Router >
      <Switch>
        {/* {!authCtx.isLoggedIn && <Route path="/login"> <Login2 /> </Route>}
        {authCtx.isLoggedIn && <Route path="/home/:section"> <Home /> </Route> }
        {authCtx.isLoggedIn &&  <Route path="/drivers"><Drivers /></Route>}
        {authCtx.isLoggedIn &&  <Route path="/driver/:id" > <ShowProfile item={driver}/> </Route>} */}

        <Route path="/Login"> <Login2 /> </Route> 
        <Route path="/ForgotPassword"> <ForgotPass /> </Route> 
        <Route path="/Register"> <Register /> </Route> 

        <Route path="/home/:section" exact> <Home /> </Route>
        <Route path="/changepassword"> <ChangePass/> </Route>
        <Route path="/drivers"><Drivers /></Route>
        <Route path="/terms-and-conditions"><TermsAndCondition /></Route>
        <Route path="/driver/:id" > <ShowProfile item={driver}/> </Route>
        <Route path="/rider/:riderId" > <RiderDetails /> </Route>
        <Route  path="*">
          <Redirect to="/Login" />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
