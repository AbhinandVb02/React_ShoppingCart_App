import React, { useContext } from 'react'
import { newcontext } from '../App'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import { Button } from 'react-bootstrap';

function Detailpage() {

    const [Shopping,setShopping,addtocart] = useContext(newcontext)

    const {id} = useParams()

    const nav = useNavigate()

    const details = Shopping ? Shopping.filter(details=> details.id == id):[]
    console.log(details);

    window.onload =() =>{
        nav('/')
    }
  return (
    <div className='main-div'>
        {details.map((items,index2)=>{
           return(
            <div key={index2}>
               <div className='detail-border'>
                 <h2>{items.title}</h2><br />
                 <span>Brand :&nbsp;<mark>{items.brand}</mark></span><br /><br />
                 <p>{items.description}</p>
                 <span><b>MRP :&nbsp;{items.price}</b></span><br /><br />
                 <h4>{items.rating} <AiFillStar/></h4>
                 <br />
                 <p><mark>Discount Up to &nbsp;{items.discountPercentage}%</mark></p><br /><br />
                 <Button variant='success'><Link className='link-style' onClick={()=>addtocart(items)}>Add to Cart</Link></Button>&nbsp;&nbsp;
                 <Link to='/'><Button>Back to Home</Button></Link>
               </div>

               <aside className='detail-border-2'>
                <img className='aside-img' src={items.thumbnail} alt="" /><br /><br />
                
                <div className='aside-div col-sm'>
                <h3>{items.title}</h3><br />
                <p><b>{items.description}</b></p>
                </div>
                   
                   <div className='detail-div-img col-sm'>
                    <img className='detail-img' src={items.images[0]} alt="img-1" />
                    <img className='detail-img' src={items.images[1]} alt="img-2" />
                    <img className='detail-img' src={items.images[2]} alt="img-3" />
                    <img className='detail-img' src={items.images[3]} alt="img-4" />
                   </div>
               </aside>

            </div>
           )
        })}
    </div>
  )
}

export default Detailpage