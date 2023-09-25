import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
	return (
		<div>
			About
			<button>
				<Link to="/">Torna alla Home</Link>
			</button>
		</div>
	);
};

export default About;
