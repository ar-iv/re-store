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
		const { 
			bookstoreService, 
			booksLoaded, 
			bookRequested, 
			booksError } = this.props;

		bookRequested();
		bookstoreService.getBooks()
			.then((data) => booksLoaded(data))
			.catch((err) => booksError(err));

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

const mapDispatchToProps = {
	booksLoaded,
	bookRequested,
	booksError
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);
