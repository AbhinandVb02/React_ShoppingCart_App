import { createContext, useState } from "react";
import Homenav from "./Shopping/Homenav";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Shopping from "./Shopping/Shopping";
import './Style.css'
import Detailpage from "./Shopping/Detailpage";
import Cart from "./Shopping/Cart";


export const newcontext = createContext()


function App() {

  

  const [shopping,setShopping] = useState([])

  const [cart,setCart] = useState([])
       console.log(cart);  

  const addtoCart =(data)=>{
    let ispresent = false;
    cart.forEach((product)=>{
      if(data.id===product.id)
      ispresent = true;
      if(ispresent===true){
      alert('Item is already added to your cart')
      }
    })
    if(ispresent)
    return;
    setCart([...cart,{...data,quantity:1}])
  }

  return (
    <div>
     <newcontext.Provider value={[shopping,setShopping,addtoCart,setCart]}>
      <BrowserRouter>
      <Homenav count={cart.length} />
      <Routes>
        <Route path="/" element={<Shopping/>}></Route>
        <Route path='/:id' element={<Detailpage/>}></Route>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}></Route>
      </Routes>
      </BrowserRouter>
     </newcontext.Provider>
    </div>
  );
}

export default App;
