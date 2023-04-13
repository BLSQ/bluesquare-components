/* eslint-disable max-len */
import { makeStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        '& .query-builder-container': {
            padding: '0 !important',
        },
        '& .qb-drag-handler, .qb-draggable, .query-builder': {
            WebkitUserSelect: 'none',
            KhtmlUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
        },
        '& .rule--header:after': {
            content: '""',
            display: 'table',
            clear: 'both',
        },
        '& .group--header,\n.group--footer': {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            marginTop: '10px',
            marginBottom: '10px',
        },
        '& .query-builder': {
            overflow: 'hidden',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '14px',
            lineHeight: 1.25,
            margin: 0,
        },
        '& .query-builder *, .query-builder *::before, .query-builder *::after':
            {
                boxSizing: 'border-box',
            },
        '& .query-builder .widget--valuesrc': {
            opacity: '1 !important',
        },
        '& body.qb-dragging .ant-tooltip': { display: 'none' },
        '& .query-builder.qb-dragging': {
            cursor: ['-webkit-grabbing !important', 'grabbing !important'],
        },
        '& .query-builder.qb-dragging button': { pointerEvents: 'none' },
        '& .group': {
            background: theme.palette.gray.background,
            border: `1px solid ${theme.palette.border.main}`,
        },
        '& .rule': {
            backgroundColor: 'white',
            border: '1px solid transparent',
            padding: '10px',
            flex: 1,
            display: 'flex',
        },
        '& .rule-with-error .rule': { border: '1px solid #e0a1a1' },
        '& .rule--body--wrapper': {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
        },
        '& .rule--error': {
            color: 'red',
            marginBottom: '-5px',
            marginTop: '5px',
        },
        '& .group-or-rule': { borderRadius: '5px', position: 'relative' },
        '& .rule_group': {
            background: 'rgba(255, 252, 242, 0.5)',
            border: '1px solid #f9f1dd',
            display: 'flex',
            paddingLeft: '10px',
        },
        '& .qb-draggable': {
            pointerEvents: 'none',
            position: 'absolute',
            opacity: 0.7,
            zIndex: 1000,
        },
        '& .qb-placeholder': { border: '1px dashed gray' },
        '& .locked': { border: '1px dashed red' },
        '& .ant-tooltip-inner': { minHeight: '18px' },
        '& .ant-slider': { marginBottom: '4px', marginTop: '4px' },
        '& .ant-slider-with-marks': { marginBottom: '10px', marginTop: '4px' },
        '& .ant-slider-track': { visibility: 'visible !important' },
        '& .ant-select-tree-dropdown > div[role=listbox]': { outline: 'none' },
        '& ul.ant-select-selection__rendered': { marginRight: '11px' },
        '& .ant-select-item': { minHeight: '22px' },
        '& .group--children': {
            paddingLeft: '24px',
            marginTop: '10px',
            marginBottom: '10px',
        },
        '& .group--children > .group-or-rule-container > .group-or-rule:before':
            {
                top: '-4px',
                borderWidth: '0 0 2px 2px',
            },
        '& .group--children > .group-or-rule-container > .group-or-rule::after':
            {
                top: '50%',
                borderWidth: '0 0 0 2px',
            },
        '& .group--children > .group-or-rule-container > .group-or-rule::before, .group--children > .group-or-rule-container > .group-or-rule::after':
            {
                content: '""',
                position: 'absolute',
                left: '-14px',
                width: '14px',
                height: 'calc(50% + 8px)',
                borderColor: '#CCC',
                borderStyle: 'solid',
                WebkitBoxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                boxSizing: 'border-box',
            },
        '& .group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::before':
            {
                display: 'none',
            },
        '& .group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::after':
            {
                borderRadius: '4px 0 0 0',
                borderWidth: '2px 0 0 2px',
            },
        '& .group--children.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::before':
            {
                display: 'none',
            },
        '& .group--children.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::after':
            {
                borderRadius: '4px 0 0 0',
                borderWidth: '2px 0 0 2px',
            },
        '& .group--children > .group-or-rule-container:first-child > .group-or-rule::before':
            {
                top: '-12px',
                height: 'calc(50% + 14px)',
            },
        '& .group--children > .group-or-rule-container:last-child > .group-or-rule::before':
            {
                borderRadius: '0 0 0 4px',
            },
        '& .group--children > .group-or-rule-container:last-child > .group-or-rule::after':
            {
                display: 'none',
            },
        '& .group--children.hide--line > .group-or-rule-container > .group-or-rule::before, .group--children.hide--line > .group-or-rule-container > .group-or-rule::after':
            {
                borderColor: 'rgba(128, 128, 128, 0.1)',
            },
        '& .qb-draggable::before, .qb-draggable::after': { display: 'none' },
        '& .qb-drag-handler': { cursor: ['-webkit-grabbing', 'grabbing'] },
        '& .group--drag-handler': {
            marginRight: '8px',
            position: 'relative',
            top: '3px',
        },
        '& .group--conjunctions .group--drag-handler': { marginLeft: '10px' },
        '& .group--conjunctions.hide--conj': { opacity: 0.3 },
        '& .group--actions': { marginLeft: '10px', flex: 1, display: 'flex' },
        '& .group--actions--tl, .group--actions--bl': {
            justifyContent: 'flex-start',
        },
        '& .group--actions--tl': { marginLeft: '20px' },
        '& .group--actions--tc, .group--actions--bc': {
            justifyContent: 'center',
        },
        '& .group--actions--tr, .group--actions--br': {
            justifyContent: 'flex-end',
        },
        '& .group--actions .action--DELETE': { marginTop: '-1px' },
        '& .case_group': { borderWidth: '2px' },
        '& .switch_group > .group--children > .group-or-rule-container > .group-or-rule::before, .switch_group > .group--children > .group-or-rule-container > .group-or-rule::after':
            {
                height: 'calc(50% + 12px)',
            },
        '& .case_group--body': {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '10px',
            marginBottom: '10px',
        },
        '& .case_group--body .case_group--children': {
            flex: 'auto',
            marginTop: '0 !important',
            marginBottom: '0 !important',
        },
        '& .case_group--body .case_group--value': {
            marginTop: '0',
            marginBottom: '0',
            marginRight: '10px',
        },
        '& .rule_group .group--drag-handler': { alignSelf: 'center' },
        '& .rule_group .group--field': { alignSelf: 'center' },
        '& .rule_group .group--actions': { alignSelf: 'center', flex: 0 },
        '& .rule_group .rule_group--children': {
            flex: 1,
            marginTop: '5px',
            marginBottom: '5px',
            paddingLeft: '18px',
        },
        '& .rule_group .rule_group--children .group-or-rule-container': {
            marginBottom: '5px',
            marginTop: '5px',
            paddingRight: '5px',
        },
        '& .rule_group .rule_group--children.one--child': {
            paddingLeft: '10px',
        },
        '& .rule_group .rule_group--children > .group-or-rule-container > .group-or-rule::before, .rule_group .rule_group--children > .group-or-rule-container > .group-or-rule::after':
            {
                left: '-10px',
                width: '10px',
                height: 'calc(50% + 8px)',
            },
        '& .group--header.hide--drag.with--conjs > .group--field--count--rule':
            {
                marginLeft: '20px',
            },
        '& .rule--header': {
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
        },
        '& .rule--drag-handler': {
            display: 'flex',
            alignItems: 'center',
            marginRight: '8px',
        },
        '& .rule--field, .group--field, .rule--operator, .rule--value, .rule--operator-options, .rule--widget, .widget--widget, .widget--valuesrc, .widget--sep, .operator--options--sep, .rule--before-widget, .rule--after-widget':
            {
                display: 'inline-block',
            },
        '& .mui .widget--sep, .mui .operator--options--sep, .mui .rule--func--bracket-before, .mui .rule--func--bracket-after, .mui .rule--func--arg-sep':
            {
                verticalAlign: 'bottom',
                alignSelf: 'flex-end',
                marginBottom: '8px',
            },
        '& .mui .rule--operator-options': { verticalAlign: 'bottom' },
        '& .mui .widget--valuesrc': { verticalAlign: 'bottom' },
        '& .rule--operator, .widget--widget, .widget--valuesrc, .widget--sep': {
            marginLeft: '10px',
        },
        '& .widget--valuesrc': { marginRight: '-8px' },
        '& .widget--valuesrc span i': { transform: 'rotate(90deg)' },
        '& .operator--options--sep': { marginRight: '10px' },
        '& div.tooltip-inner': { maxWidth: '500px' },
        '& .rule--field label, .group--field label, .rule--operator label, .widget--widget label':
            {
                display: 'block',
                fontWeight: 'bold',
            },
        '& .conjunction': { display: 'inline-block' },
        '& .conjunction label': {
            display: 'inline-block',
            border: '1px solid',
            cursor: 'pointer',
            color: 'white',
            textTransform: 'uppercase',
            padding: '0.2rem 0.4rem',
        },
        '& .conjunction input': { display: 'none' },
        '& .conjunction[data-state=active] label': {
            backgroundColor: '#3276b1',
            borderColor: '#285e8e',
        },
        '& .conjunction[data-state=inactive] label': {
            backgroundColor: '#428bca',
            borderColor: '#357ebd',
        },
        '& .conjunction[data-state=inactive] label:hover': {
            backgroundColor: '#3276b1',
            borderColor: '#285e8e',
        },
        '& .conjunction:first-child label': { borderRadius: '3px 0 0 3px' },
        '& .conjunction:last-child label': { borderRadius: '0 3px 3px 0' },
        '& .conjunction:first-child:last-child': { borderRadius: '3px' },
        '& .rule--func--wrapper, .rule--func, .rule--func--args, .rule--func--arg, .rule--func--arg-value, .rule--func--bracket-before, .rule--func--bracket-after, .rule--func--arg-sep, .rule--func--arg-label, .rule--func--arg-label-sep':
            {
                display: 'inline-block',
            },
        '& .rule--func--bracket-before, .rule--func--bracket-after': {
            marginLeft: '3px',
            marginRight: '3px',
        },
        '& .rule--func--bracket-before': { marginLeft: '5px' },
        '& .rule--func--arg-value > .rule--widget': { marginLeft: '-10px' },
        '& .rule--func--arg-sep': { marginLeft: '3px', marginRight: '6px' },
        '& .rule--func--arg-label-sep': {
            marginLeft: '1px',
            marginRight: '6px',
        },
        '& .qb-lite .group--drag-handler, .qb-lite .group--actions': {
            transition: 'opacity 0.2s',
        },
        '& .qb-lite .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite .rule_group_ext--drag-handler':
            {
                transition: 'padding 0.2s',
            },
        '& .qb-lite .group--header:hover .group--header .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite .group--header:hover .group--header .rule_group_ext--drag-handler,\n.qb-lite .group--header:not(:hover) .group--conjunctions .ant-btn:not(.ant-btn-primary),\n.qb-lite .group--header:not(:hover) .rule_group_ext--drag-handler,\n.qb-lite .rule_group:not(:hover) .group--conjunctions .ant-btn:not(.ant-btn-primary),\n.qb-lite .rule_group:not(:hover) .rule_group_ext--drag-handler':
            {
                width: '0',
                padding: '0',
                overflow: 'hidden',
                opacity: 0,
            },
        '& .qb-lite .widget--valuesrc, .qb-lite .rule--drag-handler, .qb-lite .rule--header':
            {
                transition: 'opacity 0.2s',
            },
        '& .qb-lite .rule:hover .rule .widget--valuesrc, .qb-lite .rule:hover .rule .rule--drag-handler, .qb-lite .rule:hover .rule .rule--header,\n.qb-lite .rule:not(:hover) .widget--valuesrc,\n.qb-lite .rule:not(:hover) .rule--drag-handler,\n.qb-lite .rule:not(:hover) .rule--header':
            {
                opacity: 0,
            },
        '& .qb-lite.qb-dragging .widget--valuesrc, .qb-lite.qb-dragging .rule--drag-handler, .qb-lite.qb-dragging .rule--header, .qb-lite.qb-dragging .group--drag-handler, .qb-lite.qb-dragging .group--actions':
            {
                opacity: '0 !important',
            },
        '& .qb-lite.qb-dragging .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite.qb-dragging .rule_group_ext--drag-handler':
            {
                width: '0 !important',
                padding: '0 !important',
                overflow: 'hidden !important',
                opacity: '0 !important',
            },
        '& .group-or-rule-container': {
            marginTop: '10px',
            marginBottom: '10px',
            paddingRight: '10px',
        },
        '& .group-or-rule-container:first-child': {
            marginTop: '0px !important',
        },
        '& .group-or-rule-container:last-child': {
            marginBottom: '0px !important',
        },
        '& .rule--body.can--shrink--value': {
            display: 'flex',
            alignItems: 'center',
        },
        '& .rule--body.can--shrink--value .rule--value': { flex: 1 },
        '& .rule--body.can--shrink--value .rule--value > .rule--widget': {
            display: 'flex',
        },
        '& .rule--body.can--shrink--value .rule--value > .rule--widget .widget--widget':
            {
                flex: 1,
            },
        '& .rule--body.can--shrink--value .rule--value > .rule--widget > .widget--valuesrc':
            {
                display: 'flex',
                alignItems: 'center',
            },
        '& .rule--value > .rule--widget > .widget--valuesrc .anticon': {
            height: '100%',
        },
        '& .rule--value > .rule--widget > .widget--valuesrc .anticon svg': {
            height: '100%',
        },
        '& .svg-inline--fa': { pointerEvents: 'none' },
        '& .MuiFormControl-root fieldset legend': {
            fontSize: 0,
            padding: 0,
            width: 0,
        },
        '& .MuiFormControl-root .MuiSelect-select': {
            padding: theme.spacing(1, 5, 1, 1),
        },
        '& .MuiFormControl-root .MuiAutocomplete-inputRoot': {
            padding: theme.spacing(1, 5, 1, 1),
        },
        '& .MuiFormControl-root .MuiAutocomplete-endAdornment': {
            top: 5,
        },
        '& .MuiFormControl-root .MuiSelect-icon': {
            top: 7,
        },
        '& .MuiOutlinedInput-input': {
            padding: '17.5px 14px',
        },
        '& .MuiAutocomplete-root': {
            width: '300px !important',
            minWidth: '300px !important',
        },
        '& .rule--widget--DATETIME_CURRENT_DATETIME .widget--valuesrc': {
            display: 'none',
        },
    },
    radio: {
        position: 'relative',
        top: 4,
    },
});

// @ts-ignore
const useStyles = makeStyles(styles);

export { styles, useStyles };
