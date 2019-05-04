import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../actions/postActions';

class card extends Component {
    constructor(props) {
        super(props);
        this.deleteContact = this.deleteContact.bind(this);
      }
    deleteContact(e, index){
        e.preventDefault();
        this.props.deleteContact(index);
      }
    render() {
        return (
            <div className="column" id={this.props.id}>
                <div className="card">
                    <img className="cardImage" src={this.props.image} alt={this.props.name} />
                    <div className="container" style={{ height: "161px" }}>
                        <h4><b>{this.props.name}</b></h4>
                        <p>{this.props.author}</p>
                        <button onClick={(e) => this.deleteContact(e,this.props.id)} className="btn btn-danger">
                            Remove
                         </button>

                    </div>
                </div>
            </div>
        )
    }
}
card.propTypes = {
    deleteContact: PropTypes.func.isRequired
  };
  
export default connect(null,{deleteContact})(card);