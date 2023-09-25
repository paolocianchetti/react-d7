import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentArea from "../comments/CommentArea";
import {Link} from 'react-router-dom';
import './singleBook.css';

export default function SingleBook({ item }) {
    const [selected, setSelected] = useState(false);
    const cardSelected = `selected-${selected}`;

    const toggleSelectedBook = (event) => {
        const { value } = event.target;
        if (!JSON.parse(value)) {
            event.target.className = "btn btn-danger";
            setSelected(true);
        }
        else {
            event.target.className = "btn btn-secondary";
            setSelected(false);
        }
    }

    return (
        <Card className={cardSelected}>
            <Link to={`/book/${item.asin}`}>
                <Card.Img variant="top" src={item.img} />
            </Link>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.category}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Button variant="primary" name="added">
                        {'€ '}
                        {item.price}
                    </Button>
                    <Button onClick={toggleSelectedBook} variant="secondary" name="selected" value={selected}>
                        Recensioni
                    </Button>
                </div>
                {selected && <CommentArea isbn={item.asin}/>}
            </Card.Body>
        </Card>
    )
}
