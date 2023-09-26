import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div className='mt-4 p-5 mb-4 bg-info text-dark rounded'>
			<h1>About</h1>
            <p>EpiBooks!, 2023. All rights reserved.</p>
			<Button variant="light">
				<Link to="/">Torna alla Home</Link>
			</Button>
		</div>
	);
};

export default About;
