import React, { FunctionComponent, useState, useEffect, useMemo } from 'react';

import { OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton as IconButtonComponent } from '../../buttons/IconButton';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

import { useStyles } from './styles';
import { useSkipEffectOnMount } from '../../../utils/useSkipEffectOnMount';
import { containsForbiddenCharacter } from '../../../utils/containsForbiddenCharaters';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { IntlFormatMessage } from '../../../types/types';

import MESSAGES from './messages';

type Props = {
    uid: string;
    label: string;
    keyValue: string;
    required?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    onEnterPressed: () => void;
    // eslint-disable-next-line no-unused-vars
    onChange: (newValue: string) => void;
    // eslint-disable-next-line no-unused-vars
    onErrorChange: (hasError: boolean) => void;
    hasCharactersCheck: boolean;
    value: string;
    errors: [];
    autoComplete: string;
};

const SearchInput: FunctionComponent<Props> = ({
    uid,
    label,
    required = false,
    keyValue,
    disabled = false,
    clearable = false,
    value = undefined || '',
    onEnterPressed,
    onChange,
    onErrorChange,
    errors = [],
    autoComplete,
    hasCharactersCheck = false,
}) => {
    const hasErrors = errors.length >= 1;

    // use local state to avoid re render on value prop change, avoiding special chars combinaison like "ê", "î" => IA-1432
    const [localValue, setLocalValue] = useState(value);
    const hasClearIcon = useMemo(() => value !== '', [value]);
    const [textSearchErrors, setTextSearchErrors] = useState<Array<string>>([]);
    const [hasError, setHasError] = useState<boolean>(false);
    const classes: Record<string, any> = useStyles();
    const { formatMessage }: { formatMessage: IntlFormatMessage } =
        useSafeIntl();

    const onClear = () => {
        setLocalValue('');
    };

    useSkipEffectOnMount(() => {
        onChange(localValue);
    }, [localValue]);

    useSkipEffectOnMount(() => {
        if (value !== localValue) {
            setLocalValue(value);
        }
    }, [value]);

    useEffect(() => {
        if (hasCharactersCheck) {
            const forbiddenChars = ['"', '?', '/', '%', '&'];
            const hasForbiddenChar = containsForbiddenCharacter(
                localValue,
                forbiddenChars,
            );
            setHasError(hasForbiddenChar);
            const newErrors = hasForbiddenChar
                ? [formatMessage(MESSAGES.forbiddenChars)]
                : [];
            setTextSearchErrors(newErrors);
        }
    }, [localValue, formatMessage, hasCharactersCheck]);

    useEffect(() => {
        onErrorChange(hasError);
    }, [hasError, onErrorChange]);

    return (
        <FormControl errors={textSearchErrors}>
            <InputLabel
                htmlFor={`search-${keyValue}`}
                label={label}
                required={required}
                shrink={value !== undefined && value !== null && value !== ''}
                error={hasErrors}
            />
            <OutlinedInput
                autoComplete={autoComplete}
                disabled={disabled}
                error={hasErrors}
                id={uid ? `search-${uid}` : `search-${keyValue}`}
                value={localValue}
                placeholder=""
                onKeyPress={event => {
                    if (
                        event.which === 13 ||
                        event.keyCode === 13 ||
                        event.key === 'Enter'
                    ) {
                        !hasError ? onEnterPressed() : null;
                    }
                }}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                endAdornment={
                    <>
                        {clearable && hasClearIcon && (
                            <IconButtonComponent
                                size="small"
                                onClick={onClear}
                                icon="clear"
                                tooltipMessage={MESSAGES.clear}
                            />
                        )}

                        <div
                            className={classes.searchIconWrapper}
                            tabIndex={0}
                            role="button"
                            onClick={() => onEnterPressed()}
                        >
                            <SearchIcon />
                        </div>
                    </>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
                onChange={event => setLocalValue(event.target.value)}
            />
        </FormControl>
    );
};

export { SearchInput };
