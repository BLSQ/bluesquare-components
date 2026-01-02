/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent, useCallback, useState } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { makeStyles } from '@mui/styles';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { Box, Grid, Paper, SxProps, Tooltip, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { useSafeIntl } from '../../../localization/useSafeIntl';
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
    accept?: Accept;
    placeholder?: string;
    required?: boolean;
    errors?: string[];
    disabled?: boolean;
    sxInput?: SxProps;
    sxText?: SxProps;
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
    sxInput,
    sxText,
    multi = true,
    onFilesSelect = () => null,
    files = [],
    accept = {},
    required = false,
    errors = [],
    disabled = false,
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
    const { formatMessage } = useSafeIntl();
    const placeHolderText =
        placeholder ?? (formatMessage(MESSAGES.files) as string);
    console.log(
        'files',
        files.map(file => file.name),
    );

    const contentStyle = useCustomInputTextStyle();

    const inputProps = { ...getInputProps(), disabled };

    return (
        <div {...getRootProps()}>
            <input {...inputProps} />
            {!showDropZone && (
                <CustomInput
                    placeholder={placeHolderText}
                    icon={Icon}
                    required={required}
                    errors={errors}
                    disabled={disabled}
                    sx={sxInput}
                >
                    {files.length > 0 && (
                        <Box className={contentStyle.textStyle} sx={sxText}>
                            {files.map(file => {
                                return (
                                    <Box
                                        key={`${file.name}${file.type}${file.lastModified}`}
                                    >
                                        {file.name}
                                    </Box>
                                );
                            })}
                        </Box>
                    )}
                </CustomInput>
            )}
            {showDropZone && <DragZone />}
        </div>
    );
};
