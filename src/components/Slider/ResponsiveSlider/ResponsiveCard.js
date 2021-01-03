import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import trans2 from '../../../assets/img/trans2.jpg';
import trans3 from '../../../assets/img/trans3.jpg';
import trans4 from '../../../assets/img/trans4.jpg';
import trans5 from '../../../assets/img/trans5.jpg';
import trans6 from '../../../assets/img/trans6.jpg';
import trans7 from '../../../assets/img/trans7.jpg';
import trans8 from '../../../assets/img/trans8.jpg';
import trans9 from '../../../assets/img/trans9.jpg';
import trans10 from '../../../assets/img/trans10.jpg';



const ResposiveCard = () => (
    <div className='mt-8'>
        <Carousel
            autoPlay
            showIndicators={false}
            showStatus={false}
        >
            <div>
                <img alt="" src={trans2} />
                <p className="legend">
                    <i className='font-black'><span className='text-pink-600 font-bold'>Sonal Medhekar</span><br /> Lost 13KGS in 18 weeks.</i>
                </p>
            </div>
            <div>
                <img alt="" src={trans3} />
                <p className="legend">
                    <i className='font-black'><span className='text-pink-600 font-bold'>Hedavi</span><br /> 6 KGS IN 8 Weeks.</i>
                </p>
            </div>
            <div>
                <img alt="" src={trans4} />
                <p className="legend">
                    <i className='font-black'><span className='text-pink-600 font-bold'>Archana</span><br /> Lost 8 KGS IN 7 Weeks.</i>
                </p>
            </div>
            <div>
                <img alt="" src={trans5} />
                <p className="legend">
                    <i className='font-black'><span className='text-pink-600 font-bold'>Sweety Mungra</span><br /> Progress In 8 Weeks.</i>
                </p>
            </div>




            <div>
                <img alt="" src={trans6} />
                <p className="legend">
                    <i className='font-black'><span className='text-pink-600 font-bold'>Simran Chandwani</span><br /> 10 Weeks Progress With PCOD.</i>
                </p>
            </div>
            <div>
                <img alt="" src={trans7} />
                <p className="legend">
                    <i className='font-black'><span className='text-pink-600 font-bold'>Bhavani</span><br /> Progress In 4 Month.</i>
                </p>
            </div>
            <div>
                <img alt="" src={trans8} />
                <p className="legend">
                    <i className='font-black'><span className='text-pink-600 font-bold'>Vriunda</span><br />5 KGS In 8 Weeks.</i>
                </p>
            </div>
            <div>
                <img alt="" src={trans9} />
                <p className="legend">
                    <i className='font-black'><span className='text-pink-600 font-bold'>Kavya</span><br /> Lost 8 KGS In 8 Weeks.</i>
                </p>
            </div>
            <div>
                <img alt="" src={trans10} />
                <p className="legend">
                    <i className='font-black'><span className='text-pink-600 font-bold'>Joyti</span><br /> Lost 15 KGS With PCOD.</i>
                </p>
            </div>
        </Carousel>
    </div>
);

export default ResposiveCard;
