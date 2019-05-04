import React, { Component } from 'react'
import App from '../../App'
import Card from '../Books/Card'
import Loader from '../loader/loader'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
class allBook extends Component {

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
                />
            )
        })
        return (
            <React.Fragment>
                <App>
                    <h2>Responsive Column Cards</h2>
                    <p>Resize the browser window to see the effect.</p>
                    {cards.length ? cards : <Loader />}
                </App>
            </React.Fragment>
        )
    }
}

allBook.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(allBook);
