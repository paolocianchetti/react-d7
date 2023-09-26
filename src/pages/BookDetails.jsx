import React from 'react';
import { useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SelectedBook from '../components/book/SelectedBook';

const BookDetails = () => {
	const { bookId } = useParams()
	return (
		<>
			<Provider store={store}>
				<SelectedBook isbn={bookId} />
			</Provider>
		</>
	);
}

export default BookDetails;