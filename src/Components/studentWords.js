import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import stud1 from "../img/stud1.jpg"
import stud2 from "../img/stud2.jpg"
import "../css/studword.css"
export default class studentWords extends Component {
    render() {
        const AutoplaySlider = withAutoplay(AwesomeSlider);
        return (
            <div id="StudWord-main">
                <AutoplaySlider   className="student-word" animation="openAnimation" play={true} bullets={false} buttons={false} infinite={true} transitionDelay={120} interval={6000}>
                                <div className="std-word" >
                                    <p className="stud-exp">InOut connected me to awesome developers & made me feel inclusive. Devfolio has been doing an amazing job in keeping the community intact.</p>
                                    <p className="stud-name">Nishant shinde</p>
                                    <p className="stud-designation">student</p>
                                </div>
                                <div className="std-word" >
                                    <p className="stud-exp">InOut connected me to awesome developers & made me feel inclusive. Devfolio has been doing an amazing job in keeping the community intact.</p>
                                    <p className="stud-name">Nishant shinde</p>
                                    <p className="stud-designation">student</p>
                                </div>
                                <div className="std-word" >
                                    <p className="stud-exp">InOut connected me to awesome developers & made me feel inclusive. Devfolio has been doing an amazing job in keeping the community intact.</p>
                                    <p className="stud-name">Nishant shinde</p>
                                    <p className="stud-designation">student</p>
                                </div>
                    </AutoplaySlider>
                 <AutoplaySlider   className="student-img" animation="openAnimation" play={true} bullets={false} buttons={false} infinite={true} interval={6000}>
                                <div data-src={stud1}></div>
                                <div data-src={stud2}></div>
                                <div data-src={stud1}></div>
                    </AutoplaySlider>
            </div>
        )
    }
}
