import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { HeadCell } from './HeadCell';

const Head = ({ headerGroups }) => (
    <TableHead>
        {headerGroups.map(headerGroup => {
            const headerGroupProps = headerGroup.getHeaderGroupProps();
            return (
                <TableRow
                    {...headerGroup.getHeaderGroupProps()}
                    key={headerGroupProps.key}
                >
                    {headerGroup.headers.map(column => {
                        const columnsProps = column.getHeaderProps();
                        return (
                            <HeadCell
                                column={column}
                                key={column.id}
                                columnsProps={columnsProps}
                            />
                        );
                    })}
                </TableRow>
            );
        })}
    </TableHead>
);
Head.defaultProps = {
    headerGroups: [],
};

Head.propTypes = {
    headerGroups: PropTypes.array,
};

export { Head };
