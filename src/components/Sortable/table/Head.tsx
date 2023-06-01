import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { TableRow, TableHead, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Column } from '../../table/Table/types';

type Props = {
    columns: Column[];
    hidden?: boolean;
};

const useStyles = makeStyles(theme => ({
    sortCell: {
        padding: theme.spacing(1),
        width: 20,
    },
    headerCell: {
        // @ts-ignore
        borderRight: `2px solid ${theme.palette.ligthGray.border}`,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    lastHeaderCell: {
        borderRight: 'none',
    },
    hiddenRow: {
        visibility: 'collapse',
    },
}));

export const Head: FunctionComponent<Props> = ({ columns, hidden }) => {
    const classes = useStyles();
    return (
        <TableHead>
            <TableRow className={classNames(hidden && classes.hiddenRow)}>
                <TableCell
                    className={classNames(classes.headerCell, classes.sortCell)}
                />
                {columns.map((col, ind) => (
                    <TableCell
                        key={col.accessor}
                        className={classNames(
                            classes.headerCell,
                            ind + 1 === columns.length &&
                                classes.lastHeaderCell,
                        )}
                    >
                        {col.Header}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};
