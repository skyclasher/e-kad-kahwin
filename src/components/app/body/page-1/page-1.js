import React from 'react';
import SectionTop from './section-top/section-top';
import SectionMiddle from './section-middle/section-middle';
import SectionBottom from './section-bottom/section-bottom';
import './page-1.css';

let Page1 = () => {
  return (
	<div className="page1 padding-100">
		<div className="center-content">
			<SectionTop />
			<SectionMiddle />
			<SectionBottom />
		</div>
  	</div>
  );
}

export default Page1;