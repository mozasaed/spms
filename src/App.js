import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './components/Footer';

class App extends Component {
  render(){

  return (
    <>   
     <Navbar/>
    <div className='Main'>
      <section className='MainContent'>
        <h1 className='mainHeading'>Suza Project Management System</h1>
        <div className='words'>
        <p>From proposals to Implementation of your final year project,<br></br>
           SPMS bring you with resources and support to shorten cycle times,<br></br>
            increase students productivity and Supervisor Management</p>
       
        </div>
       <button className='getStarted'>Get Started</button>
      </section>
      <section className='featuresContent container-fluid'>
        <h3 className='FeatureHeading'>SPMS Key Functions</h3>
        <div className='row'>
          <div className='col-3'>
          <i className='fa fa-3x fa-laptop-file'></i>
            <h5>Planning and Scheduling</h5>
            <div className='featureWords'>
              <ul>
                <li>Find Problem and Solutions</li>
                <li>Defend your Title</li>
                <li>Prepare proposal document</li>
                <li>Research on the current situation</li>
              </ul>
            </div>
            <button className='featureLearn'>Learn More<i id='moreIcon' className='fa fa-arrow-right'></i></button>
          </div>
          <div className='col-3'>
          <i className='fa fa-3x fa-folder-open'></i>
            <h5>Resource Management</h5>
            <div className='featureWords'>
              <ul>
                <li>Find Problem and Solutions</li>
                <li>Defend your Title</li>
                <li>Prepare proposal document</li>
                <li>Research on the current situation</li>
              </ul>
            </div>
            <button className='featureLearn'>Learn More<i id='moreIcon' className='fa fa-arrow-right'></i></button>
          </div>
          <div className='col-3'>
          <i className='fa fa-3x fa-line-chart'></i>
            <h5>Project Progress Reporting</h5>
            <div className='featureWords'>
              <ul>
                <li>Find Problem and Solutions</li>
                <li>Defend your Title</li>
                <li>Prepare proposal document</li>
                <li>Research on the current situation</li>
              </ul>
            </div>
            <button className='featureLearn'>Learn More<i id='moreIcon' className='fa fa-arrow-right'></i></button>
          </div>
          <div className='col-3'>
          <i className='fa fa-3x fa-globe'></i>
            <h5>Data & System Intergration</h5>
            <div className='featureWords'>
              <ul>
                <li>Find Problem and Solutions</li>
                <li>Defend your Title</li>
                <li>Prepare proposal document</li>
                <li>Research on the current situation</li>
              </ul>
            </div>
            <button className='featureLearn'>Learn More<i id='moreIcon' className='fa fa-arrow-right'></i></button>
          </div>
        </div>
      </section>
      <section className='why-us'>
        <h3 className='whyusHeading'>Why SPMS?</h3>
        <div className='row '>
        <div className='card col-6' id='whyusContent1'>
        <h4 className='cardHeading'>Project Redundancy</h4>
          <div className='cardContent'>
          <i className='fas fa-5x fa-tasks'></i>
          <p>Many students at SUZA repeat projects that have already been document
            because they still see the problem existing and they are not aware of the applied solution
          </p>
          </div>
        </div>
        <div className='card col-6' id='whyusContent1'>
        <h4 className='cardHeading'>Project Redundancy</h4>
          <div className='cardContent'>
          <i className='fas fa-5x fa-user-cog'></i>
          <p>Many students at SUZA repeat projects that have already been document
            because they still see the problem existing and they are not aware of the applied solution
          </p>
          </div>
        </div>
        </div>

        <div className='row '>
        <div className='card col-6' id='whyusContent1'>
        <h4 className='cardHeading'>Project Redundancy</h4>
          <div className='cardContent'>
          <i className='fas fa-5x fa-users'></i>
          <p>Many students at SUZA repeat projects that have already been document
            because they still see the problem existing and they are not aware of the applied solution
          </p>
          </div>
        </div>
        <div className='card col-6' id='whyusContent1'>
        <h4 className='cardHeading'>Project Redundancy</h4>
          <div className='cardContent'>
          <i className='fas fa-5x fa-user-graduate'></i>
          <p>Many students at SUZA repeat projects that have already been document
            because they still see the problem existing and they are not aware of the applied solution
          </p>
          </div>
        </div>
        </div>
      </section>
      <section className='platform'>
        <div className='row'>
        <div className='legacyText col-6'>
          <h3>Students are College Legacy</h3>
          <p>
            Every student who spent either 2 years of Diploma or 3 years of Degree.<br></br>
            Dont want to leave with certificate and memory of wearing a graduating <br></br>
            gown but also wants to leave his/her legacy behind, something beneficial<br></br>
            Something helpful and most IT or Co mputer Science students put effort <br></br>
            in their final year projects hoping it will add value and leave a mark to society<br></br>
            But the harsh reality is one year of final results into unfinished projects that <br></br>
            are queue with so many others, year by year
          </p>
        </div>
        <div className='legacyPhoto col-6'>
          <img src={require('./images/student.jpeg')} alt="App logo"/>
        </div>
        </div>
      </section>
     
    </div>
    <Footer/>
  </>

  );
}
}
export default App;
