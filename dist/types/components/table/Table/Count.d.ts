export function Count({ count, selectCount }: {
    count: any;
    selectCount: any;
}): React.JSX.Element;
export namespace Count {
    namespace defaultProps {
        let count: number;
        let selectCount: number;
    }
    namespace propTypes {
        let count_1: PropTypes.Requireable<number>;
        export { count_1 as count };
        let selectCount_1: PropTypes.Requireable<number>;
        export { selectCount_1 as selectCount };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
