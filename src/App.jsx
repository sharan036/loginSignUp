import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Login/>
      <Register/>
    </div>
  )
}

export default App
