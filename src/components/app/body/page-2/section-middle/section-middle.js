import React from 'react';
import RenderImg from '../../../generic-renderer/image/render-image';

let sectionMiddle = () => {
  	return (
	  	<>
		  <div className="image">
			  <RenderImg url="/assets/images/border-2.svg" title= "Border 2" />
		  </div>
		  <p className="margin-top-20">Sekapur sirih seulas pinang,</p>
		  <p>Semekar senyum seikhlas hati.</p>
		  <p>Dengan penuh kesyukuran kami</p>

		  <div className="parent padding-top-20">
			  <p>Ali bin Abd Jabar</p>
			  <p className="parent-modifier">&</p>
			  <p>Fairuz binti Ahmad</p>
			  <p className="parent-modifier" style={{lineHeight: "2.5"}}>bersama</p>
			  <p style={{lineHeight: "1"}}>Anuar bin Mohd. Tamamuddin</p>
		  </div>
		  
		  <p className="padding-top-20">Mempersilakan YBhg.</p>
		  <p>Dato'/Datin/Tuan/Puan/Encik/Cik</p>
		  <p>suami/isteri sekeluarga bagi</p>
		  <p>menyerikan majlis perkahwinan</p>
		  <p>putera kami</p>
			<div className="son margin-top-20"> 
				<p className="center-content">Ahmad Sulhi bin Anuar <br /> <span style={{fontSize:'16px'}}> dengan pilihan hatinya </span> <br /> Anisah binti Mat Rani</p>
			</div>
		</>
  );
}

export default sectionMiddle;

