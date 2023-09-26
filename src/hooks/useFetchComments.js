import { useState, useEffect } from 'react';

const useFetchComments = (url, isbn) => {
	const [reviews, setReviews] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const getComments = async () => {
		try {
			setLoading(true);
			const response = await fetch((url), {
				method: "GET",
				headers: {
					"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODU1ZWRmZmI4YjAwMTQ0MTNiYjIiLCJpYXQiOjE2OTU3Mjg2OTYsImV4cCI6MTY5NjkzODI5Nn0.9LhZreLQk35RcsMqqr4vrbINmOT6K2FIVvUhNofMtis"
				}
			})
			const data = await response.json()
			const reviews = data.filter(review => review.elementId === isbn)
			setReviews(reviews)
			setLoading(false);
		} catch (err) {
			setError(err);
			alert(err);
		}
	}

	useEffect(() => {
		getComments();
	}, [isbn]);

	return { reviews, loading, error }
}

export default useFetchComments;
