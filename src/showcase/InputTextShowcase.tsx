import * as React from 'react';
import { InputText } from '../components';

export interface InputTextShowcaseState {
    value1?: string;
}

export class InputTextShowcase extends React.Component<{}, InputTextShowcaseState>{

    /**
     *
     */
    constructor(props: any) {
        super(props);
        this.state = { value1: 'praveen' }
    }


    public render() {
        return (
            <div>
                <h4> Simple InputText </h4>
                <InputText value={this.state.value1} onChange={(event: any) => {
                    this.setState({ value1: event.target.value })
                }} />


                <h4>  InputText with intent </h4>
                <InputText value={this.state.value1} intent={0} />


                <h4>  InputText with intent </h4>
                <InputText value={this.state.value1} intent={1} />


                <h4>  InputText with intent </h4>
                <InputText value={this.state.value1} intent={2} />


                <h4>  InputText with intent </h4>
                <InputText value={this.state.value1} intent={3} />

                <h4>  InputText with disabled </h4>
                <InputText value={'prabir'} disabled />

                <h4>  InputText with placeholder </h4>
                <InputText placeholder={'Enter name'} />



            </div>
        )
    }






}