
import './App.css';
import Home from './Home/Home';
// import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Navbar2 from './Navbar/Navbar2';
import AllRoutes from './Routes/AllRoutes';
import Kurta from './Women/Kurta';

function App() {
  return (
    <div className="App">
       <Navbar2/> 
          {/* <Navbar/>     */}
      <AllRoutes/>
      <Kurta/>
    {/* <Home/>  */}
    </div>
  );
}

export default App;
