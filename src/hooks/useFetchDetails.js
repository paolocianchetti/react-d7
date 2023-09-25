import { useState, useEffect } from 'react';

const useFetchDetails = (url) => {
	const [bookDetails, setBookDetails] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const getBookById = async () => {
		try {
			setLoading(true);
			const response = await fetch(url);
			const data = await response.json();
			setBookDetails(data);
			setLoading(false);
		} catch (err) {
			setError(err);
			alert(err);
		}
	}

	useEffect(() => {
		getBookById()
	}, [url]);

	return { bookDetails, loading, error }
}

export default useFetchDetails;
