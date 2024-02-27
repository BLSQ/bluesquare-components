export function makeLinkComponent(component: any): {
    __forwardRef__: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
};
import React from "react";
export function LinkProvider(props: any): React.JSX.Element;
export namespace LinkProvider {
    namespace propTypes {
        const children: import("prop-types").Validator<any>;
        const linkComponent: import("prop-types").Validator<any>;
    }
}
export const LinkContext: React.Context<{}>;
export function useLink(): any;
export function withLink(component: any): (props: any) => React.JSX.Element;
