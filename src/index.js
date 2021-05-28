import { LoadingSpinner } from './components/LoadingSpinner';
import { TopBar } from './components/nav/TopBar';
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
// TODO check if exporting translation messages makes sense
import * as IasoCustomTableTranslations from './constants/iaso/customTableTranslations';
// TODO check if individual snackbars can still be imported
import * as SnackBar from './constants/iaso/snackBars';
import * as IasoUiConstants from './constants/iaso/uiConstants';
import { injectIntl } from './utils/injectIntl';
import { patchIntl } from './utils/patchIntl';
import { useSafeIntl } from './utils/useSafeIntl';
import { theme } from './styles/iaso/theme';
import { commonStyles } from './styles/iaso/common';
import { innerDrawerStyles } from './styles/iaso/innerDrawer';
import { mapStyles } from './styles/iaso/map';
import { mapPopupStyles } from './styles/iaso/mapPopup';
import { reactTableStyles } from './styles/iaso/reactTable';
import { AddButton } from './components/buttons/AddButton';
import { DownloadButton } from './components/buttons/DownloadButton';
import { ExportButton } from './components/buttons/ExportButton';
import { IconButton } from './components/buttons/IconButton';
import { DynamicTabs } from './components/nav/DynamicTabs';
import { InnerDrawer } from './components/nav/InnerDrawer';
import { DatePicker } from './components/DatePicker';
import { ArrayFieldInput } from './components/inputs/ArrayFieldInput';
import { Checkbox } from './components/inputs/Checkbox';
import { NumberInput } from './components/inputs/NumberInput';
import { PasswordInput } from './components/inputs/PasswordInput';
import { Radio } from './components/inputs/Radio';
import { SearchInput } from './components/inputs/SearchInput';
import { Select } from './components/inputs/Select';
import { TextInput } from './components/inputs/TextInput';
import { ErrorBoundary } from './components/ErrorBoundary';

export * from './utils';
export * from './utils/intlUtils';

export {
    LoadingSpinner,
    TopBar,
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
    IasoCustomTableTranslations,
    SnackBar,
    IasoUiConstants,
    injectIntl,
    patchIntl,
    useSafeIntl,
    commonStyles,
    innerDrawerStyles,
    mapStyles,
    mapPopupStyles,
    reactTableStyles,
    AddButton,
    DownloadButton,
    ExportButton,
    IconButton,
    DynamicTabs,
    InnerDrawer,
    DatePicker,
    Select,
    ErrorBoundary,
    TextInput,
    PasswordInput,
    NumberInput,
    ArrayFieldInput,
    SearchInput,
    Checkbox,
    Radio,
    theme,
};
