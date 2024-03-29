import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { HeadCell } from './HeadCell';

const Head = ({ headerGroups, setSortBy, multiSortEnabled, sortBy }) => (
    <TableHead>
        {headerGroups.map(headerGroup => {
            const headerGroupProps = headerGroup.getHeaderGroupProps();
            return (
                <TableRow {...headerGroupProps} key={headerGroupProps.key}>
                    {headerGroup.headers.map((column, colIndex) => {
                        const columnsProps = column.getHeaderProps();
                        return (
                            <HeadCell
                                column={column}
                                key={column.id}
                                columnsProps={columnsProps}
                                setSortBy={setSortBy}
                                multiSortEnabled={multiSortEnabled}
                                sortBy={sortBy}
                                isLastCell={
                                    colIndex + 1 === headerGroup.headers.length
                                }
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
    sortBy: [],
    setSortBy: () => null,
};

Head.propTypes = {
    headerGroups: PropTypes.array,
    setSortBy: PropTypes.func,
    sortBy: PropTypes.array,
    multiSortEnabled: PropTypes.bool.isRequired,
};

export { Head };
