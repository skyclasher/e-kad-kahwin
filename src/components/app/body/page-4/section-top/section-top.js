import React from 'react';
import DemoCarousel from './image-slide';
import RenderImg from '../../../generic-renderer/image/render-image';

import './countdown/bootstrap.css';
import './countdown/ionicons.css';
import './countdown/jquery.classycountdown.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let dateDiffSec = () => Math.abs(((new Date(2020, 0, 25, 11, 0, 0, 0)) -  new Date()) / 1000);

let dataAttrs = {
    'data-remaining-sec': dateDiffSec()
  };


let sectionTop = () => {
  	return (
		  <>
				<h2 className="days-font ">Counting Days</h2>
				<div id="rounded-countdown" className="padding-top-10 countdown-container">
					<div className="countdown" {...dataAttrs}></div>
				</div>
				<div className="center-content padding-top-40" style={{width: "75%"}}>
					<DemoCarousel />
				</div>

				<div className="image center-content padding-top-40" style={{width:"180px"}}>
			  		<RenderImg url="/assets/images/border-2.svg" title= "Border 2" />
		  		</div>

				<p className="signature padding-top-40 center-content">Created by <a href="http://ahmadsyafiq.space" target="_blank">Ahmad Syafiq</a></p>
			</>
				
			
  );
}

export default sectionTop;

