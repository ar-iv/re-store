export default class BookstoreService {

	data = [
		{ id: 1,
		  title: 'Cиддхартха',
		  author: 'Герман Гессе',
		  price: '200',
		  coverImage: 'https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/24505915-german-gesse-siddhartha-puteshestvie-k-zemle-vostoka.jpg'
		},
		{ id: 2,
		  title: 'Трое в лодке, не считая собаки',
		  author: 'Джером Клапка Джером',
		  price: '250',
		  coverImage: 'https://s2-goods.ozstatic.by/2000/172/112/10/10112172_0.jpg'
		}
	];

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(Math.random() > 0.75) {
					reject(new Error('Something bad happend'))
				} else {
					resolve(this.data)
				}
			}, 700);
		});
	}
}