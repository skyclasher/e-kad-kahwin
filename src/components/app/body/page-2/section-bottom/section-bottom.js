import React from 'react';
import RenderImg from '../../../generic-renderer/image/render-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let sectionBottom = () => {
  	return (
	  	<>
		  	<div className="image padding-top-20">
				<RenderImg url="/assets/images/border-black.svg" title= "Border Top" />
			</div>

			<div className="padding-top-20" style={{fontSize:"30px"}}>
				<FontAwesomeIcon icon="calendar-day" color={"orange"} />
				<p>25 Januari 2020</p>
				<p>29 Jamadil Awal 1441</p>
				<FontAwesomeIcon icon="clock" color={"orange"} />
				<p>11.00 Pagi - 4.00 Petang</p>
				<FontAwesomeIcon icon="map-marked-alt" color={"orange"} />
				<p>Dewan Kenanga</p>
				<p>1, Jalan Dengkil 28/21,</p>
				<p>Seksyen 28, 40400 Shah Alam, Selangor</p>
			</div>

			<div className="image margin-top-20">
				<RenderImg url="/assets/images/border-bawah-black.svg" title= "Border Bot" />
			</div>
		</>
  );
}

export default sectionBottom;
