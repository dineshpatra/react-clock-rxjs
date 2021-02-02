import { Subject } from 'rxjs';

const subject$ = new Subject();

export const TimerSrv = {
    updateTime    : (time:Date) => subject$.next({ time: time }),
    onTimeUpdated : () => subject$.asObservable(),
    clearTimer    : () => subject$.next()
};