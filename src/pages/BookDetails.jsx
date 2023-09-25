import React from 'react';
import {useParams} from 'react-router-dom';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFetchDetails from '../hooks/useFetchDetails';

const API_FETCH = 'https://epibooks.onrender.com';

const BookDetails = () => {
	const { bookId } = useParams();
	const { bookDetails, loading, error } = useFetchDetails(API_FETCH + `/${bookId}`);

	console.log('BookDetails: ', bookDetails);

	return (
		<div className="d-flex justify-content-center align-items-center">
			{!loading && !error && bookDetails &&
				<Card style={{ width: '30rem', margin: '40px' }}>
					<Card.Img variant="top" src={bookDetails[0].img} />
					<Card.Body>
						<Card.Title>{bookDetails[0].title}</Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>{'ISBN: ' + bookDetails[0].asin}</ListGroup.Item>
						<ListGroup.Item>{'Genere: ' + bookDetails[0].category}</ListGroup.Item>
						<ListGroup.Item>{'Prezzo: € ' + bookDetails[0].price}</ListGroup.Item>
					</ListGroup>
					<Card.Body>
						<Button variant="outline-warning">
							<Link to={'/home'}>
								Torna alla Home
							</Link>
						</Button>
					</Card.Body>
				</Card>
			}
		</div>
	);
};

export default BookDetails;
