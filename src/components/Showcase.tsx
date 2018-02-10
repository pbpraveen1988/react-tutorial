import * as React from "react";
import * as Blueprint from "@blueprintjs/core";
import { Tab2, Tabs2 } from "@blueprintjs/core";
import { BaseComponent } from "./basecomponent/BaseComponent";
import { InputNumber } from "./basecomponent/numericinput/InputNumber";
import { InputNumberShowcase } from "./showcase/InputNumberShowcase";

export interface ShowcaseProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Showcase extends React.Component<ShowcaseProps, {}> {
    render() {
        return (<Tabs2 id="Tabs2Example" vertical={true} >
            <Tab2 id="rx" title="React" panel={this.renderBaseComponent('React jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact jsReact js')} />
            <Tab2 id="ng" title="Angular" panel={this.renderBaseComponent('Angular js')} />
            <Tab2 id="mb" title="Ember" panel={this.renderBaseComponent('Ember js')} />
            <Tab2 id="bb" title="Backbone" panel={this.renderBaseComponent('Backbone js')} />
            <Tab2 id="in" title="Inputnumber" panel={this.renderBaseComponent(< InputNumberShowcase/>)} />

        </Tabs2>)
    }


    renderBaseComponent(children?: JSX.Element | string) {
        return <BaseComponent children={children} />;
    }
}