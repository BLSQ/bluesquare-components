/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import { InView } from 'react-intersection-observer';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Divider,
    Switch,
    InputBase,
    Tooltip,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';

import { makeStyles } from '@material-ui/core/styles';
import { IconButton as IconButtonComponent } from '../../buttons/IconButton';
import { BlockPlaceholder } from '../../BlockPlaceholder';

import { MESSAGES } from './messages';
import { styles } from './styles';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { Column } from '../Table';

// Weird error with overflowX property but it match the type in doc?
// @ts-ignore
const useStyles = makeStyles(styles);

const filterResults = (searchString, columns: Column[]) => {
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
    columns: Column[];
    hiddenColumns: string[];
    minColumns?: number;
};

const useToggle = (initialState = false): [boolean, () => void] => {
    // Initialize the state
    const [state, setState] = useState<boolean>(initialState);

    // Define and memorize toggler function in case we pass down the component,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback(() => setState(s => !s), []);

    return [state, toggle];
};

type ListItemProps = {
    inView;
    minReached: boolean;
    o: Column;
};

const OptionListItem: React.FC<ListItemProps> = ({ inView, minReached, o }) => {
    const classes = useStyles();
    const toggleHiddenProps = o.getToggleHiddenProps();

    return (
        <ListItem className={classes.listItem}>
            {inView && (
                <>
                    <Switch
                        disabled={minReached && toggleHiddenProps.checked}
                        size="small"
                        color="primary"
                        inputProps={{
                            'aria-label':
                                typeof o.Header === 'string' ? o.Header : o.id,
                        }}
                        className={classes.switch}
                        {...toggleHiddenProps}
                    />
                    <ListItemText primary={o.Header} />
                </>
            )}
            {!inView && (
                <>
                    <BlockPlaceholder width="30px" />
                    <BlockPlaceholder />
                </>
            )}
        </ListItem>
    );
};

type OptionListProps = {
    columns: Column[];
    minReached: boolean;
};
const OptionsList: React.FC<OptionListProps> = ({ columns, minReached }) => {
    // If it has sub-columns make a section and call yourself recursively
    // The inview is to not calculate the column not present
    return (
        <List>
            {columns.map(o => (
                <InView key={o.id}>
                    {({ inView, ref }) => {
                        return (
                            <div ref={ref} id={o.id}>
                                {o.columns && (
                                    <>
                                        <ListItem>{o.Header}</ListItem>
                                        <div
                                            style={{
                                                padding: 6,
                                            }}
                                        >
                                            <OptionsList
                                                columns={o.columns}
                                                minReached={minReached}
                                            />
                                        </div>
                                    </>
                                )}
                                {!o.columns && (
                                    <OptionListItem
                                        inView={inView}
                                        o={o}
                                        minReached={minReached}
                                    />
                                )}
                            </div>
                        );
                    }}
                </InView>
            ))}
        </List>
    );
};

const ColumnsSelectGeneric: React.FC<Props> = ({
    columns,
    hiddenColumns,
    minColumns = 2,
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
            <IconButtonComponent
                onClick={toggleDrawer}
                overrideIcon={ViewColumnIcon}
                color="primary"
                tooltipMessage={MESSAGES.columnSelectTooltip}
            />
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
