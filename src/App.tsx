import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Product"
import NavBar from "./components/NavBar"
import CreateData from "./components/CreateData"
import Delete from "./components/Delete"
function App(){
  return <div>
    <NavBar></NavBar>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/prd" element={<Products/>}></Route>
      <Route path="/create" element={<CreateData/>}></Route>
      <Route path="/delete" element={<Delete/>}></Route>

    </Routes>
    </BrowserRouter>
  </div>
}
export default App