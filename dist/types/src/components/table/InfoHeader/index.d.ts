export function InfoHeader({ message, children }: {
    message: any;
    children: any;
}): React.JSX.Element;
export namespace InfoHeader {
    namespace propTypes {
        const message: PropTypes.Validator<string>;
        const children: PropTypes.Validator<NonNullable<NonNullable<PropTypes.ReactNodeLike>>>;
    }
}
import React from "react";
import PropTypes from "prop-types";
