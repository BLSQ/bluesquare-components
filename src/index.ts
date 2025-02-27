import { LoadingSpinner } from './components/LoadingSpinner';
import * as IasoChipColors from './constants/iaso/chipColors';
import { CsvSvg } from './svg/CsvSvgComponent';
import { DHIS2Svg } from './svg/DHIS2SvgComponent';
import { ExcellSvg } from './svg/ExcellSvgComponent';
import { OrgUnitSvg } from './svg/OrgUnitSvgComponent';
import { PdfSvg } from './svg/PdfSvgComponent';
import { ShapeSvg } from './svg/ShapeSvgComponent';
import { TextSvg } from './svg/TextSvgComponent';
import { WordSvg } from './svg/WordSvgComponent';
import { XmlSvg } from './svg/XmlSvgComponent';
// TODO check if individual snackbars can still be imported
import { BlockPlaceholder } from './components/BlockPlaceholder';
import { DatePicker } from './components/DatePicker';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorBoundaryWithMessage } from './components/ErrorBoundary/ErrorBoundaryWithMessage';
import { LazyImage } from './components/LazyProgressiveImage';
import { BackdropClickModal } from './components/Modal/BackdropClickModal/BackdropClickModal';
import { ConfirmCancelButtons } from './components/Modal/ConfirmCancelButtons';
import { ConfirmCancelModal } from './components/Modal/ConfirmCancelModal';
import { makeFullModal } from './components/Modal/ModalWithButton';
import { SimpleModal } from './components/Modal/SimpleModal';
import { QueryBuilder } from './components/QueryBuilder/components/QueryBuilder';
import { QueryBuilderInput } from './components/QueryBuilder/components/QueryBuilderInput';
import { DynamicSelect } from './components/Treeview/DynamicSelect';
import { EnrichedTreeItem } from './components/Treeview/EnrichedTreeItem';
import { IasoTreeView } from './components/Treeview/IasoTreeView';
import { TreeViewResultsCountSelect } from './components/Treeview/TreeViewResultsCountSelect';
import { TreeViewWithSearch } from './components/Treeview/TreeViewWithSearch';
import { TruncatedTreeview } from './components/Treeview/TruncatedTreeview';
import { AddButton } from './components/buttons/AddButton';
import { ExportButton } from './components/buttons/ExportButton';
import { IconButton } from './components/buttons/IconButton';
import { AddComment } from './components/comments/AddComment';
import { CommentWithThread } from './components/comments/CommentWithThread';
import { SingleComment } from './components/comments/SingleComment';
import { ArrayFieldInput } from './components/inputs/ArrayFieldInput';
import { Checkbox } from './components/inputs/Checkbox';
import { CustomInput } from './components/inputs/CustomInput/CustomInput';
import { FakeInput } from './components/inputs/FakeInput';
import { FilesUpload } from './components/inputs/FileUpload/FilesUpload';
import { FormControl } from './components/inputs/FormControl';
import { InputLabel } from './components/inputs/InputLabel';
import { NumberInput } from './components/inputs/NumberInput';
import { PasswordInput } from './components/inputs/PasswordInput';
import { Radio } from './components/inputs/Radio';
import { SearchInput } from './components/inputs/SearchInput';
import {
    Select,
    baseRenderTagsWithTooltip,
    renderTags,
    renderTagsWithTooltip,
} from './components/inputs/Select';
import { TextInput } from './components/inputs/TextInput';
import { DynamicTabs } from './components/nav/DynamicTabs';
import { ColumnsSelectDrawer } from './components/table/ColumnsSelectDrawer';
import { HeaderRowIcon } from './components/table/HeaderRowIcon';
import { InfoHeader } from './components/table/InfoHeader';
import { SelectionSpeedDials } from './components/table/SelectionSpeedDials';
import { Table } from './components/table/Table';
import { Expander } from './components/table/Table/Expander';
import { PageRowSelect } from './components/table/Table/PageRowSelect';
import * as SnackBar from './snackbars/snackBars';
import * as IasoUiConstants from './constants/iaso/uiConstants';
import { english, french } from './locale';
import { injectIntl } from './localization/injectIntl';
import { patchIntl } from './localization/patchIntl';
import { commonStyles } from './styles/iaso/common';
import { mapStyles } from './styles/iaso/map';
import { mapPopupStyles } from './styles/iaso/mapPopup';
import { rawTheme, theme } from './styles/iaso/theme';
import { testTS } from './utils/test';
import { useKeyPressListener } from './utils/useKeyPressListener';
import { useSafeIntl } from './localization/useSafeIntl';
import { useSkipEffectOnMount } from './utils/useSkipEffectOnMount';
// import { QueryBuilderListToReplace } from './components/QueryBuilder/types';
import { LinkButton } from './Routing/LinkButton';
import { LinkWithLocation } from './Routing/LinkWithLocation';
import {
    useGoBack,
    useRedirectTo,
    useRedirectToReplace,
} from './Routing/redirections';
import { useParamsObject } from './Routing/useParamsObject';
import { ExpandableItem } from './components/ExpandableItem/ExpandableItem';
import { FormattedNumber } from './components/Formatted/FormattedNumber';
import { AlertModal } from './components/Modal/AlertModal/AlertModal';
import { useHumanReadableJsonLogic } from './components/QueryBuilder/hooks/useHumanReadableJsonLogic';
import { SortableList } from './components/Sortable/list';
import { SortableTable } from './components/Sortable/table';

