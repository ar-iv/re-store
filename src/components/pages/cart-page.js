import React from 'react';

import BookListItem from '../book-list-item';

const CartPage = () => {
	return(
		<div>
			<h1>Welcome to Cart</h1>
			<BookListItem book={[]} />
		</div>
	);
}

export default CartPage;