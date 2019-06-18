import React from 'react';
import Page1 from './page-1/page-1';
import Page2 from './page-2/page-2';
import Page3 from './page-3/page-3';
import Page4 from './page-4/page-4';
import './body.css';

export default function Body() {
  return (
	<div>
		<Page1 />
		<Page2 />
		<Page3 />
		<Page4 />
	</div>
  );
}

