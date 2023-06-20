import { useState } from 'react';
export default function receipt (props) {

    return (
        <div className="receipt">
        <h3>{props.person}</h3>
        <div>Main: {props.main}</div>
        <div>Protein: {props.protein}</div>
        <div>Rice: {props.rice}</div>
        <div>Sauce: {props.sauce}</div>
        <div>Toppings: {props.toppings}</div>
        <div>Drink: {props.drink}</div>
        <div>Cost: ${props.cost}</div>
        <button className="remove-receipt">X</button>
        
        </div>
    )
}