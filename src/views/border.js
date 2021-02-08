import Instagram from "../images/instagram.png"
import Facebook from "../images/like.png"
import Browser from "../images/browser.png"


function BorderView() {
      return (
          <div className="header">
          <img src={Facebook} onClick={()=> window.open("https://www.facebook.com/thsint/", "THS facebook")}/>

          <img src={Instagram} onClick={()=> window.open("https://www.instagram.com/ths_international_reception/", "THS instagram")}/>
          <img src={Browser} style={{paddingRight: "20px"}} onClick={()=> window.open("https://www.thsint.se", "THS webpage")}/>

          </div>
      )
    }
  export default BorderView;
  