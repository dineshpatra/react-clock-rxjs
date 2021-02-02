import { Component } from 'react';  
import AnalogueClock from './AnalogueClock';
import DigitalClock  from './DigitalClock';
import Alram         from './Alram';
import CatchError    from '../ErrorBoundry/CatchError';

export default class MainComponent extends Component {
   
    render() {
        return (
            <>
                <CatchError>
                    <AnalogueClock />
                </CatchError>
                <CatchError>
                    <DigitalClock />
                </CatchError>
                <CatchError>
                    <Alram />
                </CatchError>
            </>
        );
    }
}