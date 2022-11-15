import { Component } from "react";
import "./FooterStyles.css";

class Footer extends Component{
    render(){
    return(
        <>
        <footer>
            <div className="footerMain">
                <div className="col">
                <img src={require('../images/suzaLogo.jpeg')} alt="App logo"/>
                <h1>SPMS</h1>
                </div>
               
                <div className="FooterContent col">
                    <div className="socials ">
                      <h4>Connect with us</h4>
                        <span>Facebook<i className="fab fa-facebook"></i></span>
                        <span>Instagram<i className="fab fa-instagram"></i></span>
                        <span>Twitter<i className="fab fa-facebook"></i></span>
                        <span>Linkedin<i className="fab fa-linkedn"></i></span>
                       
                    </div>
                </div>
                <div className="col">
                    <h5>Terms of use</h5>
                </div>
                <div className="col">
                    <h5>Privacy Policy</h5>
                </div>
                
            </div>
            <div className="Copyright">
                <span>copyright@2022 | Designed by <i>Azom</i></span>
            </div>
        </footer>
        </>
    )
    }
}
export default Footer;