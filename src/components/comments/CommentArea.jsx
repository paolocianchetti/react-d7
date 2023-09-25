import React, { useState } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import BeatLoader from "react-spinners/BeatLoader";
import AddComment from './AddComment';
import CommentsList from './CommentsList';
import useFetchComments from '../../hooks/useFetchComments';

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

export default function CommentArea({ isbn }) {
    const [show, setShow] = useState(true);

    const { reviews, comments, rates, authors, loading, error } = useFetchComments(API_URL, isbn);

    const handleClose = () => {
        setShow(false);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Recensioni</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <p className="bg-danger text-light rounded">
                        Si e' verificato un errore durante la richiesta dei dati...
                    </p>}
                    <ListGroup>
                        {loading && !error && (
                            <BeatLoader style={{flex: 1, alignSelf: 'center'}}
                                loading={loading}
                                size={50}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        )}
                        {!loading && !error && comments && rates && authors &&
                            <CommentsList arrReviews={reviews} arrComments={comments} arrRates={rates} arrAuthors={authors} />}
                    </ListGroup>
                    {!error && <AddComment bookId={isbn}/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
