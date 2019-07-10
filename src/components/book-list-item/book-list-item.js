import React, { Component, Fragment } from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
	const { id, title, author} = book;
	return(
		<Fragment>
				<span>{ title }</span>
				<span>{ author }</span>
		</Fragment>
	);
};

export default BookListItem;

// export default class BookItem extends Component {
// 	render() {
// 		return (
// 			<dev>BookItem</dev>
// 		);
// 	}
// }