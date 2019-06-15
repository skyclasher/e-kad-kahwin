import React from 'react';
import Section1 from './section-1/section-1';
import Section2 from './section-2/section-2';
import './body.css';

export default function Body() {
  return (
	<div>
		<Section1 />
		<Section2 />
		<Section1 />
		<Section1 />
	</div>
  );
}

