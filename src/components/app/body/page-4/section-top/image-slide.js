import React  from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
		<div style={{border:"5px solid black"}}>
            <Carousel autoPlay infiniteLoop transitionTime={1000} showThumbs={false} showStatus={false}>
                <div>
				<img src="/assets/images/sliding/1.jpg" />
				</div>
				<div>
				<img src="/assets/images/sliding/2.jpg" />
				</div>
				<div>
				<img src="/assets/images/sliding/3.jpg" style={{transform: "rotate(-90deg)"}} />
				</div>
				<div>
				<img src="/assets/images/sliding/4.jpg" />
				</div>
				<div>
				<img src="/assets/images/sliding/5.jpg" />
				</div>
				<div>
				<img src="/assets/images/sliding/6.jpg" />
				</div>
				<div>
				<img src="/assets/images/sliding/7.jpg" />
				</div>
				<div>
				<img src="/assets/images/sliding/8.jpg" />
				</div>
				<div>
				<img src="/assets/images/sliding/9.jpg" />
				</div>
				<div>
				<img src="/assets/images/sliding/10.jpg" />
				</div>
            </Carousel>
		</div>
);
