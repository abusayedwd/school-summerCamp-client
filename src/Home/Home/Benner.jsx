import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../public/slider1.avif'
import slider2 from '../../../public/slider5.avif'
import slider3 from '../../../public/slider2.jpg'
import slider4 from '../../../public/slider3.webp'
import slider5 from '../../../public/slider4.avif'

const Benner = () => {
        return (
                <div>
                        <Carousel>
                <div>
                    <img src={slider1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider2} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider3} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider4} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider5} />
                    <p className="legend">Legend 1</p>
                </div>
                 
                 
            </Carousel>
                </div>
        );
};

export default Benner;