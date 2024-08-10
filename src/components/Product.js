import React, { useEffect, useState } from "react";
import "../App.css";
function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://freetestapi.com/api/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className="product-card-container">
            <div className="product-card">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <div className="col-10">
                            <img className="product-image" src={product.image} alt={product.name} />
                            <h4 className="product-title">Name: {product.name}</h4>
                            <p>Colour: {product.color}</p>
                            <p>Description: {product.description}</p>
                            <p>Rating: {product.rating}</p>
                            <p className="product-price">Price: ${product.price}</p>
                            <button className="buy-button">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Product;
