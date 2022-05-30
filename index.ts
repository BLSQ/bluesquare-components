// import * as library from './src/index';

// export default library;
import { LoadingSpinner } from './src/components/LoadingSpinner';
import { CsvSvg } from './src/svg/CsvSvgComponent';
import { DHIS2Svg } from './src/svg/DHIS2SvgComponent';
import { ExcellSvg } from './src/svg/ExcellSvgComponent';
import { OrgUnitSvg } from './src/svg/OrgUnitSvgComponent';
import { PdfSvg } from './src/svg/PdfSvgComponent';
import { ShapeSvg } from './src/svg/ShapeSvgComponent';
import { TextSvg } from './src/svg/TextSvgComponent';
import { WordSvg } from './src/svg/WordSvgComponent';
import { XmlSvg } from './src/svg/XmlSvgComponent';
import * as IasoChipColors from './src/constants/iaso/chipColors';
// TODO check if individual snackbars can still be imported
import * as SnackBar from './src/constants/iaso/snackBars';
import * as IasoUiConstants from './src/constants/iaso/uiConstants';
import { injectIntl } from './src/utils/injectIntl';
import { patchIntl } from './src/utils/patchIntl';
import { useSafeIntl } from './src/utils/useSafeIntl';
import { useSkipEffectOnMount } from './src/utils/useSkipEffectOnMount';
import { theme, rawTheme } from './src/styles/iaso/theme';
import { testTS } from './src/utils/test';
import { commonStyles } from './src/styles/iaso/common';
import { mapStyles } from './src/styles/iaso/map';
import { mapPopupStyles } from './src/styles/iaso/mapPopup';
import { AddButton } from './src/components/buttons/AddButton';
import { ExportButton } from './src/components/buttons/ExportButton';
import { IconButton } from './src/components/buttons/IconButton';
import { DynamicTabs } from './src/components/nav/DynamicTabs';
import { DatePicker } from './src/components/DatePicker';
import { ArrayFieldInput } from './src/components/inputs/ArrayFieldInput';
import { Checkbox } from './src/components/inputs/Checkbox';
import { NumberInput } from './src/components/inputs/NumberInput';
import { PasswordInput } from './src/components/inputs/PasswordInput';
import { Radio } from './src/components/inputs/Radio';
import { SearchInput } from './src/components/inputs/SearchInput';
import { Select, renderTags } from './src/components/inputs/Select';
import { TextInput } from './src/components/inputs/TextInput';
import { FormControl } from './src/components/inputs/FormControl';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { BlockPlaceholder } from './src/components/BlockPlaceholder';
import { ColumnsSelectDrawer } from './src/components/table/ColumnsSelectDrawer';
import { HeaderRowIcon } from './src/components/table/HeaderRowIcon';
import { InfoHeader } from './src/components/table/InfoHeader';
import { SelectionSpeedDials } from './src/components/table/SelectionSpeedDials';
import { Table } from './src/components/table/Table';
import { PageRowSelect } from './src/components/table/Table/PageRowSelect';
import { Expander } from './src/components/table/Table/Expander';
import {
    LinkProvider,
    LinkContext,
    withLink,
    useLink,
} from './src/components/LinkProvider';
import { SingleComment } from './src/components/comments/SingleComment';
import { CommentWithThread } from './src/components/comments/CommentWithThread';
import { AddComment } from './src/components/comments/AddComment';
import { InputLabel } from './src/components/inputs/InputLabel';
import { useKeyPressListener } from './src/utils/useKeyPressListener';
import { DynamicSelect } from './src/components/Treeview/DynamicSelect';
import { EnrichedTreeItem } from './src/components/Treeview/EnrichedTreeItem';
import { IasoTreeView } from './src/components/Treeview/IasoTreeView';
import { TreeViewResultsCountSelect } from './src/components/Treeview/TreeViewResultsCountSelect';
import { TreeViewWithSearch } from './src/components/Treeview/TreeViewWithSearch';
import { TruncatedTreeview } from './src/components/Treeview/TruncatedTreeview';
import { french, english } from './src/locale';
import { LazyImage } from './src/components/LazyProgressiveImage';

export * from './src/utils';
export * from './src/utils/intlUtils';
export * from './src/utils/tableUtils';
export * from './src/utils/fetchData';
export * from './src/constants/iaso/uiConstants';

export {
    LazyImage,
    french,
    english,
    testTS,
    LoadingSpinner,
    CsvSvg,
    DHIS2Svg,
    ExcellSvg,
    OrgUnitSvg,
    PdfSvg,
    ShapeSvg,
    TextSvg,
    WordSvg,
    XmlSvg,
    IasoChipColors,
    SnackBar,
    IasoUiConstants,
    injectIntl,
    patchIntl,
    useSafeIntl,
    useSkipEffectOnMount,
    commonStyles,
    mapStyles,
    mapPopupStyles,
    AddButton,
    ExportButton,
    IconButton,
    DynamicTabs,
    DatePicker,
    Select,
    renderTags,
    PageRowSelect,
    ErrorBoundary,
    TextInput,
    PasswordInput,
    NumberInput,
    ArrayFieldInput,
    SearchInput,
    Checkbox,
    Radio,
    theme,
    rawTheme,
    BlockPlaceholder,
    ColumnsSelectDrawer,
    HeaderRowIcon,
    InfoHeader,
    SelectionSpeedDials,
    Table,
    LinkProvider,
    LinkContext,
    withLink,
    useLink,
    SingleComment,
    CommentWithThread,
    AddComment,
    InputLabel,
    Expander,
    FormControl,
    useKeyPressListener,
    TruncatedTreeview,
    TreeViewWithSearch,
    TreeViewResultsCountSelect,
    IasoTreeView,
    EnrichedTreeItem,
    DynamicSelect,
};
