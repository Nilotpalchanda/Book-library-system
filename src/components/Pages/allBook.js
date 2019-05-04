import React, { Component } from 'react'
import App from '../../App'
import Card from '../Books/Card'
import Loader from '../loader/loader'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts,deleteContact,fetchProductsFilter } from '../../actions/postActions';

class allBook extends Component {
    constructor(props) {
        super(props);
        this.deleteContact = this.deleteContact.bind(this);
      }
    deleteContact(e, data){
        e.preventDefault();
        this.props.deleteContact(data)
        setTimeout(() => {
            this.props.fetchPosts();
        }, 2000);
        
    }
    handleSearch = (searchValue) => {
        this.props.fetchProductsFilter(searchValue);
    }
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        let cards = this.props.posts.map((book, index) => {

            return (
                <Card
                    id={book._id}
                    author={book.bookauthor}
                    name={book.bookname}
                    image={book.bookimage}
                    onClick={(e) => this.deleteContact(e,book)}
                />
            )
        })
        return (
            <React.Fragment>
                <App>
                    <h2>Responsive Column Cards</h2>
                    <input type="search" size="45" 
                    value= { this.props.searchValue }
                    onInput={ (e) => this.handleSearch(e.target.value) }
                    />
                    <p>Resize the browser window to see the effect.</p>
                    
                    {cards.length ? cards : <Loader />}
                </App>
            </React.Fragment>
        )
    }
}

allBook.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired

};
const mapDispatchToProps = dispatch => bindActionCreators({fetchProductsFilter,deleteContact, fetchPosts}, dispatch);
const mapStateToProps = state => ({
    posts: state.posts.searchArray,
    searchValue: state.posts.searchValue
});

export default connect(mapStateToProps,mapDispatchToProps)(allBook);
