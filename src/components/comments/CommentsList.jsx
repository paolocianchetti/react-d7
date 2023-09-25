import React from 'react';
import { ListGroup, Badge, Button } from 'react-bootstrap';
import { nanoid } from 'nanoid';

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

function CommentsList({ arrReviews, arrComments, arrRates, arrAuthors }) {

    const handleDelete = async (event) => {
        const commentId = event.target.value;
        try {
            const response = await fetch((API_URL + arrReviews[commentId]._id), {
                method: "DELETE",
                headers: {
					"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ODU1ZWRmZmI4YjAwMTQ0MTNiYjIiLCJpYXQiOjE2OTQzNjQ3OTYsImV4cCI6MTY5NTU3NDM5Nn0.16sAAVKn7f8QVmIfH3kups2pEzrt2nDmfJS-IKFhLyg"
				}
            })

            if (response.ok) {
                alert('Cancellazione avvenuta correttamente!');
                window.location.reload();
            }

        } catch (err) {
            alert(err);
        }
    }

    return (
        arrComments.map((item, index) => {
            return <ListGroup key={nanoid()}>
                        <ListGroup.Item
                            className="d-flex justify-content-between align-items-start text-wrap">
                            {item}
                            <Badge bg="success" pill>
                                {arrRates[index]}
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="d-flex justify-content-between align-items-center mb-3 fst-italic text-success">
                            {arrAuthors[index]}
                            <Button variant="light" size="sm" value={index} onClick={handleDelete}>
                                Cancella
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
        })
    );
}

export default CommentsList;
