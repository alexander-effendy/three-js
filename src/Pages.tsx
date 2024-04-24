import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Playground from './screens/Playground';

const Pages = () => {
  return (
    <div className="bg-[#141414]">
      <Routes>
				<Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </div>
  );
};

export default Pages;