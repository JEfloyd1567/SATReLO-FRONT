import { Navbar } from "./components/Navbar/Navbar";
import "./SatreloApp.css"
/*import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';*/

function SatreloApp() {

  return (
    <>
    <div className="vh-100 " style={{backgroundColor: '#f5f5f5'}}>
      <Navbar/>              
    </div>
    </>
  );
}

export default SatreloApp;
