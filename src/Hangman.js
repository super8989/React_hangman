import React, { Component } from 'react';

import img0 from './img/0.jpg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';

class Hangman extends Component {
    /* by default, allow 6 guesses and use the images */
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
    };



    render() {
        return (
            <div>Hangman Game
            
            </div>
        )
    }
}

export default Hangman;