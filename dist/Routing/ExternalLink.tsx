import React, { FunctionComponent, ReactElement } from 'react';

type Props = {
    children: ReactElement;
    url: string;
};
export const ExternalLink: FunctionComponent<Props> = ({ children, url }) => (
    <a href={url}>{children}</a>
);
