import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { HeadCell } from './HeadCell';

const Head = ({ headerGroups, setSortBy }) => (
    <TableHead>
        {headerGroups.map(headerGroup => {
            const headerGroupProps = headerGroup.getHeaderGroupProps();
            return (
                <TableRow {...headerGroupProps} key={headerGroupProps.key}>
                    {headerGroup.headers.map(column => {
                        const columnsProps = column.getHeaderProps();
                        return (
                            <HeadCell
                                column={column}
                                key={column.id}
                                columnsProps={columnsProps}
                                setSortBy={setSortBy}
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
    setSortBy: () => null,
};

Head.propTypes = {
    headerGroups: PropTypes.array,
    setSortBy: PropTypes.func,
};

export { Head };
