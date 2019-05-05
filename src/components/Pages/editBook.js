import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPatch, createPost } from '../../actions/postActions';
import App from '../../App';
import { datalist } from "../../Utils/constant";
import Loader from '../loader/loader'
import { InputComponent } from '../FormComponent/InputComponent';
import { TextareaComponent } from '../FormComponent//TextareaComponent';
import { DatalistComponent } from '../FormComponent//DatalistComponent';

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
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000);

  }
  render() {
    let dropDownDataValue = Object.keys(datalist).map(function (key, index) {
      return datalist[key];
    });

    return (
      <App>
        {this.state.isLoading ? <Loader /> : <div>
          <h1>{this.props.location.pathname === '/editBook' ? "Edit Book Deails" : "Add Book Deails"}</h1>
          <div className="booklib-4"><img src={this.state.bookimage.length > 0 ? this.state.bookimage : "https://hazlitt.net/sites/default/files/default-book.png"} alt={this.state.bookname} width="100%" />
          </div>
          <div className="booklib-8">
            <form onSubmit={this.onSubmit}>
                <InputComponent onChange={this.onChange} labelText={"Title:"} name={"bookname"} value={this.state.bookname}></InputComponent>
                <InputComponent onChange={this.onChange} labelText={"Author:"} name={"bookauthor"} value={this.state.bookauthor}></InputComponent>
                <DatalistComponent bookcategory={this.state.bookcategory} labelText={"Category:"} onChange={this.onChange} dropDownDataValue={dropDownDataValue}></DatalistComponent>
                <InputComponent onChange={this.onChange} labelText={"Image Url:"} name={"bookimage"} value={this.state.bookimage}></InputComponent>
                <InputComponent onChange={this.onChange} labelText={"Count:"} name={"bookcount"} value={this.state.bookcount}></InputComponent>
                <InputComponent onChange={this.onChange} labelText={"Price:"} name={"bookprice"} value={this.state.bookprice}></InputComponent>
                <TextareaComponent onChange={this.onChange} labelText={"Description:"} bookdescription={this.state.bookdescription}></TextareaComponent>
              <button className="buttonStyle" type="submit">Submit</button>
            </form>
          </div>
        </div>}
      </App>
    );
  }
}

editBook.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPatch, createPost })(editBook);

