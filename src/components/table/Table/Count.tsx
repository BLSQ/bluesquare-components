import React, { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import { FormattedMessage } from 'react-intl';
import { formatThousand } from '../../../utils';
import { MESSAGES } from './messages';

type Props = {
    count?: number;
    selectCount?: number;
};

export const Count: FunctionComponent<Props> = ({
    count = 0,
    selectCount = 0,
}) => (
    <Box
        py={2}
        display="flex"
        justifyContent="flex-end"
        className="pagination-count"
    >
        {selectCount > 0 && (
            <>
                <Box display="inline-block" mr={1}>
                    {`${formatThousand(selectCount)} `}
                    <FormattedMessage {...MESSAGES.selected} />
                </Box>
                -
            </>
        )}
        {count > 0 && (
            <Box display="inline-block" ml={1}>
                {`${formatThousand(count)} `}
                <FormattedMessage {...MESSAGES.results} />
            </Box>
        )}
    </Box>
);
