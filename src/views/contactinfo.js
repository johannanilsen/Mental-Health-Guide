function contactinfo() {
    return (
        <div>
        <div className="header_tips">Contact info </div> <br></br>
        <div id="split_contact">
            <div id="seekhelp">
                <div id="seekhelpHeader">If you need professional help with your well-being</div>
                <div className="seekhelpText">
                    <div className="seekhelpTitle" onClick={()=> window.open("https://www.su.se/studenthalsan", "Student Health Services")}> Student Health Services</div> 
                    <div className="seekhelpDescription">no emergency visits, only pre-booked appointments </div>
                </div>
                <div className="seekhelpText">
                    <div className="seekhelpTitle" onClick={()=> window.open("https://www.1177.se/Stockholm/other-languages/1177-vardguiden-pa-flera-sprak/", "1177.se")}> 1177 or  + 46 771 11 77 00 </div> 
                    <div className="seekhelpDescription"> medical advice at phone</div>
                </div>
                <div className="seekhelpText">
                    <div className="seekhelpTitle" onClick={()=> window.open("https://www.norrastockholmspsykiatri.se/", "Norra Stockholms Psykiatri")}> Psychiatric emergency room. S:t Görans Hospital</div> 
                    <div className="seekhelpDescription"> phone: 08-123 49 200</div>
                </div>
                <div className="seekhelpText">
                    <div className="seekhelpTitle" onClick={()=> window.open("https://www.sosalarm.se/", "SOS Alarm")}> Psychiatric acute mobility phone 112</div> 
                </div>
            </div>
            <div className="contactLine"> </div>
            <div id="contact_info">

                <div className="contact_header">If you have problem with your education at KTH</div>
                    <div className="contact_text">
                        <div className="contact_title" onClick={()=> window.open("https://ths.kth.se/", "THS website")}> THS - student union</div>
                        <div className="contact_description"> Head of Educational Affairs: <span className="contactMail" onClick={()=> window.open("mailto:utbildning@ths.kth.se")}>utbildning@ths.kth.se</span></div>
                        <div className="contact_description"> Head of Social and International Relations: <span className="contactMail" onClick={()=> window.open("mailto:international@ths.kth.se")}>international@ths.kth.se</span> </div>
                    </div>
                    <div className="contact_text">
                        <div className="contact_title" onClick={()=> window.open("https://kth.se/", "KTH website")}> KTH </div>
                        <div className="contact_description"> Equality Office: <span className="contactMail" onClick={()=> window.open("mailto:equalityoffice@kth.se")}>equalityoffice@kth.se</span> </div>
                        <div className="contact_description"> General questions about your studies: <span className="contactMail" onClick={()=> window.open("mailto:info@kth.se")}> info@kth.se </span> </div>
                    </div>
            </div>
        </div>
        </div>
        )
}

export default contactinfo;