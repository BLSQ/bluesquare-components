import PropTypes from 'prop-types';
import React from 'react';
import { useIntl } from 'react-intl';
import { patchIntl } from './patchIntl';

const FakeComponent = props => {
    const propsCopy = { ...props };
    const Component = props.component;
    const intlCopy = patchIntl(useIntl());
    delete propsCopy.component;
    delete propsCopy.ref;
    return (
        <Component {...propsCopy} intl={intlCopy} forwardedRef={props.ref} />
    );
};



FakeComponent.propTypes = {
    component: PropTypes.any.isRequired,
    ref: PropTypes.object,
};

/**
 * same as newIjectIntl in iaso-root codebase
 * used to inject a patched version of react-intl
 *
 */
const injectIntl = Component =>
    React.forwardRef((props, ref) => {
        const propsCopy = {
            ...props,
            component: Component,
            ref,
        };
        return <FakeComponent {...propsCopy} />;
    });
export { injectIntl };
