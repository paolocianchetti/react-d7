import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/books/booksActions';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SelectedBook({ isbn }) {
    const bookData = useSelector(state => state.books)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBooks(`/${isbn}`))
    }, [])

    return (
        <div className="d-flex justify-content-center align-items-center">
		    {!bookData.loading && !bookData.error && bookData.books &&
				<Card style={{ width: '30rem', margin: '40px' }}>
					<Card.Img variant="top" src={bookData.books[0].img} />
					<Card.Body>
						<Card.Title>{bookData.books[0].title}</Card.Title>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>{'ISBN: ' + bookData.books[0].asin}</ListGroup.Item>
						<ListGroup.Item>{'Genere: ' + bookData.books[0].category}</ListGroup.Item>
						<ListGroup.Item>{'Prezzo: € ' + bookData.books[0].price}</ListGroup.Item>
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
}