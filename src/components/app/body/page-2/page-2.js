import React from 'react';
import './page-2.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCalendarDay, faClock, faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import RenderImg from '../../generic-renderer/image/render-image';

export default function Page2() {
  return (
	<div className="page2 padding-top-40 animatebg">
		<div className="center-content" style={{width:'80%'}}>
				<RenderImg url="/assets/images/bismillah.png" title= "Bismillah" />
		</div>
		<div className="center-content padding-top-20 section2">
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
			</div>
			
			<p className="padding-top-20">Mempersilakan YBhg.</p>
			<p>Dato'/Datin/Tuan/Puan/Encik/Cik</p>
			<p>suami/isteri sekeluarga bagi</p>
			<p>menyerikan majlis perkahwinan putera kami</p>

			<div className="son margin-top-20"> 
				<p className="center-content">Ahmad Sulhi bin Anuar <br /> <span style={{fontSize:'16px'}}> dengan pilihan hatinya </span> <br /> Anisah binti Mat Rani</p>
			</div>

			<div className="image padding-top-20">
				<RenderImg url="/assets/images/border-black.svg" title= "Border Top" />
			</div>

			<div className="padding-top-20" style={{fontSize:"30px"}}>
				<FontAwesomeIcon icon={faCalendarDay} color={"orange"} />
				<p>25 Januari 2020</p>
				<p>29 Jamadil Awal 1441</p>
				<FontAwesomeIcon icon={faClock} color={"orange"} />
				<p>11.30 Pagi - 4.00 Petang</p>
				<FontAwesomeIcon icon={faMapMarkedAlt} color={"orange"} />
				<p>Dewan Kenanga</p>
				<p>1, Jalan Dengkil 28/21,</p>
				<p>Seksyen 28, 40400 Shah Alam, Selangor</p>
			</div>

			<div className="image margin-top-20">
				<RenderImg url="/assets/images/border-bawah-black.svg" title= "Border Bot" />
			</div>

		</div>

		<ul className="bubbles">
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
			<li className="animate"><FontAwesomeIcon icon={faHeart} /></li>
		</ul>
  	</div>
  );
}

