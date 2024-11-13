import {BrowserRouter, Routes, Route} from'react-router-dom'
 import Home from "./pages/Home";
 import About from "./pages/About";
 import Contact from "./pages/Contact";
 import Menu from "./pages/Menu";
 import PageNotFound from "./pages/PageNotFound";
 import LoginSignup from "./Comp/LoginSignup/LoginSignup";


 function App() {
   return (
     <div>
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/Login" element={<LoginSignup/>}/>
       </Routes>
       </BrowserRouter>
     </div>
   );
 }

 export default App;

 /*import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 


 import Make from './Naethra/Make';
import Home from './Naethra/Home';
import LoginSignUp from './Naethra/Components/LoginSingnUp/LoginSignUp';
 
 const App = () => {
   return (
     <Router>
       <Routes>
         <Route path="/" element={<LoginSignUp />} /> 
         <Route path="/home" element={<Home/>}/>
         <Route path="/make" element={<Make/>}/>
       </Routes>
     </Router>
   );
 };
 
 export default App;*/