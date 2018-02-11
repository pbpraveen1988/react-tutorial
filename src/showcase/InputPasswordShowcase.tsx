import * as React from 'react';
import { InputPassword } from '../components/inputpassword/InputPassword';
import {InputTextShowcaseState} from './InputTextShowcase';

export class InputPasswordShowcase extends React.Component<{}, InputTextShowcaseState>{
  
    public render(){
        return (
            <div>
            <h4>  InputText with type password </h4>
            <InputPassword />
            </div>
        );
    }
}