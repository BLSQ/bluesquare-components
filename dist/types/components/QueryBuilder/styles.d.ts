declare const styles: (theme: any) => {
    root: {
        '& .query-builder-container': {
            padding: string;
        };
        '& .qb-drag-handler, .qb-draggable, .query-builder': {
            WebkitUserSelect: string;
            KhtmlUserSelect: string;
            MozUserSelect: string;
            msUserSelect: string;
            userSelect: string;
        };
        '& .rule--header:after': {
            content: string;
            display: string;
            clear: string;
        };
        '& .group--header,\n.group--footer': {
            display: string;
            alignItems: string;
            paddingLeft: string;
            paddingRight: string;
            marginTop: string;
            marginBottom: string;
        };
        '& .query-builder': {
            overflow: string;
            fontFamily: string;
            fontSize: string;
            lineHeight: number;
            margin: number;
        };
        '& .query-builder *, .query-builder *::before, .query-builder *::after': {
            boxSizing: string;
        };
        '& body.qb-dragging .ant-tooltip': {
            display: string;
        };
        '& .query-builder.qb-dragging': {
            cursor: string[];
        };
        '& .query-builder.qb-dragging button': {
            pointerEvents: string;
        };
        '& .group': {
            background: any;
            border: string;
        };
        '& .rule': {
            backgroundColor: string;
            border: string;
            padding: string;
            flex: number;
            display: string;
        };
        '& .rule-with-error .rule': {
            border: string;
        };
        '& .rule--body--wrapper': {
            flex: number;
            display: string;
            flexDirection: string;
        };
        '& .rule--error': {
            color: string;
            marginBottom: string;
            marginTop: string;
        };
        '& .group-or-rule': {
            borderRadius: string;
            position: string;
        };
        '& .rule_group': {
            background: string;
            border: string;
            display: string;
            paddingLeft: string;
        };
        '& .qb-draggable': {
            pointerEvents: string;
            position: string;
            opacity: number;
            zIndex: number;
        };
        '& .qb-placeholder': {
            border: string;
        };
        '& .locked': {
            border: string;
        };
        '& .ant-tooltip-inner': {
            minHeight: string;
        };
        '& .ant-slider': {
            marginBottom: string;
            marginTop: string;
        };
        '& .ant-slider-with-marks': {
            marginBottom: string;
            marginTop: string;
        };
        '& .ant-slider-track': {
            visibility: string;
        };
        '& .ant-select-tree-dropdown > div[role=listbox]': {
            outline: string;
        };
        '& ul.ant-select-selection__rendered': {
            marginRight: string;
        };
        '& .ant-select-item': {
            minHeight: string;
        };
        '& .group--children': {
            paddingLeft: string;
            marginTop: string;
            marginBottom: string;
        };
        '& .group--children > .group-or-rule-container > .group-or-rule:before': {
            top: string;
            borderWidth: string;
        };
        '& .group--children > .group-or-rule-container > .group-or-rule::after': {
            top: string;
            borderWidth: string;
        };
        '& .group--children > .group-or-rule-container > .group-or-rule::before, .group--children > .group-or-rule-container > .group-or-rule::after': {
            content: string;
            position: string;
            left: string;
            width: string;
            height: string;
            borderColor: string;
            borderStyle: string;
            WebkitBoxSizing: string;
            MozBoxSizing: string;
            boxSizing: string;
        };
        '& .group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::before': {
            display: string;
        };
        '& .group--children.hide--conjs > .group-or-rule-container:first-child > .group-or-rule::after': {
            borderRadius: string;
            borderWidth: string;
        };
        '& .group--children.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::before': {
            display: string;
        };
        '& .group--children.rule_group--children > .group-or-rule-container:first-child > .group-or-rule::after': {
            borderRadius: string;
            borderWidth: string;
        };
        '& .group--children > .group-or-rule-container:first-child > .group-or-rule::before': {
            top: string;
            height: string;
        };
        '& .group--children > .group-or-rule-container:last-child > .group-or-rule::before': {
            borderRadius: string;
        };
        '& .group--children > .group-or-rule-container:last-child > .group-or-rule::after': {
            display: string;
        };
        '& .group--children.hide--line > .group-or-rule-container > .group-or-rule::before, .group--children.hide--line > .group-or-rule-container > .group-or-rule::after': {
            borderColor: string;
        };
        '& .qb-draggable::before, .qb-draggable::after': {
            display: string;
        };
        '& .qb-drag-handler': {
            cursor: string[];
        };
        '& .group--drag-handler': {
            marginRight: string;
            position: string;
            top: string;
        };
        '& .group--conjunctions .group--drag-handler': {
            marginLeft: string;
        };
        '& .group--conjunctions.hide--conj': {
            opacity: number;
        };
        '& .group--actions': {
            marginLeft: string;
            flex: number;
            display: string;
        };
        '& .group--actions--tl, .group--actions--bl': {
            justifyContent: string;
        };
        '& .group--actions--tl': {
            marginLeft: string;
        };
        '& .group--actions--tc, .group--actions--bc': {
            justifyContent: string;
        };
        '& .group--actions--tr, .group--actions--br': {
            justifyContent: string;
        };
        '& .group--actions .action--DELETE': {
            marginTop: string;
        };
        '& .case_group': {
            borderWidth: string;
        };
        '& .switch_group > .group--children > .group-or-rule-container > .group-or-rule::before, .switch_group > .group--children > .group-or-rule-container > .group-or-rule::after': {
            height: string;
        };
        '& .case_group--body': {
            display: string;
            flexDirection: string;
            marginTop: string;
            marginBottom: string;
        };
        '& .case_group--body .case_group--children': {
            flex: string;
            marginTop: string;
            marginBottom: string;
        };
        '& .case_group--body .case_group--value': {
            marginTop: string;
            marginBottom: string;
            marginRight: string;
        };
        '& .rule_group .group--drag-handler': {
            alignSelf: string;
        };
        '& .rule_group .group--field': {
            alignSelf: string;
        };
        '& .rule_group .group--actions': {
            alignSelf: string;
            flex: number;
        };
        '& .rule_group .rule_group--children': {
            flex: number;
            marginTop: string;
            marginBottom: string;
            paddingLeft: string;
        };
        '& .rule_group .rule_group--children .group-or-rule-container': {
            marginBottom: string;
            marginTop: string;
            paddingRight: string;
        };
        '& .rule_group .rule_group--children.one--child': {
            paddingLeft: string;
        };
        '& .rule_group .rule_group--children > .group-or-rule-container > .group-or-rule::before, .rule_group .rule_group--children > .group-or-rule-container > .group-or-rule::after': {
            left: string;
            width: string;
            height: string;
        };
        '& .group--header.hide--drag.with--conjs > .group--field--count--rule': {
            marginLeft: string;
        };
        '& .rule--header': {
            marginLeft: string;
            display: string;
            alignItems: string;
            paddingLeft: string;
        };
        '& .rule--drag-handler': {
            display: string;
            alignItems: string;
            marginRight: string;
        };
        '& .rule--field, .group--field, .rule--operator, .rule--value, .rule--operator-options, .rule--widget, .widget--widget, .widget--valuesrc, .widget--sep, .operator--options--sep, .rule--before-widget, .rule--after-widget': {
            display: string;
        };
        '& .mui .widget--sep, .mui .operator--options--sep, .mui .rule--func--bracket-before, .mui .rule--func--bracket-after, .mui .rule--func--arg-sep': {
            verticalAlign: string;
            alignSelf: string;
            marginBottom: string;
        };
        '& .mui .rule--operator-options': {
            verticalAlign: string;
        };
        '& .mui .widget--valuesrc': {
            verticalAlign: string;
        };
        '& .rule--operator, .widget--widget, .widget--valuesrc, .widget--sep': {
            marginLeft: string;
        };
        '& .widget--valuesrc': {
            marginRight: string;
        };
        '& .widget--valuesrc span i': {
            transform: string;
        };
        '& .operator--options--sep': {
            marginRight: string;
        };
        '& div.tooltip-inner': {
            maxWidth: string;
        };
        '& .rule--field label, .group--field label, .rule--operator label, .widget--widget label': {
            display: string;
            fontWeight: string;
        };
        '& .conjunction': {
            display: string;
        };
        '& .conjunction label': {
            display: string;
            border: string;
            cursor: string;
            color: string;
            textTransform: string;
            padding: string;
        };
        '& .conjunction input': {
            display: string;
        };
        '& .conjunction[data-state=active] label': {
            backgroundColor: string;
            borderColor: string;
        };
        '& .conjunction[data-state=inactive] label': {
            backgroundColor: string;
            borderColor: string;
        };
        '& .conjunction[data-state=inactive] label:hover': {
            backgroundColor: string;
            borderColor: string;
        };
        '& .conjunction:first-child label': {
            borderRadius: string;
        };
        '& .conjunction:last-child label': {
            borderRadius: string;
        };
        '& .conjunction:first-child:last-child': {
            borderRadius: string;
        };
        '& .rule--func--wrapper, .rule--func, .rule--func--args, .rule--func--arg, .rule--func--arg-value, .rule--func--bracket-before, .rule--func--bracket-after, .rule--func--arg-sep, .rule--func--arg-label, .rule--func--arg-label-sep': {
            display: string;
        };
        '& .rule--func--bracket-before, .rule--func--bracket-after': {
            marginLeft: string;
            marginRight: string;
        };
        '& .rule--func--bracket-before': {
            marginLeft: string;
        };
        '& .rule--func--arg-value > .rule--widget': {
            marginLeft: string;
        };
        '& .rule--func--arg-sep': {
            marginLeft: string;
            marginRight: string;
        };
        '& .rule--func--arg-label-sep': {
            marginLeft: string;
            marginRight: string;
        };
        '& .qb-lite .group--drag-handler, .qb-lite .group--actions': {
            transition: string;
        };
        '& .qb-lite .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite .rule_group_ext--drag-handler': {
            transition: string;
        };
        '& .qb-lite .group--header:hover .group--header .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite .group--header:hover .group--header .rule_group_ext--drag-handler,\n.qb-lite .group--header:not(:hover) .group--conjunctions .ant-btn:not(.ant-btn-primary),\n.qb-lite .group--header:not(:hover) .rule_group_ext--drag-handler,\n.qb-lite .rule_group:not(:hover) .group--conjunctions .ant-btn:not(.ant-btn-primary),\n.qb-lite .rule_group:not(:hover) .rule_group_ext--drag-handler': {
            width: string;
            padding: string;
            overflow: string;
            opacity: number;
        };
        '& .qb-lite .widget--valuesrc, .qb-lite .rule--drag-handler, .qb-lite .rule--header': {
            transition: string;
        };
        '& .qb-lite .rule:hover .rule .widget--valuesrc, .qb-lite .rule:hover .rule .rule--drag-handler, .qb-lite .rule:hover .rule .rule--header,\n.qb-lite .rule:not(:hover) .widget--valuesrc,\n.qb-lite .rule:not(:hover) .rule--drag-handler,\n.qb-lite .rule:not(:hover) .rule--header': {
            opacity: number;
        };
        '& .qb-lite.qb-dragging .widget--valuesrc, .qb-lite.qb-dragging .rule--drag-handler, .qb-lite.qb-dragging .rule--header, .qb-lite.qb-dragging .group--drag-handler, .qb-lite.qb-dragging .group--actions': {
            opacity: string;
        };
        '& .qb-lite.qb-dragging .group--conjunctions .ant-btn:not(.ant-btn-primary), .qb-lite.qb-dragging .rule_group_ext--drag-handler': {
            width: string;
            padding: string;
            overflow: string;
            opacity: string;
        };
        '& .group-or-rule-container': {
            marginTop: string;
            marginBottom: string;
            paddingRight: string;
        };
        '& .group-or-rule-container:first-child': {
            marginTop: string;
        };
        '& .group-or-rule-container:last-child': {
            marginBottom: string;
        };
        '& .rule--body.can--shrink--value': {
            display: string;
            alignItems: string;
        };
        '& .rule--body.can--shrink--value .rule--value': {
            flex: number;
        };
        '& .rule--body.can--shrink--value .rule--value > .rule--widget': {
            display: string;
        };
        '& .rule--body.can--shrink--value .rule--value > .rule--widget .widget--widget': {
            flex: number;
        };
        '& .rule--body.can--shrink--value .rule--value > .rule--widget > .widget--valuesrc': {
            display: string;
            alignItems: string;
        };
        '& .rule--value > .rule--widget > .widget--valuesrc .anticon': {
            height: string;
        };
        '& .rule--value > .rule--widget > .widget--valuesrc .anticon svg': {
            height: string;
        };
        '& .svg-inline--fa': {
            pointerEvents: string;
        };
        '& .MuiFormControl-root fieldset legend': {
            fontSize: number;
            padding: number;
            width: number;
        };
        '& .MuiFormControl-root .MuiSelect-select': {
            padding: any;
        };
        '& .MuiFormControl-root .MuiAutocomplete-inputRoot': {
            padding: any;
        };
        '& .MuiFormControl-root .MuiAutocomplete-endAdornment': {
            top: number;
        };
        '& .MuiFormControl-root .MuiSelect-icon': {
            top: number;
        };
        '& .MuiOutlinedInput-input': {
            padding: string;
        };
        '& .MuiAutocomplete-root': {
            width: string;
            minWidth: string;
        };
    };
};
declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"root">;
export { styles, useStyles };
