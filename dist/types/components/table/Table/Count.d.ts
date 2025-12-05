export function Count({ count, selectCount }: {
    count?: number | undefined;
    selectCount?: number | undefined;
}): React.JSX.Element;
export namespace Count {
    namespace propTypes {
        let count: PropTypes.Requireable<number>;
        let selectCount: PropTypes.Requireable<number>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
