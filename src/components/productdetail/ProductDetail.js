import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addProducts } from '../../actions/action'
import { useDispatch, } from 'react-redux'


function ProductDetails() {
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
    const { id } = useParams()


    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((res) => setProduct(res.data))
    }, [])

    const addProductToCart = (product) => {
        const prod = { ...product, qunatity: 1 }
        dispatch(addProducts(prod))
    }


    const { title, description, image, price } = product
    return (
        <>
      
            <div  style={{ display: "flex", boxShadow:"1px 1px 1px 1px #ccc", padding:"10px", columnGap:"20px", width:"800px", justifyContent:"center", alignItems:"center",margin:"auto", marginTop:"30px"}}>
                <div>
                    <img alt={title} style={{ width: "200px" }} src={image} />
                </div>
                <div>
                    <h2>{title}</h2>
                    <b>Description</b>
                    <p>{description}</p>
                    <p><b>Rs : </b>{price}</p>
                    <button style={{border:"none", backgroundColor:"green", color:"#fff", padding:"6px", borderRadius:"4px"}} onClick={() => addProductToCart(product)}>ADD TO CART</button>
                </div>
               
            </div>
                
        </>

    )
}

export default ProductDetails
