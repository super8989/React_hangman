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

    constructor(props) {
        super(props);
        this.state = { nWrong: 0, guessed: new Set(), answer: 'apple' };
    }


    render() {
        return (
            <div className="Hangman">
                <h1>Hangman</h1>
                <img src={this.props.images[this.state.nWrong]} />
                <p className='Hangman-word'>GuessedWord</p>
                <p className="Hangman-btns">Buttons</p>            
            </div>
        )
    }
}

export default Hangman;