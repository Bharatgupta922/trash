import React, { useState } from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import Button from 'react-bootstrap/Button';
function Product({id , title , image , price , rating}) {
   const [state , dispatch ] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer 
        dispatch({
            type : "ADD_TO_BASKET",
            item :{
                id : id ,
                title : title,
                image : image,
                price : price,
                rating : rating,
            }
        });
    };
   
    return (
        <div 
        className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                    </div>
            </div>
            <img 
            src={image} alt="" />
            {/* <a href="#" onClick = {addToBasket} class="square_btn">Add to basket</a> */}
            {/* <button onClick ={addToBasket} >Add to basket</button>
            <Button onClick = {addToBasket} variant="info">Info</Button>{' '} */}
            <Button variant="outline-light" onClick = {addToBasket}>Add to basket</Button>{' '}
        </div>
        );
}

export default Product;
