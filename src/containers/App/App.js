import React from 'react';
import clap from "../../assets/clap.wav";
import hihat from "../../assets/hihat.wav";
import kick from "../../assets/kick.wav";
import openhat from "../../assets/openhat.wav";
import boom from "../../assets/boom.wav";
import ride from "../../assets/ride.wav";
import snare from "../../assets/snare.wav";
import tom from "../../assets/tom.wav";
import tink from "../../assets/tink.wav";
import './App.css'
import DrumPad from '../DrumPad/DrumPad'

const data = [
    {id: 'clap' , letter:'A' , src: clap},
    {id: 'hihat' , letter:'S' , src: hihat},
    {id: 'kick' , letter:'D' , src: kick},
    {id: 'openhat' , letter:'F' , src: openhat},
    {id: 'boom' , letter:'G' , src: boom},
    {id: 'ride' , letter:'H' , src: ride},
    {id: 'snare' , letter:'J' , src: snare},
    {id: 'tom' , letter:'K' , src: tom},
    {id: 'tink' , letter:'L' , src: tink},
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'Press A Key'
        }
    }
    handleDisplay = display => this.setState({display:display})

    render() {
        return (
            <div className='drum-kit'>

                <div className='display'><h1>{this.state.display}</h1></div>

                <div className='boxes'>
                    {data.map(d=>(
                        <DrumPad
                            key={d.id}
                            id={d.id}
                            letter={d.letter}
                            src={d.src}
                            handleDisplay={this.handleDisplay}
                        />
                    ))}
                </div>

            </div>
        );
    }
}


//
// <div className={'app-class'}>
//     <Box note={'A'} explanation={'CLAP'}   displayPlayig={false}/>
//     <Box note={'S'} explanation={'HIHAT'}  displayPlayig={false}/>
//     <Box note={'D'} explanation={'KICK'}   displayPlayig={false}/>
//     <Box note={'F'} explanation={'OPENHAT'}displayPlayig={false}/>
//     <Box note={'G'} explanation={'BOOM'}   displayPlayig={false}/>
//     <Box note={'H'} explanation={'RIDE'}   displayPlayig={false}/>
//     <Box note={'J'} explanation={'SNARE'}  displayPlayig={false}/>
//     <Box note={'K'} explanation={'TOM'}    displayPlayig={false}/>
//     <Box note={'L'} explanation={'TINK'}   displayPlayig={false}/>
//
//     <PlayTunes/>
// </div>