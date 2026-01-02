import ArrowBack from '@mui/icons-material/ArrowBack';
import Close from '@mui/icons-material/Close';
import {
    Divider,
    Drawer,
    IconButton,
    InputBase,
    List,
    ListItem,
    ListItemText,
    Switch,
    Tooltip,
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import { InView } from 'react-intersection-observer';
import { BlockPlaceholder } from '../../BlockPlaceholder';
import { IconButton as IconButtonComponent } from '../../buttons/IconButton';
import { MESSAGES } from './messages';
import { useStyles } from './styles';
import { useSafeIntl } from '../../../localization/useSafeIntl';

const filterResults = (searchString, options) => {
    let displayedOptions = [...options];
    displayedOptions = displayedOptions.map((o, i) => ({ ...o, index: i }));
    if (searchString !== '') {
        const search = searchString.toLowerCase();
        displayedOptions = displayedOptions.filter(
            o =>
                (o.key && o.key.toLowerCase().includes(search)) ||
                (o.label && o.label.toLowerCase().includes(search)),
        );
    }
    return displayedOptions;
};
type Props = {
    options: any;
    setOptions: Function;
    minColumns?: number;
};

export const ColumnsSelectDrawer: FunctionComponent<Props> = ({
    options,
    setOptions,
    minColumns = 2,
}) => {
    const classes: Record<string, string> = useStyles();
    const { formatMessage } = useSafeIntl();
    const [state, setState] = React.useState({
        open: false,
        searchString: '',
    });

    const toggleDrawer = open => () => {
        setState({ ...state, open });
    };

    const handleSearch =
        (reset = false) =>
        event => {
            setState({
                ...state,
                searchString: reset ? '' : event.target.value,
            });
        };

    const handleChangeOptions = index => event => {
        const newOptions = [...options];
        newOptions[index] = {
            ...newOptions[index],
            active: event.target.checked,
        };
        setOptions(newOptions);
    };

    const activeOptionsCount = options.filter(o => o.active).length;

    const displayedOptions = filterResults(state.searchString, options);
    return (
        <>
            <IconButtonComponent
                onClick={toggleDrawer(true)}
                icon="filter-list"
                color="white"
                tooltipMessage={MESSAGES.columnSelect}
            />
            <Drawer
                anchor="right"
                open={state.open}
                onClose={toggleDrawer(false)}
            >
                <div className={classes.root}>
                    <div className={classes.toolbar}>
                        <Tooltip title={formatMessage(MESSAGES.close)}>
                            <IconButton onClick={toggleDrawer(false)}>
                                <ArrowBack />
                            </IconButton>
                        </Tooltip>
                        <div className={classes.search}>
                            <InputBase
                                value={state.searchString}
                                onChange={handleSearch()}
                                className={classes.input}
                                placeholder={
                                    formatMessage(MESSAGES.search) ?? undefined
                                }
                                inputProps={{
                                    'aria-label':
                                        formatMessage(MESSAGES.search) ??
                                        undefined,
                                    className: classes.input,
                                }}
                            />
                        </div>
                        {state.searchString !== '' && (
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
                        <List>
                            {displayedOptions.map(o => (
                                <InView key={o.key}>
                                    {({ inView, ref }) => (
                                        <div ref={ref} id={o.key}>
                                            <ListItem
                                                className={classes.listItem}
                                            >
                                                {inView && (
                                                    <>
                                                        <Switch
                                                            disabled={
                                                                activeOptionsCount ===
                                                                    minColumns &&
                                                                o.active
                                                            }
                                                            size="small"
                                                            checked={o.active}
                                                            onChange={handleChangeOptions(
                                                                o.index,
                                                            )}
                                                            color="primary"
                                                            inputProps={{
                                                                'aria-label':
                                                                    o.label,
                                                            }}
                                                            className={
                                                                classes.switch
                                                            }
                                                        />
                                                        <ListItemText
                                                            primary={
                                                                o.label || o.key
                                                            }
                                                        />
                                                    </>
                                                )}
                                                {!inView && (
                                                    <>
                                                        <BlockPlaceholder width="30px" />
                                                        <BlockPlaceholder />
                                                    </>
                                                )}
                                            </ListItem>
                                        </div>
                                    )}
                                </InView>
                            ))}
                        </List>
                    </div>
                </div>
            </Drawer>
        </>
    );
};
