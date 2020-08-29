import React from 'react';
import classes from './Order.module.css'

const Order = (props) => {

    const ingredient = []

    for(let ingredientName in props.ingredients){
        ingredient.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredient.map( ig => {
        return <span key={ig.name}
                    style={{
                        textTransform: 'capitalize',
                        display: 'inline-block',
                        margin: '0 8px',
                        border: '1px solid #ccc',
                        padding: '8px'
                }}>
                    {ig.name} ({ig.amount})
                </span>
    })
    return (
        <div className={classes.Order}>
            <p>Ingridents: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default Order;