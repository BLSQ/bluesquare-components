export function HeadCell({ column, columnsProps, setSortBy, multiSortEnabled, sortBy, isLastCell, }: {
    column: any;
    columnsProps: any;
    setSortBy: any;
    multiSortEnabled: any;
    sortBy: any;
    isLastCell: any;
}): React.JSX.Element;
export namespace HeadCell {
    namespace propTypes {
        const column: PropTypes.Validator<object>;
        const columnsProps: PropTypes.Validator<object>;
        const setSortBy: PropTypes.Validator<(...args: any[]) => any>;
        const multiSortEnabled: PropTypes.Validator<boolean>;
        const sortBy: PropTypes.Validator<any[]>;
        const isLastCell: PropTypes.Validator<boolean>;
    }
}
import React from "react";
import PropTypes from "prop-types";
