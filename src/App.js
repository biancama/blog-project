import React from 'react';
import './App.css';
import Blog from './containers/Blog/Blog';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* </div><Router basename="/my-app"> */}
      <Router>
        <Blog />
      </Router>
    </div>
  );
}

export default App;
