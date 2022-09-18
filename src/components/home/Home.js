import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/action'
import Cards from '../cards/Cards'



function Home() {
    const dispatch=useDispatch()
    const product = useSelector(state => state.product)
    const [filteredData, setFilteredData] = useState(product)
  

    const AllData = () => {
        axios("https://fakestoreapi.com/products").then((res) => dispatch(getProducts(res.data)))
    }

    useEffect(() => {
        AllData()
    }, [])
    const filterList = (catItem) => {
        axios(`https://fakestoreapi.com/products/category/${catItem}`).then((res) => setFilteredData(res.data))

    }
    useEffect(()=>{
        setFilteredData([...product])
    }, [product])

    return (
        <>
            <div>

                <div>

                    <h1>Clothing for Men and Women</h1>
                    
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList('electronics')}><b>electronics</b></button>
                        <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList('jewelery')}><b>jewelery</b></button>
                        <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList(`men's clothing`)}><b>men's clothing</b></button>
                        <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={() => filterList(`women's clothing`)}><b>women's clothing</b></button>
                        <button style={{ border: "none", backgroundColor: "#F2D388", height: "25px", borderRadius: "4px" }} onClick={AllData}><b>All</b></button>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", columnGap: "5%", flexWrap: "wrap", marginLeft: "20px" }}>
                        {
                            filteredData?.map((items) => <Cards key={items.id} items={items} />)
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home