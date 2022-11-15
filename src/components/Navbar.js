import { Component } from "react";
import "./NavbarStyles.css"

class Navbar extends Component{
    state = {clicked:false};
    handleClick = ()=>{
        this.setState({
            clicked:!this.state.clicked
        })
    }

    render(){
    return(
        <>
        <nav>
            <a href="index.html "> 
                <img src={require('../images/logo.png')} alt="App logo"/>
            </a> 
            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                   <li><a className="active" href='index.html'>Home</a></li> 
                   <li><a href='index.html'>About</a></li> 
                   <li><a href='index.html'>Contact</a></li> 
                   <li><a href='index.html'>Projects</a></li> 
                   <li><a href='index.html'>People</a></li> 
                   <li><a href='index.html'>Resources</a></li> 
                   <li><a href='index.html'>Faqs</a></li> 
                </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
            </div>
        </nav>
        </>
         ); 
    }
}
export default Navbar;