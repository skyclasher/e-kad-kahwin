import React from 'react';
import './section-1.css';

export default function Section1() {
  return (
	<div className="section1 padding-100">
		<div className="center-content">
		<div className="image">
			<img src="/assets/images/walimatulurus-jawi-black.svg" title="Walimtul Urus Jawi" alt="Walimtul Urus Jawi"></img>
		</div>
		<p className="walimatul-font font-type">Walimatul Urus</p>
		<div className="image">
			<img src="/assets/images/border-black.svg" title="Border Top" alt="Border Top"></img>
		</div>
		<h2 className="margin-top-20 name-font">Sulhi</h2>
		<h2 className="name-font">&</h2>
		<h2 className="name-font padding-top-40">Anisah</h2>
		<div className="image margin-top-20">
			<img src="/assets/images/border-bawah-black.svg" title="Border Bot" alt="Border Bot"></img>
		</div>
		<p className="margin-top-20">Sabtu</p>
		<p>25 Januari 2020</p>
		<p>29 Jamadil Awal 1441</p>
		</div>
  	</div>
  );
}

