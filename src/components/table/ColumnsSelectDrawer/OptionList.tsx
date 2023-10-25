import { makeStyles } from '@mui/styles';
import React from 'react';
import { List, ListItem, ListItemText, Switch } from '@mui/material';
import { InView } from 'react-intersection-observer';
import { styles } from './styles';
import { ColumnFromReactTable } from '../Table';
import { BlockPlaceholder } from '../../BlockPlaceholder';

// Weird error with overflowX property but it match the type in doc?
// @ts-ignore
const useStyles = makeStyles(styles);

type ListItemProps = {
    inView;
    minReached: boolean;
    column: ColumnFromReactTable;
};
const OptionListItem: React.FC<ListItemProps> = ({
    inView,
    minReached,
    column,
}) => {
    const classes = useStyles();
    const toggleHiddenProps = column.getToggleHiddenProps();

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
                                typeof column.Header === 'string'
                                    ? column.Header
                                    : column.id,
                        }}
                        className={classes.switch}
                        {...toggleHiddenProps}
                    />
                    <ListItemText primary={column.Header} />
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
    columns: ColumnFromReactTable[];
    minReached: boolean;
};
export const OptionsList: React.FC<OptionListProps> = ({
    columns,
    minReached,
}) => (
    // If it has sub-columns make a section and call yourself recursively
    // The inview is to not calculate the column not present
    <List>
        {columns.map(column => (
            <InView key={column.id}>
                {({ inView, ref }) => (
                    <div ref={ref} id={column.id}>
                        {column.columns && (
                            <>
                                <ListItem>{column.Header}</ListItem>
                                <div
                                    style={{
                                        padding: 6,
                                    }}
                                >
                                    <OptionsList
                                        columns={column.columns}
                                        minReached={minReached}
                                    />
                                </div>
                            </>
                        )}
                        {!column.columns && (
                            <OptionListItem
                                inView={inView}
                                column={column}
                                minReached={minReached}
                            />
                        )}
                    </div>
                )}
            </InView>
        ))}
    </List>
);
