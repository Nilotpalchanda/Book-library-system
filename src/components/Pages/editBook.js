import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPatch, createPost } from '../../actions/postActions';
import App from '../../App';
import { datalist } from "../../Utils/constant";
import Loader from '../loader/loader'
class editBook extends Component {
  constructor(props) {
    super(props);
    const data = Object.assign({}, this.props.location.state);
    this.state = {
      _id: data._id || '',
      bookname: data.bookname || '',
      bookauthor: data.bookauthor || '',
      bookimage: data.bookimage || '',
      bookcount: data.bookcount || '',
      bookprice: data.bookprice || '',
      bookdescription: data.bookdescription || '',
      bookcategory: data.bookcategory || '',
      isLoading: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      _id: this.state._id,
      bookname: this.state.bookname,
      bookauthor: this.state.bookauthor,
      bookimage: this.state.bookimage,
      bookcount: this.state.bookcount,
      bookprice: this.state.bookprice,
      bookdescription: this.state.bookdescription,
      bookcategory: this.state.bookcategory
    };
    if (this.props.location.pathname === '/editBook') {
      this.props.createPatch(post);
    } else {
      this.props.createPost(post)
    }

    setTimeout(() => { this.props.history.push('/') }, 1000);

  }
  componentDidMount() {
    this.setState({ isLoading: false })
  }
  render() {
    let dropDownDataValue = Object.keys(datalist).map(function (key, index) {
      return datalist[key];
    });

    return (
      this.state.isLoading ? <Loader /> : <App>
        <div>
          <h1>{this.props.location.pathname === '/editBook' ? "Edit Book Deails" : "Add Book Deails"}</h1>
          <div className="booklib-4"><img src={this.state.bookimage.length > 0 ? this.state.bookimage : "https://hazlitt.net/sites/default/files/default-book.png"} alt="Smiley face" width="100%" />
          </div>
          <div className="booklib-8">
            <form onSubmit={this.onSubmit}>
              <div>
                <label>Title: </label>
                <br />
                <input
                  type="text"
                  name="bookname"
                  onChange={this.onChange}
                  value={this.state.bookname}
                />
              </div>
              <div>
                <label>Author: </label>
                <br />
                <input
                  type="text"
                  name="bookauthor"
                  onChange={this.onChange}
                  value={this.state.bookauthor}
                />
              </div>
              <div>
                <label>Category: </label>
                <br />
                <input list="browsers" value={this.state.bookcategory} type="text" onChange={this.onChange} name="bookcategory" />
                <datalist id="browsers">
                  {dropDownDataValue.map((value, index) =>
                    <option key={index} value={value} />
                  )}
                </datalist>
              </div>
              <div>
                <label>Image: </label>
                <br />
                <input
                  type="text"
                  name="bookimage"
                  onChange={this.onChange}
                  value={this.state.bookimage}
                />
              </div>
              <div>
                <label>Count: </label>
                <br />
                <input
                  type="text"
                  name="bookcount"
                  onChange={this.onChange}
                  value={this.state.bookcount}
                />
              </div>
              <div>
                <label>Price: </label>
                <br />
                <input
                  type="text"
                  name="bookprice"
                  onChange={this.onChange}
                  value={this.state.bookprice}
                />
              </div>
              <br />
              <div>
                <label>Description: </label>
                <br />
                <textarea
                  name="bookdescription"
                  onChange={this.onChange}
                  value={this.state.bookdescription}
                  rows="8" cols="50"
                />
              </div>
              <br />
              <button className="buttonStyle" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </App>
    );
  }
}

editBook.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPatch, createPost })(editBook);
