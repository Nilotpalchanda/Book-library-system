import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import App  from '../../App'
class addBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookname: '',
      bookauthor:'',
      bookimage:'',
      bookcount:'',
      bookprice:'',
      bookdescription: ''
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
      bookname: this.state.bookname,
      bookauthor:this.state.bookauthor,
      bookimage:this.state.bookimage,
      bookcount:this.state.bookcount,
      bookprice:this.state.bookprice,
      bookdescription: this.state.bookdescription
    };
    this.props.createPost(post);
  }

  render() {
    return (
        <App>
      <div>
        <h1>Add Post</h1>
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
            <label>bookcount: </label>
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
            <label>bookdescription: </label>
            <br />
            <textarea
              name="bookdescription"
              onChange={this.onChange}
              value={this.state.bookdescription}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      </App>
    );
  }
}

addBook.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(addBook);
