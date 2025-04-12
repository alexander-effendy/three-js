import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './screens/spinning-box/Home';
import SpinningBox from './screens/spinning-box/spinning-box';
import ParticlesAnimated from './screens/particles-animated/particles-animated';

import './App.css';

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spinning-box" element={<SpinningBox />} />
        <Route path="/particles-animated" element={<ParticlesAnimated />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
