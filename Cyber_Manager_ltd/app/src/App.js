import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
      <div>
        <h1>Welcome</h1>
        <Navbar />
      </div>
  );
}

export default App;
