import {Component} from 'react';
import {TimerSrv} from '../Services/TimerSrv';
export default class AnalogueClock extends Component {
    timer: any;
    componentDidMount() {
        this.timer = setInterval(() => {
            TimerSrv.updateTime(new Date());
        }, 1000);
    }
    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    render() {
        return (
            <div>
                <span>
                    Time updated from here
                </span>
            </div>
        )
    }
}