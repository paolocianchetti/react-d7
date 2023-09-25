import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div>
			<h1>Errore! La pagina richiesta non esiste.</h1>
			<button>
				<Link to="/">Torna alla Home</Link>
			</button>
		</div>
	);
};

export default ErrorPage;
