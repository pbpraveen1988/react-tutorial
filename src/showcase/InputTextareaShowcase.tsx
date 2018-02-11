import * as React from 'react';

import { InputTextarea } from '../components';


export class InputTextareaShowcase extends React.Component<{}, {}>{
    public render() {
        return (
            <div>
                <h4>Simple TextArea</h4>
                <InputTextarea />
                <h4>Disabled TextArea</h4>
                <InputTextarea disabled  />
                <h4>Simple TextArea</h4>
                <InputTextarea value={'asdfasdfa adsfasfasdf adfsasdfasdffasadsfasdf'} />
                <h4>Simple TextArea</h4>
                <InputTextarea intent={0} />
                <h4>Simple TextArea</h4>
                <InputTextarea intent={1} />
                <h4>Simple TextArea</h4>
                <InputTextarea intent={2} />
                <h4>Simple TextArea</h4>
                <InputTextarea  intent={3}/>
            </div>
        );
    }
}