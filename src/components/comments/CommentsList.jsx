import React from 'react';
import { ListGroup, Badge, Button } from 'react-bootstrap';
import { nanoid } from 'nanoid';

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/"

function CommentsList({ Reviews, Comments, Rates, Authors }) {

    const handleDelete = async (event) => {
        const commentId = event.target.value
        try {
            const response = await fetch((API_URL + Reviews[commentId]._id), {
                method: "DELETE",
                headers: {
					"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODU1ZWRmZmI4YjAwMTQ0MTNiYjIiLCJpYXQiOjE2OTU3Mjg2OTYsImV4cCI6MTY5NjkzODI5Nn0.9LhZreLQk35RcsMqqr4vrbINmOT6K2FIVvUhNofMtis"
				}
            })

            if (response.ok) {
                alert('Cancellazione avvenuta correttamente!')
                window.location.reload()
            }

        } catch (err) {
            alert(err)
        }
    }

    return (
        Comments.map((item, index) => {
            return <ListGroup key={nanoid()}>
                        <ListGroup.Item
                            className="d-flex justify-content-between align-items-start text-wrap">
                            {item}
                            <Badge bg="success" pill>
                                {Rates[index]}
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="d-flex justify-content-between align-items-center mb-3 fst-italic text-success">
                            {Authors[index]}
                            <Button variant="light" size="sm" value={index} onClick={handleDelete}>
                                Cancella
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
        })
    );
}

export default CommentsList;
