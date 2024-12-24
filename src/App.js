import './App.css'
import Header from "./Header/Header";
import ControlPanel from './ControlPanel/ControlPanel';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';


function App() {
  return (
    <div className="App">
   <Header />
   <ControlPanel/>
   <Home/>
   {/* <About/> */}
   {/* <Contact/> */}
    </div>
  );
}

export default App;
