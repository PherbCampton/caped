import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {useState} from "react"
import Products from "./Pages/products"
import Story from "./Pages/story"
import Manufacturing from "./Pages/manufacturing"
import Packaging from "./Pages/packaging"
import Search from "./Pages/search"
import Navbar from './components/navbar'
import New from "./collections/new"
import Shoes from "./collections/shoes"
import Accessories from "./collections/accessories"
import Activewears from "./collections/activewears"
import Gift from "./collections/gift"
import Inspiration from "./collections/inspiration"
import Clothing from "./collections/clothing"
import { InputContext } from "./Helper/context"
import './App.css';


function App() {

  const [img, setImg] = useState("")

  return (
    <Router>
      <InputContext.Provider value={{img, setImg}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/story" element={<Story/>}/> 
          <Route path="/manufacturing" element={<Manufacturing/>}/> 
          <Route path="/packaging" element={<Packaging/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/clothing" element={<Clothing/>}/>
          <Route path="/shoes" element={<Shoes/>}/>
          <Route path="/accessories" element={<Accessories/>}/>
          <Route path="/activewears" element={<Activewears/>}/>
          <Route path="/gift" element={<Gift/>}/>
          <Route path="/inspiration" element={<Inspiration/>}/>
        </Routes>
      </InputContext.Provider>
    </Router>
  );
}

export default App;
