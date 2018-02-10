import * as React from 'react';
import { Intent, IconName } from "@blueprintjs/core";
import { InputGroup } from "@blueprintjs/core";

export interface InputTextProps {
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    intent?: Intent;
    leftIconName?: IconName;
    onChange?: any;
    placeholder?: string;
    rightElement?: JSX.Element;
    type?: string;
    value?: string;


}

export class InputText extends React.Component<InputTextProps, {}>
{


    public render() {
        return <InputGroup {...this.props} />;
    }

}