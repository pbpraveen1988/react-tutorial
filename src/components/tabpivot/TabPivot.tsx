import * as React from 'react';
import { Pivot } from 'office-ui-fabric-react';
import { IPivot } from 'office-ui-fabric-react';
import { PivotLinkFormat } from 'office-ui-fabric-react';
import { PivotLinkSize } from 'office-ui-fabric-react';
import { PivotItem } from 'office-ui-fabric-react';

export interface ITabPivotProps {
    componentRef?: (component: IPivot) => void;
    getTabId?: (itemKey: string, index: number) => string;
    headersOnly?: boolean;
    initialSelectedIndex?: number;
    initialSelectedKey?: string;
    linkFormat?: PivotLinkFormat;
    linkSize?: PivotLinkSize;
    onLinkClick?: (item?: PivotItem, ev?: React.MouseEvent<HTMLElement>) => void;
    selectedKey?: string;
    className?: string;
    children?: any;
}

export const TabPivot: React.SFC<ITabPivotProps> = (props) => {
    return (
        <Pivot   {...props} >
            {props.children && props.children.map((val: PivotItem, index: number) => {
                return <PivotItem {...val.props} linkText={val.props.linkText} key={index} children={val.props.children} />
            })}
        </Pivot>
    );
}
