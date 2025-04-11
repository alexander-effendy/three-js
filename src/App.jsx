import './App.css';

import { IoLogoOctocat } from "react-icons/io";

const App = () => {
  return (
    <div className="w-screen h-screen text-2xl font-bold flex gap-5 flex-col items-center justify-center bg-amber-100">
      <span className="text-3xl text-amber-900">Hello World</span>
      <IoLogoOctocat size={35} className="text-yellow-950"/>
    </div>
  )
}

export default App;