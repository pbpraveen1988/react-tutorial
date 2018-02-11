import * as React from 'react';
import { InputNumber} from '../components/inputnumber/InputNumber'
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

                <h6>Example of Botton Minimum value 0</h6>
                <InputNumber  min={0}/>

                <h6>Example of Botton Minimum value 10</h6>
                <InputNumber  min={10}/>

                <h6>Example of Botton Minimum value -10</h6>
                <InputNumber  min={-10}/>
                

                <h6>Example of Botton Maximum value 20</h6>
                <InputNumber  max={20}/>


                <h6>Example of Botton Maximum value 50</h6>
                <InputNumber  max={50}/>

                <h6>Example of Botton Maximum value 100</h6>
                <InputNumber  max={100}/>

                <h6>Example of Numeric Characters Only</h6>
                <InputNumber  allowNumericCharactersOnly={true}/>

                <h6>Example of Select on foucs</h6>
                <InputNumber  selectAllOnFocus={true}/>

                <h6>Example of Disabled</h6>
                <InputNumber  disabled={true}/>

                <h6>Example of Read Only</h6>
                <InputNumber  disabled={true}/>

                <h6>Example of Select on Increament</h6>
                <InputNumber  disabled={true}/>

                <h6>Example of Left Icon</h6>
                <InputNumber  disabled={true}/>

                <h6>Example of FUll width</h6>
                <InputNumber  disabled={true}/>

                <h6>Example of Large</h6>
                <InputNumber  large={true}/>
                </div>
        ) 
    }
}