
import './App.css';
import Home from './Home/Home';
// import Home from './Home/Home';

import Navbar2 from './Navbar/Navbar2';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
       <Navbar2/> 
          {/* <Navbar/>     */}
      <AllRoutes/>
      
    {/* <Home/>  */}
    </div>
  );
}

export default App;
