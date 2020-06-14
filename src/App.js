import './styles/index.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles';
import Container from './containers/container';

const urlParams = new URLSearchParams(window.location.search);

function App() {
	return (
		<div>
			<StylesProvider injectFirst>
				<Route path="/" component={Container} exact />
			</StylesProvider>
		</div>
	);
}

export default App;
