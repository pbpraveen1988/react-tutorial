import * as React from 'react';
import { InputNumber} from '../components';

export class InputNumberShowcase extends React.Component<{},{}> {
    public render() {
        return (
            <div>
                <h6>Example of Intent None</h6>
                <InputNumber  intent={-1}/>

                <h6>Example of Intent Primary</h6>
                <InputNumber  intent={0}/>

                <h6>Example of Intent Success</h6>
                <InputNumber  intent={1}/>

                <h6>Example of Intent Warning</h6>
                <InputNumber  intent={2}/>
                <h6>Example of Intent Danger</h6>
                <InputNumber  intent={3}/>

                <h6>Example of Botton Position Right</h6>

                <InputNumber  buttonPosition={4}/>
                <h6>Example of Botton Position Left</h6>
                <InputNumber  buttonPosition={10}/>

                {/* <h6>Example of Botton Position Bottom</h6>
                <InputNumber  buttonPosition={7}/> */}
                
                </div>
        ) 
    }
}