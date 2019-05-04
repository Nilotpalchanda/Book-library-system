import React, { Component } from 'react'

export default class card extends Component {
    render() {
        return (
            <div className="column" id={this.props.id}>
                <div className="card">
                    <img className="cardImage" src={this.props.image} alt={this.props.name} />
                    <div className="container" style={{ height: "161px" }}>
                        <h4 className="booklibh4"><b>{this.props.name.length > 24 ? this.props.name.substring(0,24)+"..." : this.props.name}</b></h4>
                        <p className="booklibP">{this.props.author.length > 90 ? this.props.author.substring(0,90)+"..." : this.props.author}</p>
                        <p className="priceCount"><span className="price">₹{this.props.price}</span> <span className="count">({this.props.count})</span></p>
                        <button className="buttonStyle" onClick={this.props.onClick}>
                            Remove
                         </button>
                         <button className="buttonStyle" onClick={this.props.onClickEdit}>
                            Edit
                         </button>
                    </div>
                </div>
            </div>
        )
    }
}

