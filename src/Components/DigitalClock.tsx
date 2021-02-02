import {Component} from 'react';
import '../assets/scss/DigitalClock.scss';
import {withTimer, PropType} from '../HOC/withTimer';

class DigitalClock extends Component<Readonly<PropType>> {

    twoDigit(num: number): string {
        return num.toLocaleString("en-US", {
            minimumIntegerDigits: 2
        });
    }
    render() {
        return (
            <div id="digital-clock"> 
                <h4>{ this.twoDigit(this.props.hour12) }</h4>
                <h4>:</h4>
                <h4>{ this.twoDigit(this.props.minute) }</h4>
                <h4>:</h4>
                <h4>{ this.twoDigit(this.props.second) }</h4>
                <h4>{ this.props.amOrPM }</h4>
            </div>
        )
    }
}
const newComponent = withTimer(DigitalClock);
export default newComponent;