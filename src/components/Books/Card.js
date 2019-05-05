import React, { Component } from 'react'

const card = props => {
    return <div className="column" id={props.id}>
        <div className="card">
            <img className="cardImage" src={props.image} alt={props.name} />
            <div className="container" style={{
                height: "161px"
            }}>
                <h4 className="booklibh4"><b>{props.name.length > 24 ? props.name.substring(0, 24) + "..." : props.name}</b></h4>
                <p className="booklibP">{props.author.length > 90 ? props.author.substring(0, 90) + "..." : props.author}</p>
                <p className="priceCount"><span className="price">₹{props.price}</span> <span className="count">({props.count})</span></p>
                <button className="buttonStyle" onClick={props.onClick}>
                    Remove
                         </button>
                <button className="buttonStyle" onClick={props.onClickEdit}>
                    Edit
                         </button>
            </div>
        </div>
    </div>;
};

export default card;
