import React  from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
		<div style={{border:"5px solid black"}}>
            <Carousel autoPlay infiniteLoop transitionTime={1000} showThumbs={false} showStatus={false}>
                <div>
				<img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
				</div>
				<div>
				<img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
				</div>
				<div>
				<img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
				</div>
				<div>
				<img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
				</div>
				<div>
				<img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
				</div>
				<div>
				<img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
				</div>
				<div>
				<img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
				</div>
				<div>
				<img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
				</div>
				<div>
				<img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
				</div>
				<div>
				<img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
				</div>
            </Carousel>
		</div>
);
