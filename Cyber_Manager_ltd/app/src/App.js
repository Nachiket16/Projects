// import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
// import "./components/styles.css"
function App() {
  return (
      <div>
        <h1 className='text-center'>Cyber Manager</h1>
        <Navbar />
        <h1 className='text-left'>ANNOUNCEMENTS</h1>
        <Slider />
      </div>
  );
}

export default App;
