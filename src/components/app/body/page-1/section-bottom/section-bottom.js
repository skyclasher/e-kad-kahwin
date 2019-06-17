import React from 'react';
import RenderImg from '../../../generic-renderer/image/render-image';

let SectionBottom = () => {
  	return (
	  	<>
			<div className="image margin-top-20">
				<RenderImg url="/assets/images/border-bawah-black.svg" title= "Border Bot" />
			</div>
			<p className="margin-top-20">Sabtu</p>
			<p>25 Januari 2020</p>
			<p>29 Jamadil Awal 1441</p>
		</>
  );
}

export default SectionBottom;
