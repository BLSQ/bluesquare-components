import { LoadingSpinner } from './components/LoadingSpinner';
import { CsvSvg } from './svg/CsvSvgComponent';
import { DHIS2Svg } from './svg/DHIS2SvgComponent';
import { ExcellSvg } from './svg/ExcellSvgComponent';
import { OrgUnitSvg } from './svg/OrgUnitSvgComponent';
import { PdfSvg } from './svg/PdfSvgComponent';
import { ShapeSvg } from './svg/ShapeSvgComponent';
import { TextSvg } from './svg/TextSvgComponent';
import { WordSvg } from './svg/WordSvgComponent';
import { XmlSvg } from './svg/XmlSvgComponent';
import * as IasoChipColors from './constants/iaso/chipColors';
// TODO check if individual snackbars can still be imported
import * as SnackBar from './constants/iaso/snackBars';
import * as IasoUiConstants from './constants/iaso/uiConstants';
import { injectIntl } from './utils/injectIntl';
import { patchIntl } from './utils/patchIntl';
import { useSafeIntl } from './utils/useSafeIntl';
import { useSkipEffectOnMount } from './utils/useSkipEffectOnMount';
import { theme, rawTheme } from './styles/iaso/theme';
import { testTS } from './utils/test';
import { commonStyles } from './styles/iaso/common';
import { mapStyles } from './styles/iaso/map';
import { mapPopupStyles } from './styles/iaso/mapPopup';
import { AddButton } from './components/buttons/AddButton';
import { ExportButton } from './components/buttons/ExportButton';
import { IconButton } from './components/buttons/IconButton';
import { DynamicTabs } from './components/nav/DynamicTabs';
import { DatePicker } from './components/DatePicker';
import { ArrayFieldInput } from './components/inputs/ArrayFieldInput';
import { Checkbox } from './components/inputs/Checkbox';
import { NumberInput } from './components/inputs/NumberInput';
import { PasswordInput } from './components/inputs/PasswordInput';
import { Radio } from './components/inputs/Radio';
import { SearchInput } from './components/inputs/SearchInput';
import { Select, renderTags } from './components/inputs/Select';
import { TextInput } from './components/inputs/TextInput';
import { FormControl } from './components/inputs/FormControl';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BlockPlaceholder } from './components/BlockPlaceholder';
import { ColumnsSelectDrawer } from './components/table/ColumnsSelectDrawer';
import { HeaderRowIcon } from './components/table/HeaderRowIcon';
import { InfoHeader } from './components/table/InfoHeader';
import { SelectionSpeedDials } from './components/table/SelectionSpeedDials';
import { Table } from './components/table/Table';
import { PageRowSelect } from './components/table/Table/PageRowSelect';
import { Expander } from './components/table/Table/Expander';
import {
    LinkProvider,
    LinkContext,
    withLink,
    useLink,
} from './components/LinkProvider';
import { SingleComment } from './components/comments/SingleComment';
import { CommentWithThread } from './components/comments/CommentWithThread';
import { AddComment } from './components/comments/AddComment';
import { InputLabel } from './components/inputs/InputLabel';
import { useKeyPressListener } from './utils/useKeyPressListener';
import { DynamicSelect } from './components/Treeview/DynamicSelect';
import { EnrichedTreeItem } from './components/Treeview/EnrichedTreeItem';
import { IasoTreeView } from './components/Treeview/IasoTreeView';
import { TreeViewResultsCountSelect } from './components/Treeview/TreeViewResultsCountSelect';
import { TreeViewWithSearch } from './components/Treeview/TreeViewWithSearch';
import { TruncatedTreeview } from './components/Treeview/TruncatedTreeview';
import { french, english } from './locale';
import { LazyImage } from './components/LazyProgressiveImage';

export * from './utils';
export * from './utils/intlUtils';
export * from './utils/tableUtils';
export * from './utils/fetchData';
export * from './constants/iaso/uiConstants';

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
