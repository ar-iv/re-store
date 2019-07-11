import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import './book-list.css';

import { withBookstoreService } from '../hoc';
import { booksLoaded, bookRequested, booksError } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class BookList extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	render() {
		const { books, loading, error } = this.props;

		if (loading) {
			return <Spinner />
		}

		if (error) {
			return <ErrorIndicator />
		}

		return ( 
			<ul className="book-list">
				{
					books.map((book) => {
						return(
							<li key={book.id}><BookListItem book={ book } /></li>
						)
					})
				}
			</ul>

		);
	}
}

const mapStateToProps = ({ books, loading, error }) => {
	return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps;
	return {
		fetchBooks: () => {
			console.log('Fetching books');
			dispatch(bookRequested());
			bookstoreService.getBooks()
				.then((data) => dispatch(booksLoaded(data)))
				.catch((err) => dispatch(booksError(err)));
		}
	};
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);
