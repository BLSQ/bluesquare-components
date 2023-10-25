import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { MESSAGES } from './messages';

const useStyles = makeStyles(() => ({
    input: {
        width: 80,
    },
    mediumInput: {
        width: 90,
    },
    largeInput: {
        width: 100,
    },
    XLInput: {
        width: 110,
    },
}));

const parseSelectedValue = value => {
    const parsedValue = parseInt(value, 10);
    if (Number.isNaN(parsedValue)) return '';
    return parsedValue;
};

const adaptInputSize = length => {
    if (length <= 999) return 'input';
    if (length <= 9999) return 'mediumInput';
    if (length <= 99999) return 'largeInput';
    return 'XLInput';
};

const PageSelect = ({ pageIndex, pages, onPageChange }) => {
    const classes = useStyles();
    const [selectedPage, setSelectedPage] = useState(pageIndex);
    return (
        <Box
            display="inline-flex"
            justifyContent="center"
            alignItems="center"
            ml={8}
        >
            <Box display="inline-block" mr={1}>
                <FormattedMessage {...MESSAGES.pageText} />
            </Box>

            <TextField
                className={classNames(
                    classes[adaptInputSize(selectedPage)],
                    'pagination-page-select',
                )}
                size="small"
                label=""
                type="number"
                value={selectedPage}
                // value={pageIndex}
                disabled={pages < 2}
                variant="outlined"
                onChange={e => {
                    setSelectedPage(parseSelectedValue(e.currentTarget.value));
                }}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        onPageChange(selectedPage);
                    }
                }}
            />
            <Box display="inline-block" ml={1}>
                <FormattedMessage {...MESSAGES.ofText} />
            </Box>

            <Box display="inline-block" ml={1}>
                {pages}
            </Box>
        </Box>
    );
};

PageSelect.defaultProps = {
    pages: 0,
    pageIndex: 0,
};

PageSelect.propTypes = {
    pages: PropTypes.number,
    pageIndex: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
};

export { PageSelect };
