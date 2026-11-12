import React, { forwardRef, useMemo } from 'react';
import { LinkProps, Link, useLocation } from 'react-router-dom';

// forwardRef is required when this is used as MUI `component` (IconButton, Button, MenuItem).
export const LinkWithLocation = forwardRef<HTMLAnchorElement, LinkProps>(
    (props, ref) => {
        const { pathname: location } = useLocation();
        const state = useMemo(
            () => (props.state ? { ...props.state, location } : { location }),
            [location, props.state],
        );
        return <Link {...props} ref={ref} state={state} />;
    },
);

LinkWithLocation.displayName = 'LinkWithLocation';
