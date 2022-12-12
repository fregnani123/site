import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom" 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/site" element={<Home/>}/>
        <Route path="/site" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;