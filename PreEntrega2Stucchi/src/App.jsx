import {BrowserRouter,Routes, Route   } from "react-router-dom"
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

import './App.css'



function App() {
  return (

<BrowserRouter>
<NavBar/>
<Routes>
 <Route path="/" element={<ItemListContainer/>} />
 <Route path="/category/:id" element={<ItemListContainer/>} />
 <Route path="/item/:id" element={<>item</>} />
 <Route path="*" element={<>Error 404</>} />
</Routes>
</BrowserRouter>
    )
}

export default App
