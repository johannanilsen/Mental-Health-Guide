import Logo from "../images/logo.png"
import { Link , useHistory} from "react-router-dom";


function MenuBar() {
  let history = useHistory();

      return (
        <div className="menuBar">
            <div className="flexContainer" onClick= {()=> history.push("/")}>
                <div className="line"> </div>
                <div id="menuBarText">
                    <div>mental  </div>
                    <div>health</div>
                    <div>guide</div>
                </div>
            </div>
            <div className="flexContainer" id="menuBarLinks">
                    <Link to="/tips">TIPS</Link>
                    <Link to="/contactinfo">CONTACT INFO</Link>
                    </div>
        </div> 

      )
    }
  export default MenuBar;
  