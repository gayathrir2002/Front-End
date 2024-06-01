import CelebrationCakes from './component/CelebrationCakes.jsx';
import ContactUs from './component/ContactUs.jsx';
import Home from './component/Home.jsx';
import Menu from './component/Menu.jsx';
import OurStory from './component/OurStory.jsx';
import { Route,Routes } from 'react-router-dom';
import Special from './component/Special.jsx';
import AllProduct from './component/AllProduct.jsx';


function App() {
  return (
    <div className="App">
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/OurStory" element={<OurStory/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/CelebrationCakes" element={<CelebrationCakes/>}/>
      <Route path="/Special" element={<Special/>}/>
      <Route path="/AllProduct" element={<AllProduct/>}/>
    </Routes>
    </div>
  );
}

export default App;
