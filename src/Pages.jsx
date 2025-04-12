import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './screens/SpinningBox/Home';
import SpinningBox from '../src/screens/SpinningBox/SpinningBox';

import './App.css';

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spinning-box" element={<SpinningBox />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
