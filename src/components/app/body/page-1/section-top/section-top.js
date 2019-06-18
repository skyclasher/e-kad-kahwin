import React from 'react';
import RenderImg from '../../../generic-renderer/image/render-image';

let sectionTop = () => {
  	return (
	  	<>
			<div className="image">
				<RenderImg url="/assets/images/walimatulurus-jawi-black.svg" title= "Walimtul Urus Jawi" />
			</div>
			<p className="walimatul-font font-type">Walimatul Urus</p>
			<div className="image">
				<RenderImg url="/assets/images/border-black.svg" title= "Border Top" />
			</div>
		</>
  );
}

export default sectionTop;

