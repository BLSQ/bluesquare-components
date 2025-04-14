import React, { FunctionComponent, useMemo } from 'react';
import { LinkProps, Link, useLocation } from 'react-router-dom';

// TODO add to exports when duplicate deleted in iaso
export const LinkWithLocation: FunctionComponent<LinkProps & {unstable_viewTransition?:any}> = props => {
    const { pathname: location } = useLocation();
    const state = useMemo(
        () => (props.state ? { ...props.state, location } : { location }),
        [location, props.state],
    );
    return <Link {...props} state={state} />;
};
