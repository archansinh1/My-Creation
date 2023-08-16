// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router";
import MainMenu from "./MainMenu";
import AboutUs from "./AboutUs";
import Error from "./Error";
import ContactUs from "./ContactUs";
import Home from "./Home";

const App = () =>
{

  const location = useLocation();
  const history = useNavigate()

  return(
    <>

    <h2>My Current Location is  = {location.pathname}</h2>

    <MainMenu/>

    <Routes>

        <Route path="/"  element={<ContactUs/>} />
        <Route path="Home" element={<Home/>} />
        <Route path="AboutUS" element={<AboutUs/> } />
        <Route path="*"  element={<Error/>}  />

    </Routes>

    {/* <Home/>
    <ContactUs/>
    <AboutUs/>
    <Error/> */}
    <br></br>&nbsp;&nbsp;
    <button onClick={ () => history(-1)}>Pre</button>&nbsp;&nbsp;
    <button onClick={ () => history(+1)}>Next</button><br></br>
    
    {location.pathname == '/AboutUs' ? <button onClick={ () => alert('hello good morning')}>click me</button> : null}

    </>
  )

}

export default App;