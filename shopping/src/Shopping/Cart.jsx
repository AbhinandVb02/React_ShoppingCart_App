import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

function Cart({cart,setCart}) {
    
    console.log(cart);

    const [CART,setCART] = useState([])

    useEffect(()=>{
      setCART(cart)
    },[cart])


    const [price,setprice] = useState(0)

    const handleprice =()=>{
      let amt = 0;
      CART.map((data)=>{
        amt += data.price * data.quantity
      })
      setprice(amt)
    }

   
  useEffect(()=>{
        handleprice()
  },)

  const handleremove =(id)=>{
        const arr = cart.filter((item)=> item.id !== id)
        setCart(arr)
        handleprice()
  }
    

  return (
    <div className='cart-main'>
      <h3 className='cart-txt'>My Cart</h3>
       { CART.length===0 ? <h1 className='txt-h'>Nothing in your Cart </h1> :
        CART && CART.map((data,dataindex)=>{
          return(
            <div className='cart-main-div col-sm d-flex flex-wrap'>
              
              <div className='cart-div col-'>
              <img className='cart-img' src={data.thumbnail} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;
               <span className='title-span'>{data.title}</span>
              </div>

               <div className='cart-div-2 col-'>

                <button onClick={()=>{
                 const _CART =CART.map((item,index4)=>{
                        return dataindex === index4 ? {...item, quantity : item.quantity +1} : item
                 })
                 setCART(_CART)
                }}>+</button>

                <button>{data.quantity}</button>

                <button onClick={()=>{
                 const _CART =CART.map((item,index5)=>{
                        return dataindex === index5 ? {...item, quantity : item.quantity > 1 ? item.quantity -1 : 1} : item
                 })
                 setCART(_CART)
                }}>-</button>

               </div>

               <div className='cart-div-2 col-'>
                <span className='span-q'>{data.price * data.quantity}</span> &nbsp;&nbsp;&nbsp;
                <Button className='button-remove' variant='danger' onClick={()=> handleremove(data.id)} ><AiFillDelete/></Button>
               </div>
            </div>
          )
        })
       }

         <span><br />
          Total price = {price}
         </span>
         
           <br /><br /><br />
         <div>
          <Button variant='success'>Place the Order</Button>
         </div>

    </div>
  )
}

export default Cart