// API
import { makeApiHooks } from './api/apiHooks';

import {
    blsqFetch,
    basePostRequest,
    postRequest,
    getRequest,
    getRequestImage,
    putRequest,
    patchRequest,
    optionsRequest,
    deleteRequest,
    ApiError,
} from './api/Api';
// utils
import {
    addPositionIndex,
    capitalize,
    formatThousand,
    removePositionIndex,
    substituteVars,
    truncateText,
} from './utils';

import { convertObjectToUrlParams, makeRedirectionUrl } from './Routing/utils';

import { ExternalLink } from './Routing/ExternalLink';
import { ExternalLinkIconButton } from './Routing/ExternalLinkIconButton';
import { InputWithInfos } from './components/inputs/InputWithInfos/InputWithInfos';
import { PhoneInput } from './components/inputs/PhoneInput/PhoneInput';
import { TextArea } from './components/inputs/TextArea/TextArea';
import {
    MENU_HEIGHT_WITHOUT_TABS,
    MENU_HEIGHT_WITH_TABS,
    SIDEBAR_WIDTH,
    textPlaceholder,
} from './constants/iaso/uiConstants';
import {
    defaultSelectionActions,
    getColumnsHeadersInfos,
    getOrderArray,
    getParamsKey,
    getSimplifiedColumns,
    getSort,
    getTableParams,
    getTableUrl,
    selectionInitialState,
    setTableSelection,
    tableInitialResult,
} from './utils/tableUtils';
import { usePageTitle } from './components/nav/usePageTitle';
import {
    SidebarProvider,
    useSidebar,
} from './contexts/SideBarContext/SideBarContext';
import { LocalizationProvider } from './localization/LocalizationProvider/LocalizationProvider';
import { EventDispatcher } from './snackbars/EventDispatcher';
import { PageError } from './components/PageError/PageError';
import { TopBar } from './components/nav/TopBar/TopBar';
import SnackBarButton from './snackbars/SnackBarButton';
import { LocaleProvider, useLocale } from './localization/useLocale';
import {
    buttonReloadMessageKey,
    errorSnackBar,
    formErrorMessageKey,
    formSuccessFullMessageKey,
    formWarningMessageKey,
    reloadPageMessageKey,
    reloadPageSnackBar,
    succesfullSnackBar,
    warningSnackBar,
} from './snackbars/snackBars';
import { useSnackBars, useTranslateMessage } from './snackbars/useSnackBars';
import SnackBarErrorMessage from './snackbars/SnackBarErrorMessage';

// Types
export * from './components/QueryBuilder/types';
export * from './components/Sortable/list/types';
export * from './components/Sortable/types';
export * from './components/inputs/PhoneInput/types';
export * from './components/table/Table/types';
export * from './types/types';
export * from './utils/fetchData';
export * from './localization/intlUtils';
export * from './api/types';

