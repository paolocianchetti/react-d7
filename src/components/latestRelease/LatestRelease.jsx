//import React, { useState, useEffect, useContext } from 'react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import SingleBook from '../card/SingleBook';
import { nanoid } from 'nanoid';
//import { Input } from '../../contexts/InputContext';
import { fetchBooks } from '../../redux/books/booksActions';

export default function LatestRelease() {
    const bookData = useSelector(state => state.books)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks())
    }, [])

    return (
        <Container>
            <Row>
                <Col className="d-flex flex-wrap gap-4">
                    {bookData.books && bookData.books.map((book) => (
                        <SingleBook key={nanoid()} item={book} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}


/* export default function LatestRelease({ fantasyBooks }) {
    const { query } = useContext(Input);
    const [books, setBooks] = useState(fantasyBooks);

    const searchTitles = () => {
        if (fantasyBooks) {
            const titles = fantasyBooks.filter(book => (
                book.title.toLowerCase().includes(query.toLowerCase())
            ))
            
            setBooks(titles);
        }
    }

    useEffect(() => {
        searchTitles();
    }, [query, fantasyBooks])

    return (
        <Container>
            <Row>
                <Col className="d-flex flex-wrap gap-4">
                    {books && books.map(book => (
                        <SingleBook key={nanoid()}
                            asin={book.asin}
                            img={book.img}
                            title={book.title}
                            category={book.category}
                            price={book.price}
                            btn="Recensioni"
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    )
} */
