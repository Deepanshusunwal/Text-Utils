import './App.css';
import React,{ useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');  // initially light was assigned to mode(state variable) , setmode is a method by which mode can be changed.
  const [alert, setAlert] = useState(null); //initially null was assigned to alert(state variable) , setAlert is a method by which mode can be changed.
  const showAlert = (message, type)=>{
    setAlert({
    msg: message,
    type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    }
    


  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success ");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success ");
    }
  }
  return (
    <Router>
     <div>
      
     <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} />
     <div className="container my-3">
     <Switch>
          <Route exact path="/about"> {/* it's always a good idea to use exact so that you will go so that you will go to that page only */}
            <About />
          </Route>
          <Route exact path="/">
          <TextForms showAlert={showAlert} heading="ENTER THE TEXT TO ANALYZE " mode={mode}/>
            
          </Route>
        </Switch>
     </div>
     </div>
     </Router>
  );
}

export default App;
