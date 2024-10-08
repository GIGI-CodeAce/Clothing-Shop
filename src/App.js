
import { Routes, Route, Link } from 'react-router-dom';
import Home from './routes/home/home-component.jsx';
import MenPage from './routes/home/mens'
import WomenPage from './routes/home/womens'
import HatPage from './routes/home/hats.jsx'
import SneakerPage from './routes/home/sneakers.jsx'
import JacketPage from './routes/home/jackets.jsx'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Mens" element={<MenPage/>} />
      <Route path="/Womens" element={<WomenPage/>} />
      <Route path="/hats" element={<HatPage/>} />
      <Route path="/jackets" element={<JacketPage/>} />
      <Route path="/sneakers" element={<SneakerPage/>} />
    </Routes>
    </>
  );
};

export default App;