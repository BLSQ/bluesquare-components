export function InfoHeader({ message, children }: {
    message: any;
    children: any;
}): React.JSX.Element;
export namespace InfoHeader {
    namespace propTypes {
        let message: PropTypes.Validator<string>;
        let children: PropTypes.Validator<NonNullable<NonNullable<PropTypes.ReactNodeLike>>>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
