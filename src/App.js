import './App.css';
import Head from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feature from './pages/Feature';
import Our from './pages/ourmission';
import About from './pages/about';
import Watch from './components/wathes';
import Signup from './pages/signup';
import Signup2 from './components/signup2';
function App() {
  return (
    <BrowserRouter>
      <div>
    <Head/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/feature' element={<Feature/>} />
            <Route path='/ourmission' element={<Our/>} />
            <Route path='/aboutus' element={<About/>} />
            <Route path='/watches' element={<Watch/>} />
            <Route path='/contactus' element={<Signup/>} />
            <Route path='/signup' element={<Signup2/>} />
        </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;