import './page-4.css';

import React from 'react';
import SectionTop from './section-top/section-top';
import SectionMiddle from './section-middle/section-middle';
import SectionBottom from './section-bottom/section-bottom';

let page4 = () => {
  return (
	<div className="page4 padding-top-40 video-container">
		
		<video playsInline loop autoPlay muted className="video-bg">
    		<source src="/assets/gif/Background_Bokeh_03.mov" type="video/mp4" />
  		</video>

		<div className="center-content-page4">
			<SectionTop />
		</div>
  	</div>
  );
}

export default page4;
