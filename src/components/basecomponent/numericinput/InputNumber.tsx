import * as React from 'react';
import { Intent,IconName, NumericInput, Position} from "@blueprintjs/core";

export interface InputNumberprops {
    allowNumericCharactersOnly?: boolean;
    buttonPosition?: 'none' | Position.RIGHT | Position.LEFT;
    clampValueOnBlur?:boolean;
    className?:string;
    disabled?:boolean;
    intent?:Intent;
    large?:boolean;
    leftIconName?:IconName;
    majorStepSize?:number;
    max?:number;
    min?:number;
    minorStepSize?:number;
    onButtonClick?:any;
    onValueChange?:any;
    placeholder?:string;
    selectAllOnFocus?:boolean;
    selectAllOnIncrement?:boolean;
    stepSize?:number;
    value?:string | number; 


}


export class InputNumber extends React.Component<InputNumberprops, {}>{

    public render() {
        return <NumericInput {...this.props} />
        
    }
}