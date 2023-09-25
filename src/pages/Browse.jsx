import React from 'react';
import {Link} from 'react-router-dom';

const Browse = () => {
	return (
		<div>
			Browse
			<button>
				<Link to="/">Torna alla Home</Link>
			</button>
		</div>
	);
};

export default Browse;
