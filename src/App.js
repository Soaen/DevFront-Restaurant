import './App.css';
import Restaurant from './componants/Restaurant';
import Contact from './componants/Pages/Contact/Contact';
import Plats from './componants/Pages/Plats/Plats';
import Drinks from './componants/Pages/Drinks/Boissons';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Restaurant/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/plats' element={<Plats/>}/>
        <Route path='/boissons' element={<Drinks/>}/>
      </Routes>

    </div>
  );
}

export default App;
