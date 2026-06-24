import React, { FunctionComponent, ReactNode } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { LinkProps } from 'react-router-dom';
import { LinkWithLocation } from './LinkWithLocation';

type Props = LinkProps & { disabled?: boolean } & ButtonProps & {
        children: ReactNode;
        className?: string;
        buttonClassName?: string;
    };

export const LinkButton: FunctionComponent<Props> = props => {
    const {
        reloadDocument,
        replace,
        to,
        target,
        state,
        relative,
        preventScrollReset,
        children,
        className,
        buttonClassName,
        disabled = false,
        ...buttonProps
    } = props;
    if (disabled) {
        return (
            <Button
                variant="contained"
                color="primary"
                disabled
                {...buttonProps}
                className={buttonClassName}
                onClick={() => null}
            >
                {children}
            </Button>
        );
    }
    return (
        <LinkWithLocation
            className={className}
            reloadDocument={reloadDocument}
            replace={replace}
            to={to}
            target={target}
            state={state}
            relative={relative}
            preventScrollReset={preventScrollReset}
        >
            <Button
                variant="contained"
                color="primary"
                {...buttonProps}
                className={buttonClassName}
                onClick={() => null}
            >
                {children}
            </Button>
        </LinkWithLocation>
    );
};
