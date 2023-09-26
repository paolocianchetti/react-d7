import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Browse = () => {
	return (
		<div className='mt-4 p-5 mb-4 bg-warning text-dark rounded'>
			<h1>Browse</h1>
            <p>Sfoglia online la nostra collezione di libri.</p>
			<p>Al momento abbiamo solo libri fantasy</p>
			<br></br>
			<p>Sito in costruzione!</p>
			<Button variant="success">
				<Link className='text-light' to="/">Torna alla Home</Link>
			</Button>
		</div>
	)
}

export default Browse;
