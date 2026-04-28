import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IconButton, Box, List, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import ListItem from '@mui/material/ListItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Fab from '@mui/material/Fab';

import DeleteIcon from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';

import { commonStyles } from '../../../styles/iaso/common.ts';

import { addPositionIndex, removePositionIndex } from '../../../utils';

const styles = theme => ({
    ...commonStyles(theme),
    label: {
        top: theme.spacing(2),
        position: 'relative',
        color: theme.textColor,
        fontSize: 16,
    },
    list: {
        width: '100%',
        padding: '0 !important',
    },
    listItem: {
        height: 55,
        width: '100% !important',
        position: 'relative !important',
        display: 'flex !important',
        alignItems: 'center !important',
        padding: '0 !important',
        marginBottom: theme.spacing(1),
    },
    addListItem: {
        height: 55,
        width: '100% !important',
        position: 'relative !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'flex-end !important',
        padding: '0 !important',
        marginBottom: theme.spacing(2),
    },
    input: {
        width: '95% ',
        marginLeft: '5%',
    },
    deleteIcon: {
        position: 'absolute !important',
        right: theme.spacing(1),
    },
});

class ArrayFieldInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldList: addPositionIndex(props.fieldList || []),
        };
    }

    // eslint-disable-next-line camelcase
    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState({
            fieldList: addPositionIndex(newProps.fieldList || []),
        });
    }

    updateField(value, fieldIndex) {
        const newFieldList = this.state.fieldList.slice();
        newFieldList[fieldIndex].value = value;
        this.props.updateList(removePositionIndex(newFieldList));
    }

    addField() {
        const newFieldList = this.state.fieldList.slice();
        newFieldList.push({
            value: '',
            position: this.state.fieldList.length,
        });
        this.props.updateList(removePositionIndex(newFieldList));
    }

    removeField(fieldIndex) {
        const newFieldList = this.state.fieldList.slice();
        newFieldList.splice(fieldIndex, 1);
        this.props.updateList(removePositionIndex(newFieldList));
    }

    render() {
        const { baseId, classes, label = '', autoComplete = 'off', dataTestId } = this.props;
        const { fieldList } = this.state;
        const addFieldButtonDisabled =
            fieldList.length > 0 &&
            fieldList[fieldList.length - 1].value === '';
        return (
            <Grid container spacing={0}>
                <Grid item xs={1}>
                    <span className={classes.label}>{label}:</span>
                </Grid>
                <Grid item xs={11}>
                    <Box
                        id={`array-input-field-list-${baseId}`}
                        data-test={
                            dataTestId ?? `array-input-field-list-${baseId}`
                        }
                    >
                        <List className={classes.list}>
                            {fieldList.map((a, fieldIndex) => (
                                <ListItem
                                    key={a.position}
                                    className={classes.listItem}
                                >
                                    <OutlinedInput
                                        autoComplete={autoComplete}
                                        className={classes.input}
                                        id={`${baseId}-${a.position}`}
                                        value={a.value || ''}
                                        onChange={event =>
                                            this.updateField(
                                                event.currentTarget.value,
                                                fieldIndex,
                                            )
                                        }
                                    />
                                    <IconButton
                                        className={classes.deleteIcon}
                                        color="inherit"
                                        onClick={() =>
                                            this.removeField(fieldIndex)
                                        }
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                            <ListItem className={classes.addListItem}>
                                <Fab
                                    disabled={addFieldButtonDisabled}
                                    className={classes.Fab}
                                    size="small"
                                    color="primary"
                                    aria-label="add"
                                    onClick={() => this.addField()}
                                >
                                    <Add />
                                </Fab>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}
// TODO type/document classes prop
ArrayFieldInput.propTypes = {
    fieldList: PropTypes.array,
    baseId: PropTypes.string.isRequired,
    updateList: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    label: PropTypes.string,
    autoComplete: PropTypes.string,
    dataTestId: PropTypes.string,
};

const styledArrayFieldInput = withStyles(styles)(ArrayFieldInput);

export { styledArrayFieldInput as ArrayFieldInput };
