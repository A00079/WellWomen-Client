import React from 'react';
import { render } from 'react-dom';
import ResponsiveGallery from 'react-responsive-gallery';
import YT1 from '../../assets/img/ytvideo1.PNG';
import YT2 from '../../assets/img/ytvideo2.PNG';
import YT3 from '../../assets/img/ytvideo3.PNG';
import YT4 from '../../assets/img/ytvideo4.PNG';
import YT5 from '../../assets/img/ytvideo5.PNG';
import YT6 from '../../assets/img/ytvideo6.PNG';
import YT7 from '../../assets/img/ytvideo7.PNG';
import YT8 from '../../assets/img/ytvideo8.PNG';
import YT9 from '../../assets/img/ytvideo9.PNG';
import YT10 from '../../assets/img/ytvideo10.PNG';

const images = [
    {
        src: YT1
    },
    {
        src: YT2
    },
    {
        src: YT3
    },
    {
        src: YT4
    },
    {
        src: YT5
    },
    {
        src: YT6
    },
    {
        src: YT7
    },
    {
        src: YT8
    },
    {
        src: YT9
    },
    {
        src: YT10
    }
];

const Gallery = () =>{
    return(
        <div class="px-8 py-16 mx-auto">
            <ResponsiveGallery images={images} />
        </div>
    );
}


export default Gallery;