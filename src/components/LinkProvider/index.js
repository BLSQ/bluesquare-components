import { any } from 'prop-types';
import React, { forwardRef, createContext, useContext, useMemo } from 'react';

// Credit https://github.com/seek-oss/braid-design-system/blob/master/lib/components/BraidProvider/BraidProvider.tsx
const passToForwardRef = render => ({
    __forwardRef__: forwardRef(render),
});

const renderLink = ({ href, ...restProps }, ref, Component) => (
    <Component ref={ref} to={href} {...restProps} />
);

const render =
    component =>
    ({ href, ...restProps }, ref) =>
        renderLink({ href, ...restProps }, ref, component);

export const makeLinkComponent = component =>
    passToForwardRef(render(component));

const LinkContext = createContext({});

const LinkProvider = props => {
    const { linkComponent } = props;
    const providedComponent = makeLinkComponent(linkComponent);
    const value = useMemo(
        () => ({ Link: providedComponent }),
        [providedComponent],
    );
    return (
        <LinkContext.Provider value={value}>
            {props.children}
        </LinkContext.Provider>
    );
};

// TODO add better typing
LinkProvider.propTypes = {
    children: any.isRequired,
    linkComponent: any.isRequired,
};

const useLink = () => useContext(LinkContext).Link.__forwardRef__;

const withLink = component => props => {
    const linkComponent = useContext(LinkContext).Link.__forwardRef__;
    return <component {...props} linkComponent={linkComponent} />;
};

export { LinkProvider, LinkContext, useLink, withLink };

// First create the custom link implementation:
// const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>
//     href[0] === '/' ? (
//         <ReactRouterLink ref={ref} to={href} {...restProps} />
//     ) : (
//         <a ref={ref} href={href} {...restProps} />
//     ),
// );
