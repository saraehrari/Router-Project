import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import products from "./pages/products";
import productsdtiles from "./pages/productsdtiles";


function App(){
  const[isAuth, setIsauth]= useState(false);
  function login(){
    setIsauth(true)
  }

  function logout(){
    setIsauth(false)
  }


  return(

    <div>
      <Navbar 
      isAuth={isAuth}
    onLogout={logout}
      />



      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<products/>}/>
         <Route path="/products:id" element={<productsdtiles/>}/>
         <Route path="/login" element={<login onlogin={login}/>}/>

<Route path="/checkout" element={<protecredRoute/>}>



</Route>
      </Routes>
    </div>
  )
}