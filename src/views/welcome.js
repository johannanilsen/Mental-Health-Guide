import Stockholm from "../images/stockholm.png"
function WelcomeView() {
    return (
        <div id ="welcome">
            <div className="startImage">
            
            <img src={Stockholm} />
            <div id="photoAnton" onClick={()=> window.open("https://antonmartinsson.com", "Anton Martinsson")}>© Photo by Anton Martinsson</div>
            </div>
            <div className="welcomeText">
                <div className="title">Welcome to Stockholm!</div>
                <div className="welcomeDiscription">We are so happy that you are here! Stockholm is a beautiful city with lots of activities and interesting people.  But with the current pandemic and zero hours of sunlight, many might feel a bit under the weather at this time. This webpage will help you find tips on how to stay focused and happy, ways of getting help and important numbers 
 to keep close. 
                </div>
            </div>  
       </div>
    )
  }
export default WelcomeView;