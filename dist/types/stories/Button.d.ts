export function Button({ primary, backgroundColor, size, label, onClick, ...props }: {
    [x: string]: any;
    primary?: boolean | undefined;
    backgroundColor?: null | undefined;
    size?: string | undefined;
    label: any;
    onClick?: undefined;
}): React.JSX.Element;
export namespace Button {
    namespace propTypes {
        let primary: PropTypes.Requireable<boolean>;
        let backgroundColor: PropTypes.Requireable<string>;
        let size: PropTypes.Requireable<string>;
        let label: PropTypes.Validator<string>;
        let onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
