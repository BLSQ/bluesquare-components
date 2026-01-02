import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { patchIntl } from './patchIntl';
import { PatchIntlShape } from '../types/types';

type Props<P = Record<string, any>> = {
    component: React.ComponentType<
        P & {
            intl: PatchIntlShape;
            forwardedRef?: React.Ref<any>;
        }
    >;
    ref?: React.Ref<any>;
} & Omit<P, 'intl' | 'forwardedRef'>;

type PropsCopy = Omit<Props, 'component' | 'ref'>;

const FakeComponent: FunctionComponent<Props> = props => {
    const propsCopy: PropsCopy = { ...props };
    const Component = props.component;
    const intlCopy: PatchIntlShape = patchIntl(useIntl());
    delete propsCopy.component;
    delete propsCopy.ref;
    return (
        <Component {...propsCopy} intl={intlCopy} forwardedRef={props.ref} />
    );
};

/**
 * same as newIjectIntl in iaso-root codebase
 * used to inject a patched version of react-intl
 *
 */
export const injectIntl = <P extends { intl: PatchIntlShape }>(
    Component: React.ComponentType<P>,
): React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Omit<P, 'intl' | 'forwardedRef'>> &
        React.RefAttributes<any>
> =>
    React.forwardRef((props, ref) => {
        const propsCopy = {
            ...props,
            component: Component,
            ref,
        } as Props;
        return <FakeComponent {...propsCopy} />;
    }) as any;
