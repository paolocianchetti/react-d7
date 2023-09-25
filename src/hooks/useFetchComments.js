import { useState, useEffect } from 'react';

const useFetchComments = (url, isbn) => {
	const [reviews, setReviews] = useState(null);
	const [comments, setComments] = useState(null);
	const [rates, setRates] = useState(null);
	const [authors, setAuthors] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const getComments = async () => {
		try {
			setLoading(true);
			const response = await fetch((url), {
				method: "GET",
				headers: {
					"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODU1ZWRmZmI4YjAwMTQ0MTNiYjIiLCJpYXQiOjE2OTQzNjQ3OTYsImV4cCI6MTY5NTU3NDM5Nn0.16sAAVKn7f8QVmIfH3kups2pEzrt2nDmfJS-IKFhLyg"
				}
			})
			const data = await response.json();
			const reviews = data.filter(review => review.elementId === isbn);
			setReviews(reviews);
			setComments(reviews.map(review => review.comment));
			setRates(reviews.map(review => review.rate));
			setAuthors(reviews.map(review => review.author));
			setLoading(false);
		} catch (err) {
			setError(err);
			alert(err);
		}
	}

	useEffect(() => {
		getComments();
	}, [isbn]);

	return { reviews, comments, rates, authors, loading, error }
}

export default useFetchComments;
