import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import './book-list.css';

import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';

class BookList extends Component {
	componentDidMount() {
		const { bookstoreService } = this.props;
		const data = bookstoreService.getBooks();
		console.log(data);

		this.props.booksLoaded(data);
	}

	render() {
		const { books } = this.props;
		return ( 
			<ul>
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

const mapStateToProps = ({ books }) => {
	return { books };
};

const mapDispatchToProps = {
	booksLoaded
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);
