import { BrowserRouter, Route, Router, Routes, useParams } from "react-router-dom"
import NavBar from "./componet/Layout/NavBar"
import Home from "./componet/Layout/Home"
import About from "./componet/Layout/About"
import Contact from "./componet/Layout/Contact"

import UserLogin from "./componet/Users/UserLogin"
import UserRigister from "./componet/Users/UserRigister"
import Products from "./componet/Products/Products"
import ProductDet from "./componet/Products/ProductDet"

function App(){
    let {id}=useParams()
    return (
        
        <>
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/login" element={<UserLogin/>}></Route>
                <Route path="/:id" element={<ProductDet/>}/>
                <Route path="/register" element={<UserRigister/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
        
    )
}
export default App

