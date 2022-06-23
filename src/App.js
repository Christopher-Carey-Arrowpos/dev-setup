import React from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Apple from "./screens/Apple";
import Google from './screens/Google'

function App() {


  return (

    <Router>
      <img style={{ position: 'absolute',zIndex:-1,top:0 }} src={require('./assets/Arrow POS banner_BLK.png')} class="card-img-top" alt="..." />
      <div class="container" >
        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', marginBottom: 20, marginTop: 20 }}>

          <Link to="/apple">

            <div className="card" style={{ width: "18rem", height: '18rem', alignItems: 'center' }}>
              <img style={{ width: 400 }} src={require('./assets/Apple-Logo.png')} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Apple Developer Account</p>
              </div>
            </div>
          </Link>



          <Link to="/google">
            <div className="card" style={{ width: "18rem", height: '18rem', alignItems: 'center' }}>
              <img style={{ width: 200 }} src={require('./assets/Google__G__Logo.svg.png')} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Google Developer Account</p>
              </div>
            </div>
          </Link>



        </div>




        <Routes>
          <Route exact path="/apple" element={<Apple />} />
          <Route exact path="/google" element={<Google />} />
        </Routes>



      </div>
    </Router>
  );
}

export default App;
