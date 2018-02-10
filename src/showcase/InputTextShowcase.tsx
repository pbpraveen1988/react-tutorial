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

                <h4>  InputText with disabled </h4>
                <InputText value={'prabir'} disabled />  

                <h4>  InputText with placeholder </h4>
                <InputText placeholder={'Enter name'} /> 

                <h4>  InputText with type </h4>
                <InputText type={'password'} /> 
                

            </div>
        )
    }
}