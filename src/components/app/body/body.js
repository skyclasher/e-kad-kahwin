import React from 'react';
import Page1 from './page-1/page-1';
import Page2 from './page-2/page-2';
import './body.css';

export default function Body() {
  return (
	<div>
		<Page1 />
		<Page2 />
		<Page1 />
		<Page2 />
	</div>
  );
}

