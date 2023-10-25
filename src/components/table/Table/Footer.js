import React from 'react';
import PropTypes from 'prop-types';
import TableFooter from '@mui/material/TableFooter';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    cell: {
        padding: theme.spacing(1, 2),
    },
}));
const Footer = ({ footerGroups }) => {
    const classes = useStyles();
    return (
        <TableFooter>
            {footerGroups.map(footerGroup => {
                const footerGroupProps = footerGroup.getFooterGroupProps();
                return (
                    <TableRow {...footerGroupProps} key={footerGroupProps.key}>
                        {footerGroup.headers.map(column => {
                            const columnsProps = column.getFooterProps();
                            const align = column.align || 'center';
                            if (column.Footer && !column.placeholderOf) {
                                return (
                                    <TableCell
                                        {...columnsProps}
                                        className={classes.cell}
                                        key={columnsProps.key}
                                        align={align}
                                    >
                                        {column.render('Footer')}
                                    </TableCell>
                                );
                            }
                            return null;
                        })}
                    </TableRow>
                );
            })}
        </TableFooter>
    );
};

Footer.defaultProps = {
    footerGroups: [],
};

Footer.propTypes = {
    footerGroups: PropTypes.array,
};

export { Footer };
