import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Container() {
	const dispatch = useDispatch();

	const stateElement = useSelector((state) => state.element);
	const query = new URLSearchParams(useLocation().search);

	return <div id="homepage"></div>;
}

export default Container;
