import React from "react";
function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button>Add to cart</button>
        </div>
    );
}
export default ProductCard;
