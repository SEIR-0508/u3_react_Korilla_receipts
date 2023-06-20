import React from 'react'
import './Receipts.css';

export default function Receipts(props) {
    const { receipts } = props;
  
    return (
      <div className='receipts-container'>
        {receipts.map((receipt) => (
          <div key={receipt.id} className='receipt'>
            <h2>{receipt.person}</h2>
            <p>Main: {receipt.order.main}</p>
            <p>Protein: {receipt.order.protein}</p>
            <p>Rice: {receipt.order.rice}</p>
            <p>Sauce: {receipt.order.sauce}</p>
            <p>Toppings: {receipt.order.toppings.join(", ")}</p>
            <p>Drink: {receipt.order.drink}</p>
            <p>Cost: ${receipt.order.cost}</p>
            <p>Paid: {receipt.paid ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    );
  }
  