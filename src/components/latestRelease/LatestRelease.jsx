import React, { useEffect, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import BeatLoader from 'react-spinners/BeatLoader';
import SingleBook from '../card/SingleBook';
import { nanoid } from 'nanoid';
import { Input } from '../../contexts/InputContext';
import { fetchBooks } from '../../redux/books/booksActions';

export default function LatestRelease() {
    const bookData = useSelector(state => state.books)
    const dispatch = useDispatch()

    const { query } = useContext(Input)
    const [books, setBooks] = useState(bookData.books)

    const searchTitles = () => {
        if (!bookData.books || bookData.books.length === 1) dispatch(fetchBooks(''))

        if (bookData.books) {
            const titles = bookData.books.filter(book => (
                book.title.toLowerCase().includes(query.toLowerCase())
            ))
            
            setBooks(titles)
        }
    }

    useEffect(() => {
        searchTitles()
    }, [query, bookData])

    return (
        <Container>
            <Row>
                <Col className="d-flex flex-wrap gap-4 justify-content-center">
                    {!books && (
                        <BeatLoader
                            loading={true}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    )}
                    {books && books.map((book) => (
                        <SingleBook key={nanoid()} item={book} />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}