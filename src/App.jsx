
import { useState } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/About/about'
import Footer from './components/footer/Footers';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Header/> */}
      {/* <Home/> */}
      {/* <About/> */}
      <Footer/>
    </div>
  );
}

export default App;