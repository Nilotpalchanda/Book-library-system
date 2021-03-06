import React, { Component } from 'react'
import App from '../../App'
import Card from '../Books/Card'
import Loader from '../loader/loader'
import {link} from "../../Utils/constant";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts, deletePost, fetchProductsFilter, filerOptionValue } from '../../actions/postActions';

class allBook extends Component {
    constructor(props) {
        super(props);
        this.deleteContact = this.deleteContact.bind(this);
        this.optionValue = this.optionValue.bind(this)
    }
    deleteContact(e, data) {
        e.preventDefault();
        this.props.deletePost(data)
    }
    handleSearch = (searchValue) => {
        this.props.fetchProductsFilter(searchValue);
    }
    optionValue = (selectedValue) => {
        this.props.filerOptionValue(selectedValue)
    }
    editContact(e, data) {
        this.props.history.push({ pathname: link.EditUrl, state: data });
    }
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        let cards = this.props.posts.reverse().map((book, index) => {
            return (
                <Card
                    id={book._id}
                    author={book.bookauthor}
                    name={book.bookname}
                    image={book.bookimage}
                    price={book.bookprice}
                    count={book.bookcount}
                    onClick={(e) => this.deleteContact(e, book)}
                    onClickEdit={(e) => this.editContact(e, book)}

                />
            )
        })

        const arr = this.props.filterArray;
        let filteredArr = arr.reduce((acc, current) => {
            let x = acc.find(item => item.bookcategory === current.bookcategory);
            if (!x) return acc.concat([current])
            else return acc;
        }, []);
        return (
            <React.Fragment>
                <App>
                    <h2>Dashboard</h2>
                    <input
                        className="searchBook"
                        type="search"
                        placeholder="Search Books"
                        value={this.props.searchValue}
                        onInput={(e) => this.handleSearch(e.target.value)}
                    />
                    <select className="filterSearch"  onChange={(e) => this.optionValue(e.target.value)}>
                        <option value="">All</option>
                        {filteredArr.map((item, key) =>
                            <option key={key} value={item.bookcategory}>{item.bookcategory}</option>
                    )}
                    </select>
                    <p className="pStyle">There are more than {this.props.posts.length} books in this librarie. See Below</p>
                    {cards.length ? cards : <Loader />}
                </App>
            </React.Fragment>
        )
    }
}

allBook.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
    optionValue: PropTypes.func.isRequired

};
const mapDispatchToProps = dispatch => bindActionCreators({ fetchProductsFilter, deletePost, fetchPosts, filerOptionValue }, dispatch);
const mapStateToProps = state => ({
    posts: state.posts.searchArray,
    searchValue: state.posts.searchValue,
    filterArray: state.posts.filterArray
});

export default connect(mapStateToProps, mapDispatchToProps)(allBook);
