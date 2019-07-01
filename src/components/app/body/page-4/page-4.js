import './page-4.css';

import React from 'react';
import SectionTop from './section-top/section-top';

let page4 = () => {
  return (
	<div className="page4 padding-top-40 video-container">
		<div className="content-center-page4">
		<video playsInline loop autoPlay muted className="video-bg">
    		<source src="/assets/gif/Background_Bokeh_03.mov" type="video/mp4" />
  		</video>

		<div className="center-content-page4">
			<SectionTop />
		</div>
		</div>
  	</div>
  );
}

export default page4;
