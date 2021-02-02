import {Component} from 'react';
import '../assets/scss/AnalogueClock.scss';
import {withTimer, PropType} from '../HOC/withTimer';
interface p extends PropType {
    a: string
}
class AnalogueClock extends Component<Readonly<p>> {

    getRotateDeg(type: "second" | "minute" | "hour"): string {
        let deg: number = 0;
        switch (type) {
            case "second":
                deg = 6 * this.props.second;
                break;
            case "minute":
                deg = (6 * this.props.minute )
                    + ((6/60) * this.props.second);
                break;
            case "hour":
                deg = (30 * this.props.hour12) 
                    + ((6/60) * this.props.minute) 
                    + ((1/120) * this.props.second);
                break;
        }
        return "rotate(" + deg + "deg)"; 
    }

    render() {
        return (
            <div id="analogue-clock">
                <div className="clock-border">
                    <div className="panel">
                        {
                            Array.from({length:59}).map((_, index) => {
                                return <span>{index%5 === 0 ? ((index === 0) ? 12 : (index/5 < 10 ? '0' + index/5 : index/5)  ) : '.'}</span>
                            })
                        }
                    </div>
                    <div className="controlPanel">
                        <div className="controlBox"></div>
                        <span className="hands hourHand" style={{ transform: this.getRotateDeg('hour') } }></span>
                        <span className="hands minHand"  style={{ transform: this.getRotateDeg('minute') } }></span>
                        <span className="hands secHand"  style={{ transform: this.getRotateDeg('second') } }></span>
                    </div>
                </div>
            </div>
        )
    }
}
const newComponent = withTimer(AnalogueClock);
export default newComponent;