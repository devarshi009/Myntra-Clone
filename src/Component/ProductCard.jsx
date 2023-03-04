import { Box } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
const ProductCard = ({product,id}) => {
  return (
    <Box>
   <Link to={`/products/${id}`}> <div style={{border:"1px solid gray"}}>

        <img src={product.Image} alt="book" width="100%"/>
        <h3>{product.Name}</h3>
        <h3>{product.Brand}</h3>
        <h3>{product.price}</h3>
        <h3>{product.discount}</h3>
        <h3>{product.OlderPrice}</h3>
        
    </div></Link></Box>
  )
}

export default ProductCard