import React, { FunctionComponent } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { HeadCell } from './HeadCell';

/**
 * @param {Object} props
 * @param {Array} [props.headerGroups]
 * @param {(sort: any) => void} [props.setSortBy]
 * @param {boolean} [props.multiSortEnabled]
 * @param {Array} [props.sortBy]
 */

type Props = {
    headerGroups?: any[];
    setSortBy?: Function;
    sortBy?: any[];
    multiSortEnabled: boolean;
};

export const Head: FunctionComponent<Props> = ({
    headerGroups = [],
    setSortBy = () => null,
    multiSortEnabled,
    sortBy = [],
}) => (
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
