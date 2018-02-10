import * as React from 'react';

import { TextArea, Intent } from "@blueprintjs/core";

export interface InputTextareaProps{
    large?:boolean;
    intent?:Intent;
    onChange?:any;
    value?:string;
    disabled?:boolean;
}

export class InputTextarea extends React.Component<InputTextareaProps,{}>{
    public render(){
       return <TextArea  {...this.props} />;
    }
}