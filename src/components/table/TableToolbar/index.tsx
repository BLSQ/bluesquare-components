import React, { FunctionComponent, ReactNode } from 'react';
import { Box } from '@mui/material';
import { SxStyles } from '../../../styles/iaso/types';
import { Count } from '../Table/Count';

export type TableToolbarProps = {
    count?: number;
    /** Column picker control. Hidden when omitted. */
    columnsSelect?: ReactNode;
    /** Download control (e.g. a menu with multiple formats). Hidden when omitted. */
    download?: ReactNode;
    /** Extra actions rendered after columns/download. */
    extraActions?: ReactNode;
};

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 2,
        borderBottom: theme => `1px solid ${theme.palette.divider}`,
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
    },
} satisfies SxStyles;

/**
 * Shared table header: result count on the left, optional column/download actions on the right.
 * Pass nodes for columnsSelect / download only when they should be shown.
 *
 * When used above a table, set `showCount={false}` on that table (and avoid `countOnTop`)
 * so the result count is not duplicated.
 */
export const TableToolbar: FunctionComponent<TableToolbarProps> = ({
    count,
    columnsSelect,
    download,
    extraActions,
}) => {
    const hasActions = Boolean(columnsSelect || download || extraActions);

    return (
        <Box sx={styles.root}>
            <Count count={count} />
            {hasActions && (
                <Box sx={styles.actions}>
                    {columnsSelect}
                    {download}
                    {extraActions}
                </Box>
            )}
        </Box>
    );
};
