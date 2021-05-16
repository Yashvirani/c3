import './App.css';
import { BrowserRouter as Router ,Switch,Route,Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import Warmup from './components/Warmup/Warmup';

function App() {
  return (
    <Router>
        <div className="app">
          <Switch>
              <Route path="/warmup">
                <Navbar />
                <Warmup />
              </Route>
              <Route path="/">
                <Navbar />
                <Courses />
              </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
