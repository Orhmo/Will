import './index.css'
import {
  Routes,
  Route
} from 'react-router-dom';

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Landing from './Pages/Landing';
import Forms from './Pages/Forms';
import Success from './Components/Form/Success';


function App() {
  return (
    <div className="App">

       <NavBar />
          <Routes>
              <Route path='/' element={<Landing />}></Route>
              <Route path='/forms' element={<Forms />}></Route>
              <Route path='/download-will' element={<Success />}></Route>
            </Routes>

          <Footer />

    </div>
  );
}

export default App;
