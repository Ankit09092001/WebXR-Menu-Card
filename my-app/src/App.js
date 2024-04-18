import './App.css';
import Home from './Components/Home';
import Menu from './Menu/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trial from './xr-hit-model/XrHitModelContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} /> {/* Added leading slash */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
