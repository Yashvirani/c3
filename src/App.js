import './App.css';
import { BrowserRouter as Router ,Switch,Route,Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <Router>
        <div className="app">
          <Switch>
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
