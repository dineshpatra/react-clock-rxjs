import {Component, ComponentType} from 'react';
import {TimerSrv as timer} from '../Services/TimerSrv';

enum AMORPM {
    AM = "AM",
    PM = "PM"
}
type State = {
    hour   : number,
    minute : number,
    second : number,
    hour12 : number,
    amOrPM : AMORPM
}
export interface PropType {
    readonly hour   : number,
    readonly minute : number,
    readonly second : number,
    readonly hour12 : number,
    readonly amOrPM : AMORPM
}

export const withTimer = (WrappedComponent:ComponentType<any>): ComponentType => {

    return class EnhancedComponent extends Component {
        state: State = {
            hour   : 0,
            minute : 0,
            second : 0,
            hour12 : 0,
            amOrPM : AMORPM.AM
        }
        getAmOrPm = (hour: number): AMORPM => {
            return hour > 12 ? AMORPM.PM : AMORPM.AM;
        }
        getHour12 = (hour: number): number => {
            if (hour === 0) return 0;
            if (hour > 12)  return hour - 12;
            return hour;
        }
        componentDidMount() {
            timer.onTimeUpdated().subscribe((timeObj:any) => {
                let timer = timeObj.time as Date;
                this.setState((prevState: State) => ({
                    ...prevState,
                    hour    : timer.getHours(),
                    minute  : timer.getMinutes(),
                    second  : timer.getSeconds(),
                    amOrPM  : this.getAmOrPm(timer.getHours()),
                    hour12  : this.getHour12(timer.getHours())
                }));
            }); 
        }
        componentWillUnmount() {
            timer.clearTimer();
        }
        render():JSX.Element {
            return (
                <WrappedComponent 
                    hour   = { this.state.hour   }
                    minute = { this.state.minute }
                    second = { this.state.second }
                    amOrPM = { this.state.amOrPM }
                    hour12 = { this.state.hour12 }
                />
            )
        }
    }
}