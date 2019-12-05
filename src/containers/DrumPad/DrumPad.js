import React from 'react';
import './DrumPad.css'

export default class DrumPad extends React.Component{

    componentDidMount() {
        console.log('componentDidMount');
        console.log(this.audio);
        document.addEventListener('keydown',this.handleKeyDown);
        window.focus();
    }
    componentWillUnmount() {
        console.log('componentWillUnmount!');
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if(e.keyCode === this.props.letter.charCodeAt()) { //charCodeAt returns the asci number of a char
            this.audio.play();
            this.audio.currentTime = 0;
            this.props.handleDisplay(this.props.id)
        }
    };

    handleClick = (e)=>{
        console.log(`click ${e.keycode}`);
            this.audio.play()
            this.audio.currentTime = 0
            this.props.handleDisplay(this.props.id)
    };


    render() {
        return(
            <div className='boxes'>

                <div className='box-class' onClick={this.handleClick}>
                    <p className='letter'>{this.props.letter}</p>
                    <p className='explanation'>{this.props.id}</p>
                </div>

                    <audio
                        className='clip'
                        id={this.props.letter}
                        src={this.props.src}
                        ref={ref=>this.audio = ref}
                    ></audio>

            </div>
        );
    }

}