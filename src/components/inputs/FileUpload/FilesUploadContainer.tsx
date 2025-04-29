/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent, useCallback, useState } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { makeStyles } from '@mui/styles';
import { Grid, Paper, Typography } from '@mui/material';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import MESSAGES from './messages';

type Props = {
    multi?: boolean;
    // eslint-disable-next-line no-unused-vars
    onFilesSelect: (files: File[]) => void;
    files: File[];
    accept?: Accept;
    disabled?: boolean;
    hideIfDropZone?: boolean;
    children: React.ReactNode;
    dragZoneHeight?: string;
};

export const dragzoneStyle = theme => ({
    outlined: {
        border: `2px dashed ${theme.palette.mediumGray.main}`,
        backgroundColor: theme.palette.ligthGray.main,
    },
    text: {
        color: theme.palette.mediumGray.main,
    },
});
const useDragzoneStyles = makeStyles(dragzoneStyle);

const DragZone = ({ height }) => {
    const { formatMessage } = useSafeIntl();
    const classes = useDragzoneStyles();
    const dragzoneHeight = height ?? '200px';
    return (
        <Paper
            elevation={0}
            variant="outlined"
            classes={{ outlined: classes.outlined }}
            sx={{ height: dragzoneHeight }}
        >
            <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                style={{ height: '100%' }}
            >
                <Typography className={classes.text}>
                    {formatMessage(MESSAGES.dropHere)}
                </Typography>
            </Grid>
        </Paper>
    );
};
export const FilesUploadContainer: FunctionComponent<Props> = ({
    children,
    multi = true,
    dragZoneHeight,
    onFilesSelect = () => null,
    accept = {},
    disabled = false,
    hideIfDropZone = false,
}) => {
    const [showDropZone, setShowDropzone] = useState<boolean>(false);
    const onDrop = useCallback(
        file => {
            if (!disabled) {
                onFilesSelect(file);
            }
        },
        [disabled, onFilesSelect],
    );
    const showChildren = hideIfDropZone ? !showDropZone : true;
    const { getRootProps, getInputProps } = useDropzone({
        accept,
        onDrop,
        multiple: multi,
        onDragLeave: () => {
            setShowDropzone(false);
        },
        onDragEnter: () => {
            setShowDropzone(true);
        },
        onDropAccepted: () => {
            setShowDropzone(false);
        },
    });

    const inputProps = { ...getInputProps(), disabled };

    return (
        <div {...getRootProps()}>
            <input {...inputProps} />
            {showChildren && children}
            {showDropZone && <DragZone height={dragZoneHeight} />}
        </div>
    );
};
