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
        let column: PropTypes.Validator<object>;
        let columnsProps: PropTypes.Validator<object>;
        let setSortBy: PropTypes.Validator<(...args: any[]) => any>;
        let multiSortEnabled: PropTypes.Validator<boolean>;
        let sortBy: PropTypes.Validator<any[]>;
        let isLastCell: PropTypes.Validator<boolean>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
