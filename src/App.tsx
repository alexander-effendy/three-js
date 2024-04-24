import { BrowserRouter } from 'react-router-dom';
import Pages from './Pages';

function App() {
  return (
    <BrowserRouter>
      <>
        {/* <div className="grid place-items-center h-screen w-screen bg-gray-700 text-2xl text-white">Ready to learn three.js</div> */}
        <Pages />
      </>
    </ BrowserRouter>
  )
}

export default App
