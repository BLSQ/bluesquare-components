/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    InputBase,
    Tooltip,
} from '@mui/material';
import Close from '@mui/icons-material//Close';
import ArrowBack from '@mui/icons-material//ArrowBack';
import ViewColumnIcon from '@mui/icons-material//ViewColumn';
import { makeStyles } from '@mui/styles';
import { IconButton as IconButtonComponent } from '../../buttons/IconButton';

import { MESSAGES } from './messages';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { ColumnFromReactTable } from '../Table';
import { useToggle } from '../../../utils/useToggle';
import { OptionsList } from './OptionList';
import { styles } from './styles';

// Weird error with overflowX property, but it matches the type in doc?
// @ts-ignore
export const useStyles = makeStyles(styles);

const filterResults = (searchString, columns: ColumnFromReactTable[]) => {
    if (!searchString) {
        return columns;
    }
    const search = searchString.toLowerCase();
    return columns.filter(
        o =>
            (o.id && o.id.toLowerCase().includes(search)) ||
            (o.label && o.label.toLowerCase().includes(search)) ||
            (o.Header &&
                typeof o.Header === 'string' &&
                o.Header?.toLowerCase().includes(search)),
    );
};

type Props = {
    columns: ColumnFromReactTable[];
    hiddenColumns: string[];
    minColumns?: number;
    disabled?: boolean;
    buttonType?: 'button' | 'icon';
};

const ColumnsSelectGeneric: React.FC<Props> = ({
    columns,
    hiddenColumns,
    minColumns = 2,
    disabled = false,
    buttonType = 'icon',
}) => {
    const classes = useStyles();
    const { formatMessage } = useSafeIntl();
    const [isOpen, toggleDrawer] = useToggle(false);
    const [searchString, setSearchString] = useState<string>('');

    const handleSearch =
        (reset = false) =>
        event => {
            setSearchString(reset ? '' : event.target.value);
        };

    const activeOptionsCount = columns.length - hiddenColumns.length;
    // When the minimum of visible column is reached
    // column can only be toggled to show
    const minReached = activeOptionsCount === minColumns;

    const displayedOptions = filterResults(searchString, columns);
    return (
        <>
            {buttonType === 'icon' && (
                <IconButtonComponent
                    onClick={toggleDrawer}
                    overrideIcon={ViewColumnIcon}
                    color="primary"
                    tooltipMessage={MESSAGES.columnSelect}
                    disabled={disabled}
                />
            )}
            {buttonType === 'button' && (
                <Button
                    disabled={disabled}
                    variant="contained"
                    color="primary"
                    onClick={toggleDrawer}
                    size="medium"
                    id="ColumnsSelectDrawer-toggleDrawer"
                >
                    <Box mr={1} display="inline-flex">
                        <ViewColumnIcon />
                    </Box>
                    {formatMessage(MESSAGES.columnSelect)}
                </Button>
            )}
            <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
                <div className={classes.root}>
                    <div className={classes.toolbar}>
                        <Tooltip title={formatMessage(MESSAGES.close)}>
                            <IconButton onClick={toggleDrawer}>
                                <ArrowBack />
                            </IconButton>
                        </Tooltip>
                        <div className={classes.search}>
                            <InputBase
                                value={searchString}
                                onChange={handleSearch()}
                                className={classes.input}
                                placeholder={formatMessage(MESSAGES.search)}
                                inputProps={{
                                    'aria-label': formatMessage(
                                        MESSAGES.search,
                                    ),
                                    className: classes.input,
                                }}
                            />
                        </div>
                        {searchString !== '' && (
                            <Tooltip
                                title={formatMessage(MESSAGES.resetSearch)}
                            >
                                <IconButton onClick={handleSearch(true)}>
                                    <Close />
                                </IconButton>
                            </Tooltip>
                        )}
                    </div>
                    <Divider />
                    <div className={classes.list}>
                        <OptionsList
                            columns={displayedOptions}
                            minReached={minReached}
                        />
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export { ColumnsSelectGeneric, Props };
