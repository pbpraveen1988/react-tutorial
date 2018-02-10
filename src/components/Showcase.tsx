import * as React from 'react';
import * as Blueprint from '@blueprintjs/core';
import { Tab2, Tabs2 } from '@blueprintjs/core';
import { BaseComponent } from './basecomponent/BaseComponent';

import { InputNumberShowcase } from '../showcase/InputNumberShowcase';
import { InputTextShowcase } from '../showcase/InputTextShowcase';
import {InputTextareaShowcase} from '../showcase/InputTextareaShowcase'


export interface ShowcaseProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Showcase extends React.Component<ShowcaseProps, {}> {
    render() {
        return (<Tabs2 id='Tabs2Example' vertical={true} >
            <Tab2 id='in' title='Inputnumber' panel={this.renderBaseComponent(< InputNumberShowcase/>)} />
            <Tab2 id='it' title='InputText' panel={this.renderBaseComponent(<InputTextShowcase />)} />
            <Tab2 id='textarea' title='TextArea' panel={this.renderBaseComponent( <InputTextareaShowcase />)} />

        </Tabs2>)
    }


    renderBaseComponent(children?: JSX.Element | string) {
        return <BaseComponent children={children} />;
    }
}