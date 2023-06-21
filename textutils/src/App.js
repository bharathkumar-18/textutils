import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#042743';
        document.body.style.color='white';
        document.title='Textutils-Dark Mode';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        document.title='Textutils-Light Mode';
      }
  };

  return (
  <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Routes>
            <Route exact path="/" element={<TextForm heading="Enter your text to analyze" mode={mode}/>}>
            </Route>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
        </Routes>
    </Router>
  </>
  );
}

export default App;
