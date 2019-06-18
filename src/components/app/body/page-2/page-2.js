import './page-2.css';

import React from 'react';
import LoveAnimation from '../../generic-renderer/animation/render-love-animate';
import SectionTop from './section-top/section-top';
import SectionMiddle from './section-middle/section-middle';
import SectionBottom from './section-bottom/section-bottom';

let page2 = () => {
  return (
	<div className="page2 padding-top-40 animatebg">
		<SectionTop />
		<div className="center-content padding-top-20 section2">
			<SectionMiddle />
			<SectionBottom />
		</div>
		<LoveAnimation />
  	</div>
  );
}

export default page2;
