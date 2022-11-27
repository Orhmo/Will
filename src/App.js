import './index.css'
import Landing from './Pages/Landing';
import Forms from './Pages/Forms';
import Download from './Pages/Download';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/forms' element={<Forms />}></Route>
        <Route path='/download-will' element={<Download />}></Route>
      </Routes>
    </div>
  );
}

export default App;
