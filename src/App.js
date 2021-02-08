import './App.css';
import Border from "./views/border"
import MenuBar from "./views/menuBar"
import WelcomeView from "./views/welcome"
import TipsView from "./views/tips"
import ContactInfo from "./views/contactinfo"
import LowerBorderView from "./views/lowerBorder"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <Router>
        <Border/>   
        <MenuBar/>
          <Switch>
          <Route exact path="/">
              <WelcomeView/>
            </Route>
            <Route path="/tips">
              <TipsView/>
            </Route>
            
            <Route path="/contactinfo">
            <ContactInfo/>

            </Route>

          </Switch>
          <LowerBorderView/>
      </Router>
        
  
    </div>
  );
}
export default App;