export type { CommonStyles } from './styles/iaso/common';

export type {
    Field as QueryBuilderField,
    Fields as QueryBuilderFields,
} from '@react-awesome-query-builder/mui';

export type { TableComponentProps } from './components/table/Table';

export type { IconButtonBuiltInIcon } from './components/buttons/IconButton';

export {
    AddButton,
    AddComment,
    AlertModal,
    ArrayFieldInput,
    BackdropClickModal,
    BlockPlaceholder,
    Checkbox,
    ColumnsSelectDrawer,
    CommentWithThread,
    ConfirmCancelButtons,
    ConfirmCancelModal,
    CsvSvg,
    CustomInput,
    DHIS2Svg,
    DatePicker,
    DynamicSelect,
    DynamicTabs,
    EnrichedTreeItem,
    ErrorBoundary,
    ErrorBoundaryWithMessage,
    ExcellSvg,
    ExpandableItem,
    Expander,
    ExportButton,
    ExternalLink,
    ExternalLinkIconButton,
    FakeInput,
    FilesUpload,
    FormControl,
    FormattedNumber,
    HeaderRowIcon,
    IasoChipColors,
    IasoTreeView,
    IasoUiConstants,
    IconButton,
    InfoHeader,
    InputLabel,
    InputWithInfos,
    LazyImage,
    LinkButton,
    LinkWithLocation,
    LoadingSpinner,
    MENU_HEIGHT_WITHOUT_TABS,
    MENU_HEIGHT_WITH_TABS,
    NumberInput,
    OrgUnitSvg,
    PageRowSelect,
    PasswordInput,
    PdfSvg,
    PhoneInput,
    QueryBuilder,
    QueryBuilderInput,
    Radio,
    SIDEBAR_WIDTH,
    SearchInput,
    Select,
    SelectionSpeedDials,
    ShapeSvg,
    SimpleModal,
    SingleComment,
    SnackBar,
    // IntlFormatMessage,
    // IntlMessage,
    // QueryBuilderListToReplace,
    SortableList,
    SortableTable,
    Table,
    TextArea,
    TextInput,
    TextSvg,
    TreeViewResultsCountSelect,
    TreeViewWithSearch,
    TruncatedTreeview,
    WordSvg,
    XmlSvg,
    addPositionIndex,
    baseRenderTagsWithTooltip,
    capitalize,
    commonStyles,
    convertObjectToUrlParams,
    defaultSelectionActions,
    english,
    formatThousand,
    french,
    getColumnsHeadersInfos,
    getOrderArray,
    getParamsKey,
    getSimplifiedColumns,
    getSort,
    getTableParams,
    getTableUrl,
    injectIntl,
    makeFullModal,
    makeRedirectionUrl,
    mapPopupStyles,
    mapStyles,
    patchIntl,
    rawTheme,
    removePositionIndex,
    renderTags,
    renderTagsWithTooltip,
    selectionInitialState,
    setTableSelection,
    substituteVars,
    tableInitialResult,
    testTS,
    textPlaceholder,
    theme,
    truncateText,
    useGoBack,
    useHumanReadableJsonLogic,
    useKeyPressListener,
    useParamsObject,
    useRedirectTo,
    useRedirectToReplace,
    useSafeIntl,
    useSkipEffectOnMount,
    usePageTitle,
    SidebarProvider,
    useSidebar,
    LocalizationProvider,
    EventDispatcher,
    PageError,
    TopBar,
    SnackBarButton,
    makeApiHooks,
    blsqFetch,
    basePostRequest,
    postRequest,
    getRequest,
    getRequestImage,
    putRequest,
    patchRequest,
    optionsRequest,
    deleteRequest,
    ApiError,
    LocaleProvider,
    useLocale,
    warningSnackBar,
    reloadPageSnackBar,
    succesfullSnackBar,
    errorSnackBar,
    reloadPageMessageKey,
    buttonReloadMessageKey,
    formWarningMessageKey,
    formErrorMessageKey,
    formSuccessFullMessageKey,
    useSnackBars,
    useTranslateMessage,
    SnackBarErrorMessage,
};
