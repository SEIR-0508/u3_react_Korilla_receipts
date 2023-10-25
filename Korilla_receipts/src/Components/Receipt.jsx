import React from 'react';

const Receipts = (props) => {
    return (
        <div>
            <h1 className="title">Korilla</h1>
            <div className="card-container">
                {props.receipts.map(receipt => (
                    <li className="receipts-cards" key={receipt.person}>
                        <h2 className="person-name">{receipt.person}</h2>
                        <h5 className="card-content"><span className="card-content-category">Main:</span> {receipt.order.main}</h5>
                        <h5 className="card-content"><span className="card-content-category">Protein:</span> {receipt.order.protein}</h5>
                        <h5 className="card-content"><span className="card-content-category">Rice:</span> {receipt.order.rice}</h5>
                        <h5 className="card-content"><span className="card-content-category">Sauce:</span> {receipt.order.sauce}</h5>
                        <h5 className="card-content"><span className="card-content-category">Drink:</span>{receipt.order.drink}</h5>
                        <h5 className="card-content"><span className="card-content-category">Cost:</span>{receipt.order.cost}</h5>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Receipts;
