import './index.css'
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Page3 from './pages/page3/Page3';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Page1 />}></Route>
        <Route path='/info' element={<Page2 />}></Route>
        <Route path='/will' element={<Page3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
