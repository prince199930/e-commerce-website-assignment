import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function Cards({ items }) {

    const { title, id, image, description } = items
    return (
        <>
            <div className="card">
                <Link to={`/products/${id}`}>
                <div className="card__image">
                    <img alt="title"  src={image}  />
                </div>
                </Link>
                <div className="card__copy">
                    <h3>{title}</h3>
                    <h2>27 October, Noon.</h2>
                    <p className="desc">
                    {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cards






