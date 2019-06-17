import React from 'react';

let RenderImg = (props) => {
  	return (
	  	<>
			<img src={props.url} height="100%" width="100%" title={props.title} alt={props.title}></img>
		</>
  );
}

export default RenderImg;
