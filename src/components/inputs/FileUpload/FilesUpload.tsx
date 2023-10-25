/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { Box, Grid, Paper, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import MESSAGES from './messages';
import {
    CustomInput,
    useCustomInputTextStyle,
} from '../CustomInput/CustomInput';

type Props = {
    multi?: boolean;
    // eslint-disable-next-line no-unused-vars
    onFilesSelect: (files: File[]) => void;
    files: File[];
    placeholder?: string;
    required?: boolean;
    errors?: string[];
};

const Icon = (
    <Tooltip title={<FormattedMessage {...MESSAGES.clickOrDragFile} />}>
        <AttachmentIcon color="action" />
    </Tooltip>
);

export const dragzoneStyle = theme => ({
    outlined: {
        border: `2px dashed ${theme.palette.mediumGray.main}`,
        height: '100px',
        backgroundColor: theme.palette.ligthGray.main,
    },
    text: {
        color: theme.palette.mediumGray.main,
    },
});
const useDragzoneStyles = makeStyles(dragzoneStyle);

const DragZone = () => {
    const { formatMessage } = useSafeIntl();
    const classes = useDragzoneStyles();
    return (
        <Paper
            elevation={0}
            variant="outlined"
            classes={{ outlined: classes.outlined }}
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
export const FilesUpload: FunctionComponent<Props> = ({
    placeholder,
    multi = true,
    onFilesSelect = () => null,
    files = [],
    required = false,
    errors = [],
}) => {
    const [showDropZone, setShowDropzone] = useState<boolean>(false);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: onFilesSelect,
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
    const { formatMessage } = useSafeIntl();
    const placeHolderText = placeholder ?? formatMessage(MESSAGES.files);

    const contentStyle = useCustomInputTextStyle();

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {!showDropZone && (
                <CustomInput
                    placeholder={placeHolderText}
                    icon={Icon}
                    required={required}
                    errors={errors}
                >
                    {files.length > 0 && (
                        <Box className={contentStyle.textStyle}>
                            {`${files.length} files selected`}
                        </Box>
                    )}
                </CustomInput>
            )}
            {showDropZone && <DragZone />}
        </div>
    );
};
