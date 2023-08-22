import React, { useContext, useEffect } from 'react'
import { newcontext } from '../App'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Shopping() {

    const [Shopping,setShopping,addtocart] = useContext(newcontext)

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then((res)=>{
            setShopping(res.data.products)
        })
    },[])
  return (
    <div>
     {Shopping.map((item,index1)=>{
        return(
          
            <Card key={index1} className='card-main col-sm' style={{ width: '16rem',height:'430px' }}>
              <Link className='link-style-2' to={`${item.id}`}>
            <Card.Img className='card-img' variant="top" src={item.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text><b>$&nbsp;{item.price}</b></Card.Text>
              <Button variant='success'  style={{fontFamily:'fantasy'}} onClick={()=>addtocart(item)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        )
     })}
    </div>
  )
}

export default Shopping