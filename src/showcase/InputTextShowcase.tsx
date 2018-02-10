import * as React from 'react';
import { InputText } from '../components/textinput/InputText';
export class InputTextShowcase extends React.Component<{}, {}>{
    public render() {
        return (
            <div>
                <h4> Simple InputText </h4>
                <InputText value={'prabir'} />


                <h4>  InputText with intent </h4>
                <InputText value={'prabir'} intent={0} />


                <h4>  InputText with intent </h4>
                <InputText value={'prabir'} intent={1} />


                <h4>  InputText with intent </h4>
                <InputText value={'prabir'} intent={2} />


                <h4>  InputText with intent </h4>
                <InputText value={'prabir'} intent={3} />


                

            </div>
        )
    }
}